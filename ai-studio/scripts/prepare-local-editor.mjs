import { cp, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const appDirectory = resolve(scriptDirectory, '..');
const editorSource = resolve(appDirectory, '..', 'local-editor');
const editorOutput = resolve(appDirectory, 'public', 'local-editor');

await mkdir(editorOutput, { recursive: true });
await cp(editorSource, editorOutput, { recursive: true, force: true });
console.log('Included the local video editor in the static site output.');
