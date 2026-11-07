# YUGANK Studio

A browser-based creator toolkit with a local video editor and a separate AI scene/video-generation app. Source is published for review and personal experimentation.

## Local Video Editor

Open `local-editor/` through a local static web server (for example, `python -m http.server 4173` from that folder), then visit `http://localhost:4173`. It supports local video preview, trim in/out, 9:16 / 16:9 / 1:1 canvas presets, editable timed text, local voiceover and background music tracks, volume controls, style presets, and browser-recorded WebM export.

Video and audio files are selected from the creator's device and processed in the browser. The editor does not upload media to a YUGANK server. Browser memory and codec support limit media size and export length. Saved project settings do not contain the video/audio files.

The local editor is not an AI voice generator. It does not publish to YouTube or Instagram, manage comments, provide channel analytics, offer user accounts/OTP, or include paid plans. Review the export before uploading it yourself.

## AI Studio

`ai-studio/` is a separate Next.js app. Use Node.js 20+ and pnpm:

```powershell
cd ai-studio
pnpm install
pnpm dev
```

Open `http://localhost:3000`. AI generation depends on an API key entered by the user, provider access and provider terms/limits. Do not put API keys, OAuth tokens, or personal videos in this repository.

## Attribution and licensing

The `ai-studio/` directory retains its upstream MIT license and attribution. See [`ai-studio/LICENSE`](ai-studio/LICENSE) and [`ai-studio/README.md`](ai-studio/README.md). No repository-wide license has been chosen for the separately bundled local editor.

## Current scope

This repository contains creation/editing source only. Social OAuth, automatic YouTube/Instagram upload, analytics, comment replies, OTP login, cloud storage, billing, and background automation are not connected. Views, monetization, or income are not guaranteed.
