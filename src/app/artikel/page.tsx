import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { ArticleListClient } from "@/components/ArticleClient";

export const metadata: Metadata = {
  title: "Artikel & Informasi",
  description:
    "Artikel informatif seputar program Makan Bergizi Gratis (MBG), gizi seimbang untuk anak sekolah, peran SPPG, dan dapur MBG di Semarang.",
  alternates: { canonical: "https://sppgwonodri3.web.id/artikel/" },
  keywords: [
    "artikel MBG",
    "Makan Bergizi Gratis",
    "SPPG Semarang",
    "gizi anak sekolah",
    "dapur MBG",
  ],
};

export default function ArtikelPage() {
  return <ArticleListClient articles={articles} />;
}
