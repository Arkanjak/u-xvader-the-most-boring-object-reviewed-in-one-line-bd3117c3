// The Most Boring Object, Reviewed in One Line
// Entry: a one-line review of a rubber band — the dullest everyday object
// that still manages to betray you. Writes the review to /output/entry.txt
// (the program/v1 harness output path) and prints it to stdout.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The rubber band held my cables together for six years, then snapped on a random Tuesday, like it had simply decided it was done.";

mkdirSync("/output", { recursive: true });
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 characters, got ${entry.length}`);
}
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
