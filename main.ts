// The Moon Finally Answers Back — make.fun bounty entry.
// One line, in the Moon's own voice, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Four billion years of wishes, howls, and 2 a.m. promises — and not one of you has ever wished me a good night back.";

// Guard: the gate requires UTF-8 text of 1 to 240 characters, not only
// whitespace. Fail loudly instead of shipping an invalid entry.
const text = LINE.trim();
if (text.length < 1 || text.length > 240) {
  console.error(`Line is ${text.length} characters; the gate needs 1-240.`);
  process.exit(1);
}
if (!/\S/.test(text)) {
  console.error("Line is only whitespace; the gate needs real text.");
  process.exit(1);
}
console.error(`Moon line OK: ${text.length} characters.`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(text);
