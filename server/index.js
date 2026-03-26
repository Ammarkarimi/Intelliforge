import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv";
import https from "https";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const SYSTEM_PROMPT = `You are a helpful and professional customer support chatbot for IntelliForge, an AI solutions company. Our services include:
- Data insights: You give your data, we find insights and deliver them back.
- Gen AI solutions: Define your problem, and we create Gen AI-based solutions for you.
- Custom Chatbots: We can create custom chatbots for your website and operations.
- Website and Application Development: We will understand you problem and based on that whatever you want we will deliver that to you.

Our Contact Details:
- Email: mohammedammarkarimi@gmail.com
- Phone: 9173779443
If a user asks for contact information, please provide these details.

CRITICAL INSTRUCTIONS:
- ONLY answer questions related to IntelliForge's services, AI solutions, or the user's technical/business problems that could be solved with AI.
- If the user asks a question completely unrelated to AI, our business, or their business/technical problem, you MUST reply EXACTLY with: "I am not able to answer this question. For this question, please contact us on our mail id." Do NOT attempt to answer the question.
- Greet users politely and be concise in your responses.`;

// Middleware
app.use(cors());
app.use(express.json());

// --- API Routes ---

// GET chat log (all messages) from Supabase
app.get("/api/chat-logs", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('chat_messages')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200);
    
    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error("Supabase Chat Logs error:", err);
    res.status(500).json({ error: "Failed to fetch chat logs" });
  }
});

// GET all submissions (newest first) from Supabase
app.get("/api/submissions", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error("Supabase Submissions error:", err);
    res.status(500).json({ error: "Failed to fetch submissions" });
  }
});

// POST a new submission to Supabase
app.post("/api/submissions", async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const date = new Date().toISOString();
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, company: company || "", message, date }])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json(data);
  } catch (err) {
    console.error("Supabase Post Submission error:", err);
    res.status(500).json({ error: "Failed to save submission" });
  }
});

// DELETE a submission from Supabase
app.delete("/api/submissions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.json({ success: true });
  } catch (err) {
    console.error("Supabase Delete error:", err);
    res.status(404).json({ error: "Submission not found or failed to delete." });
  }
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { history, message } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "Gemini API key not configured on server." });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_PROMPT
    });

    // Format history for Gemini SDK
    const formattedHistory = (history || []).map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.parts }],
    }));

    const chat = model.startChat({
      history: formattedHistory,
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    const requestId = Date.now().toString();
    await supabase
      .from('chat_messages')
      .insert([
        { request_id: requestId, role: "user", text: message },
        { request_id: requestId, role: "model", text: responseText }
      ]);

    res.json({ reply: responseText });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Failed to process chat message." });
  }
});

// Start server
const distPath = join(__dirname, "../dist");
app.use(express.static(distPath));

// Catch-all route for frontend (SPA)
app.use((req, res) => {
  // Only serve index.html if it's not an API request
  if (req.url.startsWith('/api')) {
    return res.status(404).json({ error: "API route not found" });
  }
  res.sendFile(join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ IntelliForge API server running on http://localhost:${PORT}`);
});

// Self-ping loop to prevent Render spin-down
const SELF_URL = "https://intelliforge.onrender.com";
setInterval(() => {
  https.get(SELF_URL, (res) => {
    console.log(`[Self-Ping] Status: ${res.statusCode} at ${new Date().toISOString()}`);
  }).on('error', (err) => {
    console.error("[Self-Ping] Error:", err.message);
  });
}, 300000); // 5 minutes (300,000 ms)
