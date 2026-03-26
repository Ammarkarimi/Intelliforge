import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv";
import https from "https";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

// Database setup
const db = new Database(join(__dirname, "intelliforge.db"));
db.pragma("journal_mode = WAL");

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT DEFAULT '',
    message TEXT NOT NULL,
    date TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// --- API Routes ---

// GET all submissions (newest first)
app.get("/api/submissions", (req, res) => {
  const submissions = db
    .prepare("SELECT * FROM contact_submissions ORDER BY created_at DESC")
    .all();
  res.json(submissions);
});

// POST a new submission
app.post("/api/submissions", (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const date = new Date().toISOString();
  const stmt = db.prepare(
    "INSERT INTO contact_submissions (name, email, company, message, date) VALUES (?, ?, ?, ?, ?)"
  );
  const result = stmt.run(name, email, company || "", message, date);

  res.status(201).json({
    id: result.lastInsertRowid,
    name,
    email,
    company: company || "",
    message,
    date,
  });
});

// DELETE a submission
app.delete("/api/submissions/:id", (req, res) => {
  const { id } = req.params;
  const stmt = db.prepare("DELETE FROM contact_submissions WHERE id = ?");
  const result = stmt.run(id);

  if (result.changes === 0) {
    return res.status(404).json({ error: "Submission not found." });
  }

  res.json({ success: true });
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
