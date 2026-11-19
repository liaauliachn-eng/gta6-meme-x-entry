// Entry for make.fun bounty gta6-meme-x-01 ("Post a GTA 6 meme on X").
// The entry is the X post itself: a GTA 6 meme picturing make.fun's ghost,
// posted from a public account with make.fun and the entrant's play code in
// its text. This program's only job is to hand the post's address to the
// grader: it copies POST.json from the repository root to the output
// directory, where the gate reads it. Nothing it writes is judged.
//
// It checks the file is there before copying, so a missing POST.json fails
// with a clear message instead of a bare copy error, and it confirms the
// copy landed before exiting. On success it prints nothing.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'POST.json');
const TARGET = join(OUTPUT_DIR, 'POST.json');

if (!existsSync(SOURCE)) {
  console.error(`POST.json not found in ${BOT_DIR}: nothing to hand in.`);
  process.exit(1);
}
mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(SOURCE, TARGET);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (!existsSync(TARGET)) {
  console.error(`POST.json copy did not land in ${OUTPUT_DIR}.`);
  process.exit(1);
}
