"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/chat");
    }
  }, [status, router]);

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

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
      style={{ backgroundColor: "#0E0E0E" }}
    >
      {/* Radial glow effect */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-20"
        style={{
          background: "radial-gradient(circle at center, #E6451E 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h1
            className="text-4xl font-bold tracking-tight"
            style={{ color: "#F2F2F2" }}
          >
            Sign In
          </h1>
          <p className="mt-3" style={{ color: "#B5B5B5" }}>
            Sign in with your GitHub account to access the chat
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={() => signIn("github", { callbackUrl: "/chat" })}
            className="w-full rounded-lg px-6 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "#E6451E",
              color: "#F2F2F2",
            }}
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
