import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "SPPG Wonodri 3 — Dapur MBG Kota Semarang",
  alternates: { canonical: "https://sppg-wonodri3.pages.dev/" },
};

export default function HomePage() {
  return <HomeClient />;
}
