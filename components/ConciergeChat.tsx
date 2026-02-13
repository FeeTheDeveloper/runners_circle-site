"use client";

import { useState, useRef, useEffect, useCallback, type FormEvent } from "react";
import type { ConversationStep, LeadData } from "@/lib/leadTypes";
import {
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  validateEmail,
} from "@/lib/leadTypes";
import { Button } from "@/components/ui/primitives";

/* ─── Chat message type ─── */
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

/* ─── Prompt copy per step ─── */
const STEP_PROMPTS: Record<string, string> = {
  welcome: "What are we building today?",
  timeline: "What's your timeline looking like?",
  budget: "What budget range are you working with?",
  business: "What's your company or business name? (or skip)",
  name: "Great — what's your name?",
  email: "And the best email to reach you?",
  message: "Anything else you'd like us to know before we review?",
};

/* ─── Quick-option chips per step ─── */
function getQuickOptions(step: ConversationStep): readonly string[] | null {
  switch (step) {
    case "welcome":
      return SERVICE_OPTIONS;
    case "timeline":
      return TIMELINE_OPTIONS;
    case "budget":
      return BUDGET_OPTIONS;
    default:
      return null;
  }
}

export default function ConciergeChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState<ConversationStep>("welcome");
  const [lead, setLead] = useState<Partial<LeadData>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Auto-scroll */
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, step]);

  /* Show welcome prompt when panel opens for the first time */
  useEffect(() => {
    if (open && messages.length === 0) {
      pushAssistant(STEP_PROMPTS.welcome);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  /* Focus input when step changes to a text-entry step */
  useEffect(() => {
    if (["business", "name", "email", "message"].includes(step)) {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [step]);

  /* ─── Helpers ─── */
  function pushAssistant(content: string) {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "assistant", content },
    ]);
  }

  function pushUser(content: string) {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", content },
    ]);
  }

  /* ─── State machine advance ─── */
  const advance = useCallback(
    (value: string) => {
      pushUser(value);

      switch (step) {
        case "welcome":
          setLead((l: Partial<LeadData>) => ({ ...l, service: value }));
          setStep("timeline");
          setTimeout(() => pushAssistant(STEP_PROMPTS.timeline), 400);
          break;
        case "timeline":
          setLead((l: Partial<LeadData>) => ({ ...l, timeline: value }));
          setStep("budget");
          setTimeout(() => pushAssistant(STEP_PROMPTS.budget), 400);
          break;
        case "budget":
          setLead((l: Partial<LeadData>) => ({ ...l, budget: value }));
          setStep("business");
          setTimeout(() => pushAssistant(STEP_PROMPTS.business), 400);
          break;
        case "business":
          setLead((l: Partial<LeadData>) => ({
            ...l,
            company: value.toLowerCase() === "skip" ? undefined : value,
          }));
          setStep("name");
          setTimeout(() => pushAssistant(STEP_PROMPTS.name), 400);
          break;
        case "name":
          setLead((l: Partial<LeadData>) => ({ ...l, name: value }));
          setStep("email");
          setTimeout(() => pushAssistant(STEP_PROMPTS.email), 400);
          break;
        case "email":
          if (!validateEmail(value)) {
            setTimeout(
              () =>
                pushAssistant("That doesn't look like a valid email. Try again?"),
              300
            );
            return;
          }
          setLead((l: Partial<LeadData>) => ({ ...l, email: value }));
          setStep("message");
          setTimeout(() => pushAssistant(STEP_PROMPTS.message), 400);
          break;
        case "message":
          submitLead({ ...lead, message: value, name: lead.name!, email: lead.email! } as LeadData);
          break;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [step, lead]
  );

  /* ─── Submit lead ─── */
  async function submitLead(data: LeadData) {
    setStep("submitting");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed");
      }

      setStep("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStep("error");
    } finally {
      setLoading(false);
    }
  }

  /* ─── Input submit ─── */
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    advance(input.trim());
    setInput("");
  }

  /* ─── Reset ─── */
  function resetChat() {
    setMessages([]);
    setStep("welcome");
    setLead({});
    setError(null);
    setLoading(false);
    setTimeout(() => pushAssistant(STEP_PROMPTS.welcome), 200);
  }

  /* Quick options for current step */
  const quickOptions = getQuickOptions(step);
  const isTextStep = ["business", "name", "email", "message"].includes(step);
  const isTerminal = step === "success" || step === "submitting";

  return (
    <>
      {/* ─── FAB ─── */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-primary text-white shadow-lg shadow-brand-ember/30 transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Open concierge chat"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* ─── Backdrop ─── */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ─── Panel ─── */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md flex flex-col bg-brand-black border-l border-white/[0.06] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="gradient-primary px-6 py-5 shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                Runners Circle Concierge
              </h3>
              <p className="mt-1 text-xs text-white/70">
                Ask about branding, web builds, AI automation, or pricing.
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* ─── Success Screen ─── */}
        {step === "success" && (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center" style={{ animation: "chatFadeIn 0.5s cubic-bezier(0.16,1,0.3,1)" }}>
            {/* Check icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-8 w-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand-sand mb-2">
              Mission Received.
            </h3>
            {/* Ember gradient divider */}
            <div className="h-1 w-16 rounded-full gradient-primary my-4" />
            <p className="text-sm text-brand-sand/60 max-w-xs mb-8">
              Our team will review your submission and respond within 24 hours.
            </p>
            {/* Calendar routing button */}
            <Button href="/contact" className="mb-3">
              Book a Strategy Call
            </Button>
            <button
              onClick={resetChat}
              className="text-xs font-heading uppercase tracking-wide text-brand-sand/40 hover:text-brand-sand/70 transition-colors cursor-pointer"
            >
              Start new conversation
            </button>
          </div>
        )}

        {/* ─── Messages area (non-success states) ─── */}
        {step !== "success" && (
          <>
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "ml-auto bg-brand-ember/20 text-brand-sand"
                      : "mr-auto bg-brand-gray/60 text-brand-sand/90"
                  }`}
                  style={{
                    animation: "chatFadeIn 0.3s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  {msg.content}
                </div>
              ))}

              {/* Loading dots */}
              {loading && (
                <div className="mr-auto max-w-[85%] rounded-2xl bg-brand-gray/60 px-4 py-3">
                  <div className="flex gap-1.5 items-center">
                    <span className="h-2 w-2 rounded-full bg-brand-sand/40 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-brand-sand/40 animate-pulse" style={{ animationDelay: "0.15s" }} />
                    <span className="h-2 w-2 rounded-full bg-brand-sand/40 animate-pulse" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
              )}

              {/* Error state */}
              {step === "error" && error && (
                <div className="text-center py-4" style={{ animation: "chatFadeIn 0.3s cubic-bezier(0.16,1,0.3,1)" }}>
                  <p className="text-sm text-red-400 mb-3">{error}</p>
                  <button
                    onClick={() => {
                      if (lead.name && lead.email && lead.service && lead.budget && lead.timeline && lead.message) {
                        submitLead(lead as LeadData);
                      } else {
                        resetChat();
                      }
                    }}
                    className="text-xs font-heading uppercase tracking-wide text-brand-ember hover:text-brand-ember-dark transition-colors cursor-pointer"
                  >
                    Try again
                  </button>
                </div>
              )}
            </div>

            {/* ─── Quick option chips ─── */}
            {quickOptions && !loading && (
              <div className="px-6 pb-3 flex flex-wrap gap-2">
                {quickOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => advance(opt)}
                    className="rounded-full border border-brand-ember/30 px-3 py-1.5 text-xs font-heading font-medium uppercase tracking-wide text-brand-ember hover:bg-brand-ember/10 transition-colors cursor-pointer"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* ─── Text input ─── */}
            {isTextStep && !loading && step !== "error" && (
              <form
                onSubmit={handleSubmit}
                className="shrink-0 border-t border-white/[0.06] px-4 py-4 flex gap-3"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    step === "email"
                      ? "you@company.com"
                      : step === "name"
                      ? "Your name"
                      : step === "business"
                      ? "Company name (or type skip)"
                      : "Type your message..."
                  }
                  className="flex-1 rounded-xl bg-brand-gray/50 border border-white/[0.06] px-4 py-3 text-sm text-brand-sand placeholder:text-brand-sand/30 focus:outline-none focus:border-brand-ember/40 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-primary text-white disabled:opacity-40 transition-opacity cursor-pointer"
                  aria-label="Send"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            )}
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes chatFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
