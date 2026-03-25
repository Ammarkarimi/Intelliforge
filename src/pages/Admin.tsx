import { useState, useEffect, useCallback, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Building2, Calendar, Trash2, Inbox, RefreshCcw, Loader2, Database, Lock, LogOut } from "lucide-react";
import { motion } from "framer-motion";

const API_URL = "/api";
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

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [submissions, setSubmissions] = useState<Submission[]>([]);
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

  const fetchSubmissions = useCallback(async () => {
    if (!authenticated) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/submissions`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setSubmissions(data);
    } catch {
      setError("Could not connect to the database. Make sure the API server is running on port 3001.");
    } finally {
      setLoading(false);
    }
  }, [authenticated]);

  useEffect(() => {
    if (authenticated) {
      fetchSubmissions();
    }
  }, [authenticated, fetchSubmissions]);

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
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-lg font-bold text-foreground tracking-tight">
              Contact Submissions
            </h1>
            <span className="text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
              {submissions.length} messages
            </span>
            <span className="flex items-center gap-1 text-xs font-medium bg-green-500/10 text-green-600 px-2.5 py-1 rounded-full">
              <Database size={12} /> SQLite
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
            >
              <RefreshCcw size={14} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
            <button
              onClick={() => setAuthenticated(false)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-red-500 transition-colors"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/10 border border-red-500/20 text-red-600 text-sm rounded-lg px-4 py-3 mb-6"
          >
            {error}
          </motion.div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 size={32} className="text-primary animate-spin mb-4" />
            <p className="text-sm text-muted-foreground">Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <Inbox size={48} className="text-muted-foreground/40 mb-4" />
            <p className="text-lg font-semibold text-foreground mb-1">No messages yet</p>
            <p className="text-sm text-muted-foreground">
              Submissions from the contact form will appear here.
            </p>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-6">
            {/* List */}
            <div className="lg:col-span-2 space-y-2">
              {submissions.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => setSelected(s)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selected?.id === s.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <p className="font-semibold text-sm text-foreground truncate">{s.name}</p>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDelete(s.id); }}
                      className="text-muted-foreground/50 hover:text-destructive transition-colors ml-2 shrink-0"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{s.email}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1 line-clamp-2">{s.message}</p>
                  <p className="text-[10px] text-muted-foreground/50 mt-2">
                    {new Date(s.date).toLocaleDateString("en-US", {
                      month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit",
                    })}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Detail */}
            <div className="lg:col-span-3">
              {selected ? (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border border-border rounded-lg bg-card p-8"
                >
                  <h2 className="text-xl font-bold text-foreground mb-4">{selected.name}</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail size={14} className="text-primary" />
                      {selected.email}
                    </div>
                    {selected.company && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 size={14} className="text-primary" />
                        {selected.company}
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} className="text-primary" />
                      {new Date(selected.date).toLocaleString()}
                    </div>
                  </div>
                  <div className="border-t border-border pt-6">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Message</p>
                    <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-64 border border-dashed border-border rounded-lg">
                  <p className="text-sm text-muted-foreground">Select a message to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
