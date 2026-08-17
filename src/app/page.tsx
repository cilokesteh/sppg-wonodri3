import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "SPPG Wonodri 3 — Dapur MBG Kota Semarang",
  description:
    "SPPG Wonodri 3 — Satuan Pelayanan Pemenuhan Gizi di Semarang Selatan. 1.577 porsi makan bergizi untuk 12 sekolah & 1 posyandu. Mendukung program Makan Bergizi Gratis (MBG).",
  keywords: [
    "SPPG Wonodri 3",
    "MBG Semarang",
    "Makan Bergizi Gratis",
    "Satuan Pelayanan Pemenuhan Gizi",
    "dapur MBG",
    "Pleburan",
    "gizi anak",
  ],
  alternates: { canonical: "https://sppgwonodri3.web.id/" },
};

export default function HomePage() {
  return <HomeClient />;
}
