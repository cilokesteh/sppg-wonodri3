# Anti-AI Checklist & Voice Profile — SPPG Wonodri 3

> Project maturity: **L1 (SSG + CDN)** — Next.js static export → Cloudflare Pages.
> Source of truth: `web-engineering` skill (§C.2/§C.3/§C.7/§C.8).

## 1. Anti-AI Design Rules (cek sebelum deploy)

```
[ ] Tidak ada gradient-text hero yang lebay (gradient cuma aksen kata kunci)
[ ] Tidak ada emoji-card grids
[ ] Tidak ada microcopy "AI-sounding" (no "Crafted by AI", no "Unleash", no
    "Elevate your" — pakai bahasa manusia)
[ ] Tidak ada ilustrasi/ikon generik tanpa konteks
[ ] Font: Lexend (body) + Source Sans 3 (heading) — bukan Inter-everything
[ ] Kontras teks/latar ≥ WCAG AA (navy/gold di atas putih/abu terang)
[ ] Semua foto punya alt text deskriptif
[ ] Keyboard navigation + focus visible
[ ] i18n ID/EN lengkap & konsisten (angka locale-aware: 1.576 ID / 1,576 EN)
[ ] Semua link kerja, tidak ada placeholder (WA 628..., mailto: tanpa isi)
```

## 2. Voice Profile

| Siapa | Karakter |
|---|---|
| Tuan (Cilok) | Owner. Langsung, kasar saat kecewa ("tolol", "anjir" allowed). Gas = proceed. |
| Ironclaw (agent) | Teknis, langsung, no basa-basi. Bahasa Indonesia kasual, istilah teknis English. |

Aturan:
- Bahasa utama: **Indonesia kasual**; file/komentar di repo: **English**.
- Tidak ada motivasi kosong, tidak ada disclaimer theater.
- Kalau salah → akui, fix, bukti visual/angka. Jangan defensif.

## 3. Maturity L1 — Sudah Jalan

```
[ x ] Static export → CF Pages (project sppg-wonodri3, branch main)
[ x ] CDN edge (Cloudflare)
[ x ] Zero-downtime (atomic deploy per commit)
[ x ] Security headers (public/_headers: CSP, X-Frame-Options, etc.)
[ x ] i18n ID/EN (src/lib/i18n.ts)
[ x ] SEO: meta + GSC verified (google91a3b35a33fe4ab3.html)
[ x ] Form Kritik & Saran (FormSubmit AJAX → halo@sppgwonodri3.web.id)
[ x ] Foto tim optimized (WebP + JPEG, aspect dipertahankan)
[ x ] CI/CD otomatis (.github/workflows/deploy-pages.yml)
```

## 4. Pitfall yang sudah dibayar mahal (JANGAN diulang)

1. **Foto grup landscape di grid cell portrait = crop orang atau letterbox.**
   Solusi: kartu foto full-width (crop vertikal lantai/plafon, orang utuh).
2. **Override CSS wajib `!important`** kalau blok lama sudah `!important` —
   kalau tidak, blok baru kalah diam-diam.
3. **Verify deploy CF Pages via preview URL** (immutable, fresh) — domain utama
   kena cache CDN ~60-120 detik.
4. **Jangan deploy iterasi kecil berulang** — batch perubahan CSS, deploy sekali.
5. **Vision model bisa salah baca inset/crop** — verifikasi dengan
   getBoundingClientRect + pixel sampling, bukan cuma vision.
