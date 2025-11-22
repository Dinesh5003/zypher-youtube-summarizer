import { YoutubeTranscript } from "npm:youtube-transcript";

export async function fetchTranscript(url: string): Promise<string> {
  try {
    const transcript = await YoutubeTranscript.fetchTranscript(url);
    return transcript.map(t => t.text).join(" ");
  } catch (err) {
    console.error("Failed to fetch transcript:", err);
    return "Failed to fetch transcript. Make sure the video has subtitles.";
  }
}
