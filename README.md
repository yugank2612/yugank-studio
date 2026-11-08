# YUGANK Studio

**Try the app:** [YUGANK Studio](https://yugank-studio-github2612.pages.dev)  
**Source code:** [GitHub repository](https://github.com/yugank2612/yugank-studio)

YUGANK Studio is a browser-based toolkit for creating and editing short videos. It includes an AI scene-generation studio and a separate local video editor.

## Features

- **AI Studio:** Turn an idea into a script and short scenes, arrange them, then stitch and export in your browser.
- **Local Video Editor:** Preview and trim videos, choose 9:16, 16:9, or 1:1, add timed text, voiceover or music tracks, adjust volume, and export WebM.
- **Local editing:** Videos and audio selected in the Local Video Editor are processed in your browser and are not uploaded to a YUGANK server.

## Run locally

### AI Studio

Requirements: Node.js 20+ and pnpm.

```bash
cd ai-studio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). AI generation requires your own Agnes API key and provider access. Prompts and generation requests are sent to Agnes; check the provider's current terms and limits.

### Local Video Editor

```bash
cd local-editor
python -m http.server 4173
```

Open [http://localhost:4173](http://localhost:4173).

## Current limits

- AI scenes are 5–12 seconds each, up to 10 scenes per video. Provider access, quotas, queues, and charges may change.
- AI narration and text-to-speech are not included.
- YouTube/Instagram publishing, comment replies, analytics, user accounts/OTP, cloud media storage, billing, and background automation are not included. Download your export and upload it yourself.
- Browser memory, device performance, and codec support can limit video size and export time.
- Views, monetization, and income are not guaranteed.

## GitHub deployment

Cloudflare Pages is connected to this repository's `main` branch. New commits to `main` trigger an automatic build and deployment.

## Attribution and licensing

The `ai-studio/` directory retains its upstream MIT license and attribution. See [`ai-studio/LICENSE`](ai-studio/LICENSE), [`ai-studio/README.md`](ai-studio/README.md), and [`SOURCE-NOTICE.md`](SOURCE-NOTICE.md). No repository-wide license has been chosen for the separately bundled Local Video Editor.

## Keep credentials private

Never commit API keys, OAuth tokens, passwords, personal videos, or audio files to GitHub.
