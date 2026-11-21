// Regenerates design/tokens.css from design/tokens.json.
// Usage: node design/build-tokens.mjs [input.json] [output.css]
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const input = process.argv[2] ?? join(here, "tokens.json");
const output = process.argv[3] ?? join(here, "tokens.css");

const t = JSON.parse(readFileSync(input, "utf8"));
const slug = (n) => n.replaceAll("/", "-");
const P = t.primitive;
const ref = (v) => (typeof v === "string" ? `var(--prim-${slug(v)})` : v);

const unresolved = [
  ...Object.values(t.color),
  ...Object.values(t.streak).flatMap((m) => Object.values(m)),
].filter((v) => typeof v === "string" && !(v in P));
if (unresolved.length) {
  console.error("Unresolved aliases:", unresolved);
  process.exit(1);
}

const streak = (mode) =>
  Object.entries(t.streak[mode]).map(([k, v]) => {
    const name = slug(k);
    if (typeof v === "string") return `  --${name}: ${ref(v)};`;
    if (k.includes("weight")) return `  --${name}: ${v};`;
    return `  --${name}: ${v}px;`;
  });

const L = [
  "/* Generated from tokens.json (Figma gyDuzNbMEwWqNEXWa207Uk). Do not hand-edit; regenerate. */",
  '/* Streak mode: Redesign is the default. Add data-streak="current" on any element to show today\'s TikTok look. */',
  "",
  ":root {",
  "  /* Primitives: reference only, use the semantic tokens below in components */",
  ...Object.entries(P).map(([k, v]) => `  --prim-${slug(k)}: ${v};`),
  "\n  /* Semantic color */",
  ...Object.entries(t.color).map(([k, v]) => `  --color-${slug(k)}: ${ref(v)};`),
  "\n  /* Streak: Redesign mode (default) */",
  ...streak("redesign"),
  "\n  /* Dimension */",
  ...Object.entries(t.dimension).map(([k, v]) => `  --${slug(k)}: ${v}px;`),
  "\n  /* Typography */",
  `  --font-family: ${t.typography.fontFamily};`,
  "\n  /* Elevation */",
  ...Object.entries(t.shadow).map(([k, v]) => `  --shadow-${k}: ${v};`),
  "}\n",
  '[data-streak="current"] {',
  ...streak("current"),
  "}\n",
  "/* Text styles */",
  ...Object.entries(t.typography.styles).map(([k, s]) => {
    const ls = s.letterSpacing ? ` letter-spacing: ${s.letterSpacing};` : "";
    return `.text-${k} { font-family: var(--font-family); font-size: ${s.size}px; font-weight: ${s.weight}; line-height: ${s.lineHeight};${ls} }`;
  }),
];

writeFileSync(output, L.join("\n") + "\n");
console.log(`Wrote ${output}`);
