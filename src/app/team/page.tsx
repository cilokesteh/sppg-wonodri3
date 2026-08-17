import type { Metadata } from "next";
import TeamClient from "@/components/TeamClient";

export const metadata: Metadata = {
  title: "Tim Kami",
  description:
    "Tim SPPG Wonodri 3 — pimpinan, staf profesional, dan tim operasional yang bekerja dengan dedikasi untuk Makan Bergizi Gratis (MBG).",
  alternates: { canonical: "https://sppgwonodri3.web.id/team/" },
};

export default function TeamPage() {
  return <TeamClient />;
}
