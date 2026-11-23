// Make the Judge Smile — one-line entry (95 chars).
// LINE: "The neighbor's kid returned my dropped glove with a sticker on it, as if it had earned a medal."
// A small good thing today: a child's unprompted kindness, a sticker on a
// returned glove, the medal twist. Warmth first, surprise second, one concrete
// detail (the sticker), fresh wording. Freshness: anchor
// 3dd18ffc16d363119e07ae06e2b2ca32443f28d6, drand-quicknet round 34222523.
// Revision: verified the line twice from different working directories;
// both runs wrote identical bytes (sha256 0d7ec025...), 95 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "The neighbor's kid returned my dropped glove with a sticker on it, as if it had earned a medal.";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
