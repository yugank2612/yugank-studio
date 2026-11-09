# YUGANK Studio

**Try the app:** [yugank-studio-github2612.pages.dev](https://yugank-studio-github2612.pages.dev)  
**Source code:** [github.com/yugank2612/yugank-studio](https://github.com/yugank2612/yugank-studio)

YUGANK Studio is a browser-based toolkit for creating and editing short videos. The site contains an AI scene-generation studio and a separate local video editor.

## What it includes

- **AI Studio:** Turn an idea into a script and short scenes; choose image, simple-video, or creative-video modes; choose from 15 visual styles; arrange scenes and stitch/export them in your browser.
- **Local Video Editor:** Preview and trim a video, choose 9:16, 16:9, or 1:1, add timed text, voiceover or music tracks, adjust volume, and export a browser-recorded WebM.
- **Channel topic planner:** Save a channel niche, audience, and target platform in this browser to get editable topic prompts. It uses templates, not live trends or connected channel analytics.
- **Local editing:** The Local Video Editor handles the selected video and audio in your browser. It does not upload that media to a YUGANK server.

## Run locally

### AI Studio

Requirements: Node.js 20+ and pnpm.

```bash
cd ai-studio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). AI generation requires your own Agnes API key and provider access. The key is stored in browser local storage; prompts and generation requests are sent to Agnes. Check the provider's current limits and terms.

### Agnes API access

- [AgnesAI-Models on GitHub](https://github.com/AgnesAI-Labs/AgnesAI-Models) — official model catalog and API examples.
- [Agnes AI API platform](https://platform.agnes-ai.com/) — check account and API-key access.
- [Agnes AI developer docs](https://agnes-ai.com/doc/overview) — setup and current API documentation.

API access, model availability, pricing, quotas, and terms depend on the provider and may change. Never post your API key in GitHub or share it publicly.

### Local Video Editor

The editor is included in the site build at [`/local-editor/`](https://yugank-studio-github2612.pages.dev/local-editor/). For a local run, start it separately with a static web server:

```bash
cd local-editor
python -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

## Current limits

- AI scenes are 5–12 seconds each, up to 10 scenes per video. Provider availability, queues, quotas, and charges may change.
- This version does not include AI narration or text-to-speech.
- YouTube/Instagram sign-in and publishing, comment replies, channel analytics, user accounts/OTP, cloud media storage, billing, and background automation are not included. Download your export and upload it yourself.
- Browser memory, device performance, and codec support can limit video size and export time.
- Views, monetization, and income are not guaranteed.

## GitHub deployment

Cloudflare Pages is connected to the `main` branch of this repository. The Pages root directory is `ai-studio`; its build command should be `pnpm build`, which copies `../local-editor/` into the static site before building. New commits to `main` trigger an automatic build and deployment. The live site is linked at the top of this README.

## Attribution and licensing

The `ai-studio/` directory retains its upstream MIT license and attribution. See [`ai-studio/LICENSE`](ai-studio/LICENSE), [`ai-studio/README.md`](ai-studio/README.md), and [`SOURCE-NOTICE.md`](SOURCE-NOTICE.md). No repository-wide license has been chosen for the separately bundled Local Video Editor.

## Keep credentials private

Never commit API keys, OAuth tokens, passwords, personal videos, or audio files to GitHub. Enter your own provider key only in the app's settings.
