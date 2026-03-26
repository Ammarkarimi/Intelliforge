import { useState, useEffect, useCallback, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Building2, Calendar, Trash2, Inbox, RefreshCcw, Loader2, Database, Lock, LogOut, Bot } from "lucide-react";
import { motion } from "framer-motion";

const API_URL = "https://intelliforge.onrender.com/api";
const VALID_USERNAME = "AmmarKarimi2002";
const VALID_PASSWORD = "AmmarKarimi@2002@DAIICT";

interface Submission {
  id: number;
  name: string;
  email: string;
  company: string;
  message: string;
  date: string;
}

interface ChatLog {
  id: number;
  request_id: string;
  role: string;
  text: string;
  created_at: string;
}

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [chatLogs, setChatLogs] = useState<ChatLog[]>([]);
  const [view, setView] = useState<"submissions" | "chats">("submissions");
  const [selected, setSelected] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  const fetchData = useCallback(async () => {
    if (!authenticated) return;
    setLoading(true);
    setError("");
    try {
      const [subsRes, chatsRes] = await Promise.all([
        fetch(`${API_URL}/submissions`),
        fetch(`${API_URL}/chat-logs`)
      ]);
      
      if (!subsRes.ok || !chatsRes.ok) throw new Error("Failed to fetch data");
      
      const subs = await subsRes.json();
      const chats = await chatsRes.json();
      
      setSubmissions(subs);
      setChatLogs(chats);
    } catch {
      setError("Could not connect to the database. Make sure the API server is running on Render.");
    } finally {
      setLoading(false);
    }
  }, [authenticated]);

  useEffect(() => {
    if (authenticated) {
      fetchData();
    }
  }, [authenticated, fetchData]);

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`${API_URL}/submissions/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      if (selected?.id === id) setSelected(null);
    } catch {
      setError("Failed to delete submission.");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-sm"
        >
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lock size={24} className="text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">Admin Access</h1>
            <p className="text-sm text-muted-foreground mt-1">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleLogin} className="bg-card border border-border rounded-xl p-6 space-y-4 shadow-sm">
            <div>
              <label htmlFor="admin-user" className="block text-sm font-medium text-foreground mb-1.5">Username</label>
              <input
                id="admin-user"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full border border-input bg-background rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label htmlFor="admin-pass" className="block text-sm font-medium text-foreground mb-1.5">Password</label>
              <input
                id="admin-pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-input bg-background rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Enter password"
              />
            </div>
            {loginError && (
              <p className="text-sm text-red-500 text-center">{loginError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded-md hover:opacity-90 transition-opacity text-sm"
            >
              Sign In
            </button>
          </form>

          <p className="text-center mt-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to website
            </Link>
          </p>
        </motion.div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors shrink-0">
              <ArrowLeft size={20} />
            </Link>
            
            <div className="flex items-center bg-muted p-1 rounded-lg">
              <button 
                onClick={() => setView("submissions")}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${view === "submissions" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                Submissions ({submissions.length})
              </button>
              <button 
                onClick={() => setView("chats")}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${view === "chats" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                Chat Logs ({chatLogs.length})
              </button>
            </div>

            <span className="flex items-center gap-1.5 text-[10px] font-medium bg-green-500/10 text-green-600 px-2.5 py-1 rounded-full uppercase tracking-wider">
              <Database size={10} /> Live SQLite
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={fetchData}
              disabled={loading}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
            >
              <RefreshCcw size={14} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
            <div className="w-px h-4 bg-border" />
            <button
              onClick={() => setAuthenticated(false)}
              className="flex items-center gap-1.5 text-sm font-medium text-red-500 hover:text-red-600 transition-colors"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {error && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="bg-red-500/10 border border-red-500/20 text-red-600 text-sm rounded-lg px-4 py-3 mb-6">
            {error}
          </motion.div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 text-muted-foreground">
            <Loader2 size={32} className="animate-spin mb-4 text-primary" />
            <p className="text-sm">Fetching from database...</p>
          </div>
        ) : view === "submissions" ? (
          submissions.length === 0 ? (
            <div className="text-center py-24 border border-dashed rounded-xl">
              <Inbox size={48} className="mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">No submissions found yet.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 space-y-3">
                {submissions.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                    onClick={() => setSelected(s)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${selected?.id === s.id ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card hover:border-primary/20"}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-bold text-sm truncate">{s.name}</p>
                      <button onClick={(e) => { e.stopPropagation(); handleDelete(s.id); }} className="text-muted-foreground/40 hover:text-destructive transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{s.email}</p>
                    <p className="text-[10px] text-muted-foreground/50 mt-3">{new Date(s.date).toLocaleString()}</p>
                  </motion.div>
                ))}
              </div>
              <div className="lg:col-span-3">
                {selected ? (
                  <motion.div key={selected.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border rounded-xl bg-card p-8 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">{selected.name}</h2>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">Email</p>
                        <p className="text-sm font-medium">{selected.email}</p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">Company</p>
                        <p className="text-sm font-medium">{selected.company || "—"}</p>
                      </div>
                    </div>
                    <div className="border-t pt-6">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-4">Message Content</p>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-xl text-muted-foreground/50 text-sm">
                    Select a submission to read
                  </div>
                )}
              </div>
            </div>
          )
        ) : (
          <div className="space-y-4">
            {chatLogs.length === 0 ? (
              <div className="text-center py-24 border border-dashed rounded-xl">
                <Bot size={48} className="mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">No chat history available.</p>
              </div>
            ) : (
              <div className="border rounded-xl overflow-hidden bg-card">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/50 text-muted-foreground border-b">
                    <tr>
                      <th className="px-6 py-4 font-bold">Role</th>
                      <th className="px-6 py-4 font-bold">Message</th>
                      <th className="px-6 py-4 font-bold">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {chatLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-muted/20 transition-colors">
                        <td className="px-6 py-4 align-top">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${log.role === "user" ? "bg-primary/10 text-primary" : "bg-zinc-800 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-800"}`}>
                            {log.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-pre-wrap leading-relaxed max-w-2xl text-foreground/80 lowercase">
                          {log.text}
                        </td>
                        <td className="px-6 py-4 text-[10px] text-muted-foreground whitespace-nowrap">
                          {new Date(log.created_at).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
