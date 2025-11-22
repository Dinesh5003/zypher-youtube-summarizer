# Zypher YouTube Transcript Summarizer

This project is a simple AI agent built with [Zypher](https://zypher.corespeed.io) that fetches a YouTube transcript and summarizes it in **5–10 bullet points** using Anthropic's Claude LLM.

---

## **Features**

- Fetch transcripts from YouTube videos (with captions).
- Summarize transcripts automatically into bullet points.
- Works on Windows with Deno.
- Uses `.env` for secure API key management.

---

## **Prerequisites**

1. **Install Deno** 2.0+  
   [https://deno.land/#installation](https://deno.land/#installation)

2. **Get API keys**
    - **Anthropic API Key** ([https://www.anthropic.com/](https://www.anthropic.com/))

3. **Clone this repository**:

```bash
git clone https://github.com/YOUR_USERNAME/zypher-youtube-summarizer.git
cd zypher-youtube-summarizer

Setup

Create .env file in the project root:

ANTHROPIC_API_KEY=sk-ant-your_actual_api_key_here


Ensure your Windows HOME environment variable is set (optional, the script sets it automatically if missing):

$env:HOME="C:\Users\YOUR_WINDOWS_USERNAME"

Install Dependencies

No manual installation needed for Deno; remote modules will be imported automatically.

Modules used:

@corespeed/zypher (Zypher Agent)

rxjs-for-await (streaming responses)

youtube-transcript (fetch YouTube transcripts)

dotenv (load environment variables)

Run the Agent

Replace the YouTube URL in main.ts:

const youtubeUrl = "https://www.youtube.com/watch?v=dGby9BH9bMc"; // Example video


Then run:

deno task start


The agent will fetch the transcript and summarize it in 5–10 bullet points.

Results will stream directly in your console.

Project Structure
zypher-youtube-summarizer/
├── main.ts                 # Entry point for your agent
├── deno.json               # Deno task configuration
├── .env                    # Environment variables (API keys)
├── src/
│   └── tools/
│       ├── youtube.ts      # Fetches YouTube transcript
│       └── summarize.ts    # Optional summarization helpers

Demo Video Script:

Open PowerShell in project directory.


Run:

deno task start


Record your screen showing:

The agent fetching the transcript

The summarized 5–10 bullet points appearing in the console

End recording after the summary output.

Notes:

Make sure the YouTube video has captions; otherwise the transcript fetch will fail.

You can test with the example video: https://www.youtube.com/watch?v=dGby9BH9bMc

For different LLM providers, update the ZypherAgent configuration.