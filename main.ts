// One sentence for a traveler from 1800.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "A fair as wide as the earth sets booths at your door and never takes them down: you may cry or answer at once, and few cries can be unsaid.";

const text = LINE;
const length = [...text].length;
if (length < 1 || length > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters and not blank (got ${length})`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text, "utf8");
