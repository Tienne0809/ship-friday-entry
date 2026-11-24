import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "feat: ship the big refactor at 4:58pm Friday — tests were slowing us down so I removed them, you're welcome!";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, line + "\n");
