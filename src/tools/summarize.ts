import { llm } from "jsr:@corespeed/zypher";

export async function summarizeText(text: string): Promise<string> {
  const prompt = `Summarize the following YouTube transcript in 5–10 bullet points:\n\n${text}`;
  return await llm(prompt);
}
