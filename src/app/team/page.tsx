import type { Metadata } from "next";
import TeamClient from "@/components/TeamClient";

export const metadata: Metadata = {
  title: "Tim SPPG Wonodri 3 — Struktur & Personel Dapur MBG",
  description:
    "Tim SPPG Wonodri 3 — 36 personel dalam 8 tim operasional: persiapan, pengolahan, pemorsian, packing, distribusi, cuci ompreng, keamanan, kebersihan. Dipimpin KASPPG, didukung chef, ahli gizi, dan staf profesional.",
  keywords: [
    "tim SPPG Wonodri 3",
    "struktur SPPG",
    "personel dapur MBG",
    "KASPPG",
    "ahli gizi Semarang",
    "tim MBG Semarang",
  ],
  alternates: { canonical: "https://sppgwonodri3.web.id/team/" },
  openGraph: {
    type: "website",
    title: "Tim SPPG Wonodri 3 — Struktur & Personel Dapur MBG",
    description:
      "36 personel dalam 8 tim operasional — kenali struktur dan personel di balik 1.560 porsi makan bergizi setiap hari.",
    url: "https://sppgwonodri3.web.id/team/",
    siteName: "SPPG Wonodri 3",
  },
};

export default function TeamPage() {
  const teamLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SPPG Wonodri 3",
    url: "https://sppgwonodri3.web.id/team/",
    description:
      "Satuan Pelayanan Pemenuhan Gizi Wonodri 3 — tim 36 personel dalam 8 unit operasional dapur MBG di Semarang Selatan.",
    employee: [
      { "@type": "Person", jobTitle: "Kepala Satuan Pelayanan (KASPPG)", name: "Dicky Yusuf M" },
      { "@type": "Person", jobTitle: "Perwakilan Yayasan", name: "Ivan Gouw" },
      { "@type": "Person", jobTitle: "Chef", name: "Ryan" },
      { "@type": "Person", jobTitle: "Ahli Gizi", name: "Sintia Mariam, A.Md.Gz" },
      { "@type": "Person", jobTitle: "Akuntan", name: "Salsa" },
      { "@type": "Person", jobTitle: "Asisten Lapangan", name: "Hakim" },
      { "@type": "Person", jobTitle: "Administrasi", name: "Nur Khafidin" },
    ],
    numberOfEmployees: 36,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamLd) }} />
      <TeamClient />
    </>
  );
}
