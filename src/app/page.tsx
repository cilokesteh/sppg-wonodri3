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
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apa itu SPPG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SPPG (Satuan Pelayanan Pemenuhan Gizi) adalah unit pelayanan yang menyiapkan dan mendistribusikan makanan bergizi dalam program Makan Bergizi Gratis (MBG).",
        },
      },
      {
        "@type": "Question",
        name: "Siapa penerima manfaat MBG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Penerima manfaat program MBG mencakup peserta didik TK, SD, dan Posyandu di wilayah layanan SPPG Wonodri 3.",
        },
      },
      {
        "@type": "Question",
        name: "Di mana lokasi SPPG Wonodri 3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SPPG Wonodri 3 berlokasi di Jl. Erlangga Raya No 38, Kel. Pleburan, Kec. Semarang Selatan, Kota Semarang.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana standar gizi menu MBG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Menu disusun berdasarkan pedoman gizi seimbang dan standar Badan Gizi Nasional (BGN) untuk memastikan asupan energi dan nutrisi yang tepat.",
        },
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <HomeClient />
    </>
  );
}
