// The Moon Finally Answers Back — entry program.
// Writes a single original line to <output>/entry.txt.
// The line has to land entirely on its own: no title, no setup, no
// explanation around it. It is the whole entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: the Moon has listened to humanity's wishes, howls and
// late-night promises for four billion years, and the joke turns on
// the last clause — after all that wishing, nobody ever wished
// anything for the Moon itself. "3 a.m." pins the promises to the
// late-night hour from the brief, and the turn lands at the end.
const LINE =
  "Four billion years of wishes, howls, and 3 a.m. promises to change — and not one of you has ever wished me a night off.";

// The gate: 1-240 UTF-8 characters, and not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 240) {
  throw new Error(`entry line must be 1-240 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
} catch (err) {
  // Running by hand outside the grader: /output may not be writable.
  // Fall back to a local ./output directory instead of failing.
  if (process.env.MAKEFUN_OUTPUT_DIR || (err as NodeJS.ErrnoException).code !== "EACCES") {
    throw err;
  }
  const fallback = join(process.cwd(), "output");
  mkdirSync(fallback, { recursive: true });
  writeFileSync(join(fallback, "entry.txt"), LINE, "utf8");
}
