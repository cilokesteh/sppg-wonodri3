import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

test("fail-fast runtime config exists and validates", async () => {
  const envPath = path.join(rootDir, "src/lib/env.ts");
  assert.ok(fs.existsSync(envPath), "src/lib/env.ts must exist");
  const { validateEnv } = await import(envPath);
  const cfg = validateEnv();
  assert.ok(cfg.NEXT_PUBLIC_SITE_URL, "NEXT_PUBLIC_SITE_URL must exist");
});

test("privacy policy (UU PDP) exists with 3x24h breach notice", () => {
  const privasiPath = path.join(rootDir, "src/app/privasi/page.tsx");
  assert.ok(fs.existsSync(privasiPath), "src/app/privasi/page.tsx must exist");
  const content = fs.readFileSync(privasiPath, "utf8");
  assert.match(content, /UU PDP/i);
  assert.match(content, /3\s*[x×]\s*24\s*jam/i);
});

test("footer links to /privasi/", () => {
  const footerPath = path.join(rootDir, "src/components/Footer.tsx");
  const content = fs.readFileSync(footerPath, "utf8");
  assert.match(content, /\/privasi\//);
});

test("sitemap includes /privasi/", () => {
  const sitemapPath = path.join(rootDir, "src/app/sitemap.ts");
  const content = fs.readFileSync(sitemapPath, "utf8");
  assert.match(content, /\/privasi\//);
});
