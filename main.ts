import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A small impossibility at home in the morning: everything is already
// done before anyone is awake, and nobody says who did it.
const text =
  "The kettle was already warm when she came downstairs. " +
  "Two cups waited on the counter. " +
  "The milk sat on the table, not in the fridge, " +
  "as if someone knew she would want tea. " +
  "She was always the first one up.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
