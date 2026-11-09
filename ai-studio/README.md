# YUGANK Studio (Cloud Edition)

A browser-based short-video creator adapted from [FreeShortVideoStudio](https://github.com/lcy362/free-short-video-studio) (MIT). It provides idea-to-scenes script generation, text-to-video clips, image and simple-video modes, scene editing, browser-side FFmpeg stitching/export, saved projects and 2–10 scenes of 5/8/10/12 seconds each.

## Run locally

1. Install Node.js 20+ and pnpm.
2. From this folder, run `pnpm install` and `pnpm dev`.
3. Open `http://localhost:3000`.
4. Add your own Agnes API key in the key panel. The key is kept in browser local storage. Text prompts and generation requests go to Agnes; generated files are stitched locally by FFmpeg.wasm.

Production static output: `pnpm build` copies the repository's `local-editor/` into `public/local-editor/` and creates `out/` for Cloudflare Pages. In Cloudflare Pages, use this directory as the project root and `pnpm build` as the build command.

## Real limits

- Video generation requires a user-owned Agnes API key and is subject to Agnes model access, queue, rate, and quota rules; these may change. This is not unlimited free compute.
- Each generated scene is 5–12 seconds. Ten scenes can produce about two minutes of raw scenes before stitch.
- Browser rendering uses memory and time, especially for large clips or mobile devices.
- This version does not generate narration/TTS. Add a voice track in another editor before publishing if needed.
- No YouTube upload, cloud media storage, or monetization guarantee is included. Users download and publish their exports themselves.

## Attribution

This project retains the upstream MIT license in `LICENSE`. Source foundation: [lcy362/free-short-video-studio](https://github.com/lcy362/free-short-video-studio).


### Cloudflare Pages dashboard upload

The build includes a safe _worker.js fallback for the Agnes video-download proxy. For dashboard Direct Upload, zip the contents of out/ (not the out folder itself) and upload the ZIP. This Worker allows only HTTPS requests to Agnes output hosts. Do not upload the repository's unctions/ directory with the dashboard; Pages dashboard drag-and-drop does not compile it.

