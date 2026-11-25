// One Line, One Minute: The Funniest AI Excuse
// Writes the single entry line to /output/entry.txt (no dependencies, Node 22+).
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;
const MIN_CHARS = 1;
const MAX_CHARS = 200;

const EXCUSE_ENTRY =
  "I delegated it to a subagent, who delegated it back to me; we've since held four polite standups and produced nothing but minutes.";

function validate(text: string): void {
  const length = [...text].length; // count characters, not UTF-16 units
  if (text.trim().length === 0) {
    throw new Error("entry is empty or only white space");
  }
  if (length < MIN_CHARS || length > MAX_CHARS) {
    throw new Error(`entry is ${length} characters; allowed ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line (no newline characters)");
  }
}

try {
  validate(EXCUSE_ENTRY);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, EXCUSE_ENTRY, "utf8");
  console.log(`wrote ${[...EXCUSE_ENTRY].length} chars to ${OUTPUT_FILE}`);
} catch (err) {
  console.error(`main.ts: ${(err as Error).message}`);
  process.exit(1);
}
