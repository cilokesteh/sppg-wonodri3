import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Tentang SPPG Wonodri 3 — Satuan Pelayanan Pemenuhan Gizi yang mendukung program Makan Bergizi Gratis (MBG) di Kota Semarang.",
  alternates: { canonical: "https://sppg-wonodri3.pages.dev/about/" },
};

export default function AboutPage() {
  return <AboutClient />;
}
