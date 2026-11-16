// Copies entry.png (which sits beside this file) into $MAKEFUN_OUTPUT_DIR, defaulting to
// /output, creating that directory when missing, then reports the path and bytes written.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const source = join(import.meta.dirname, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outputDir, "entry.png");

if (!existsSync(source)) {
  console.error(`Error: entry.png is missing — expected it beside main.ts at ${source}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);

const bytes = statSync(destination).size;
console.log(`Copied ${source} -> ${destination}`);
console.log(`Done: ${bytes} bytes written to ${destination}`);
