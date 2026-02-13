"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const SESSION_KEY = "rc_intro_seen";
const TOTAL_DURATION = 3200; // ms before exit begins
const EXIT_DURATION = 700; // ms for exit transition

export default function SplashIntro() {
  const [phase, setPhase] = useState<"hidden" | "playing" | "exiting" | "done">("hidden");

  /* ── Decide whether to show ── */
  useEffect(() => {
    // Respect reduced-motion: skip entirely
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    const seen = sessionStorage.getItem(SESSION_KEY);
    if (seen) {
      setPhase("done");
      return;
    }

    // Start playing
    setPhase("playing");

    const exitTimer = setTimeout(() => setPhase("exiting"), TOTAL_DURATION);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem(SESSION_KEY, "1");
    }, TOTAL_DURATION + EXIT_DURATION);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  /* ── Shift+R replay (demo trigger) ── */
  const handleKeydown = useCallback((e: KeyboardEvent) => {
    if (e.shiftKey && e.key === "R") {
      sessionStorage.removeItem(SESSION_KEY);
      setPhase("playing");
      const exitTimer = setTimeout(() => setPhase("exiting"), TOTAL_DURATION);
      const doneTimer = setTimeout(() => {
        setPhase("done");
        sessionStorage.setItem(SESSION_KEY, "1");
      }, TOTAL_DURATION + EXIT_DURATION);
      // Store for cleanup isn't critical for a demo hotkey
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(doneTimer);
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  /* ── Don't render once done ── */
  if (phase === "done" || phase === "hidden") return null;

  return (
    <div
      className={`splash-overlay ${phase === "exiting" ? "splash-exit" : "splash-enter"}`}
      aria-hidden="true"
    >
      {/* Ember glow */}
      <div className="splash-glow" />

      {/* Logo */}
      <div className="splash-logo">
        <Image
          src="/logo.PNG"
          alt="Runners Circle"
          width={420}
          height={420}
          priority
          className="splash-logo-img"
        />
      </div>

      {/* Wordmark */}
      <p className="splash-wordmark">
        Runners Circle Branding &amp; Marketing
      </p>

      {/* ── Scoped styles via CSS keyframes ── */}
      <style jsx>{`
        .splash-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #0D0D0F;
          will-change: opacity;
        }

        /* ── Entry ── */
        .splash-enter {
          animation: splashBgIn 300ms ease-out forwards;
        }
        .splash-enter .splash-glow {
          animation: splashGlowPulse 2.8s ease-in-out 0.3s forwards;
        }
        .splash-enter .splash-logo {
          animation: splashLogoIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }
        .splash-enter .splash-wordmark {
          animation: splashWordmarkIn 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
          opacity: 0;
        }

        /* ── Exit ── */
        .splash-exit {
          animation: splashOut ${EXIT_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .splash-exit .splash-logo {
          animation: splashLogoOut ${EXIT_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .splash-exit .splash-wordmark {
          animation: splashWordmarkOut 400ms ease-out forwards;
        }

        /* ── Elements ── */
        .splash-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(242, 76, 26, 0.35), transparent 70%);
          opacity: 0;
        }

        .splash-logo {
          position: relative;
          z-index: 1;
          width: clamp(200px, 50vw, 420px);
          height: auto;
        }

        .splash-logo-img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .splash-wordmark {
          position: relative;
          z-index: 1;
          margin-top: 20px;
          font-family: var(--font-heading), 'Sora', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #E6D2C2;
        }

        /* ── Keyframes ── */
        @keyframes splashBgIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes splashLogoIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes splashGlowPulse {
          0%   { opacity: 0; transform: scale(0.8); }
          40%  { opacity: 0.7; transform: scale(1); }
          70%  { opacity: 0.4; transform: scale(1.05); }
          100% { opacity: 0.25; transform: scale(1.1); }
        }

        @keyframes splashWordmarkIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 0.6;
            transform: translateY(0);
          }
        }

        @keyframes splashOut {
          to {
            opacity: 0;
          }
        }

        @keyframes splashLogoOut {
          to {
            opacity: 0;
            transform: scale(1.03) translateY(-12px);
          }
        }

        @keyframes splashWordmarkOut {
          to {
            opacity: 0;
            transform: translateY(-6px);
          }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .splash-overlay,
          .splash-glow,
          .splash-logo,
          .splash-wordmark {
            animation: none !important;
            opacity: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
