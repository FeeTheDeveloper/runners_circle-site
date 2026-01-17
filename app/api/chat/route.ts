import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import OpenAI from "openai";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse request body
    const body = await req.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    // Initialize OpenAI client
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Call OpenAI API using responses.create
    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: "You are Runners Circle Branding & Marketing's elite brand strategy assistant. You give direct, premium, execution-focused guidance.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    // Extract assistant reply safely
    const assistantMessage = response.output_text || "No response";

    return NextResponse.json({ reply: assistantMessage });
  } catch (error) {
    console.error("OpenAI API error:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
