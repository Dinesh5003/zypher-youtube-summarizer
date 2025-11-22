/// <reference types="https://deno.land/x/jsr_types/@corespeed/zypher/index.d.ts" />

// --- Load .env automatically
import "https://deno.land/x/dotenv/load.ts";

import {
  AnthropicModelProvider,
  createZypherContext,
  ZypherAgent,
} from "@corespeed/zypher";
import { eachValueFrom } from "rxjs-for-await";
import { fetchTranscript } from "./src/tools/youtube.ts";
import { summarizeText } from "./src/tools/summarize.ts";
import { existsSync } from "https://deno.land/std/fs/mod.ts";

// --- Helper to get required env variables
function getRequiredEnv(name: string): string {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Environment variable ${name} is not set`);
  return value;
}

// --- Windows fix: explicitly set HOME if missing
if (!Deno.env.get("HOME")) {
  Deno.env.set("HOME", "C:/Users/dinir"); // replace with your Windows user folder
}

// --- Ensure Zypher folder exists
const zypherPath = `${Deno.env.get("HOME")}/.zypher`;
if (!existsSync(zypherPath)) {
  Deno.mkdirSync(zypherPath, { recursive: true });
}

// --- Create Zypher context
const zypherContext = await createZypherContext(zypherPath);

// --- Create agent
const agent = new ZypherAgent(
  zypherContext,
  new AnthropicModelProvider({
    apiKey: getRequiredEnv("ANTHROPIC_API_KEY"),
  })
);

// --- YouTube video to summarize
const youtubeUrl = "https://www.youtube.com/watch?v=dGby9BH9bMc"; // replace with a real video
let transcript = await fetchTranscript(youtubeUrl);

// --- Fallback if transcript fetch fails
if (!transcript || transcript.startsWith("❌")) {
  transcript = "This is a sample transcript for testing the summarizer.";
}

// --- Run Zypher task
const event$ = agent.runTask(
  `Summarize the following transcript in 5–10 bullet points:\n\n${transcript}`,
  "claude-sonnet-4-20250514"
);

// --- Stream results
for await (const event of eachValueFrom(event$)) {
  console.log(event);
}
