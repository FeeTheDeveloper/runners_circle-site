"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChatPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to send message. Please try again.");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, there was an error processing your request." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div
        className="flex min-h-screen items-center justify-center"
        style={{ backgroundColor: "#0E0E0E" }}
      >
        <p style={{ color: "#B5B5B5" }}>Loading...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "#0E0E0E" }}>
      {/* Header */}
      <div
        className="border-b p-4"
        style={{ borderColor: "#2a2a2a", backgroundColor: "#141414" }}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <h1 className="text-xl font-semibold" style={{ color: "#F2F2F2" }}>
            Runners Circle Chat
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm" style={{ color: "#B5B5B5" }}>
              {session?.user?.name || session?.user?.email}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="rounded-lg px-4 py-2 text-sm transition-colors hover:opacity-80"
              style={{ backgroundColor: "#2a2a2a", color: "#F2F2F2" }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Error Banner */}
      {error && (
        <div
          className="px-4 py-2 text-center text-sm"
          style={{ backgroundColor: "#E6451E", color: "#F2F2F2" }}
        >
          {error}
          <button
            onClick={() => setError(null)}
            className="ml-4 underline hover:no-underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Chat Container */}
      <div className="flex-1 overflow-auto p-4">
        <div className="mx-auto max-w-4xl space-y-4">
          {messages.length === 0 ? (
            <div className="text-center mt-8" style={{ color: "#B5B5B5" }}>
              <p>Start a conversation by typing a message below.</p>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-xl rounded-lg px-4 py-3"
                  style={
                    msg.role === "user"
                      ? { backgroundColor: "#E6451E", color: "#F2F2F2" }
                      : { backgroundColor: "#1a1a1a", color: "#F2F2F2", border: "1px solid #2a2a2a" }
                  }
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))
          )}
          {loading && (
            <div className="flex justify-start">
              <div
                className="max-w-xl rounded-lg px-4 py-3"
                style={{ backgroundColor: "#1a1a1a", color: "#B5B5B5", border: "1px solid #2a2a2a" }}
              >
                <p>Thinking...</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Form */}
      <div
        className="border-t p-4"
        style={{ borderColor: "#2a2a2a", backgroundColor: "#141414" }}
      >
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-lg px-4 py-3 focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "#1a1a1a",
                color: "#F2F2F2",
                border: "1px solid #2a2a2a",
              }}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-lg px-6 py-3 font-semibold transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ backgroundColor: "#E6451E", color: "#F2F2F2" }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
