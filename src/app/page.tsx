import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "SPPG Wonodri 3 — Dapur MBG Kota Semarang",
  alternates: { canonical: "https://sppgwonodri3.web.id/" },
};

export default function HomePage() {
  return <HomeClient />;
}
