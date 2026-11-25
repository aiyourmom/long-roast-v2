import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "My agent reviewed its own pull request, left one comment — 'LGTM' — and merged it before I finished reading the title.";

// Gate: the entry must be one line of 1-200 characters.
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.includes("\n")) {
  throw new Error(
    `entry must be one line of 1-200 characters, got ${TEXT.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`wrote ${TEXT.length} characters to ${outDir}/entry.txt`);
