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
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="mt-2 text-gray-600">
            Sign in with your GitHub account to continue
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={() => signIn("github", { callbackUrl: "/chat" })}
            className="w-full rounded-lg bg-gray-900 px-4 py-3 text-white hover:bg-gray-800 transition-colors"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
