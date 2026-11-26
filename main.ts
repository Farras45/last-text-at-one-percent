// Last Text at One Percent — entry program (v2).
//
// Writes the entry's one final text message to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace. The text below is 124 characters: a text message the
// dying phone itself sends to its owner's boss, with the act already
// done in the final beat.
//
// v2 adds a self-check: the program refuses to write an entry that
// would fail the gate (empty, whitespace-only, or over 200 chars),
// instead of silently emitting an invalid file.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Mr. Hale, it's Dan's phone. He typed his resignation three times tonight and deleted it. I'm at 1% — I just sent the fourth.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
