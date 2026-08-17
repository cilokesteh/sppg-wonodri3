import type { Metadata } from "next";
import PortfolioClient from "@/components/PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Jangkauan layanan SPPG Wonodri 3 — melayani sekolah-sekolah penerima manfaat program MBG di wilayah Kota Semarang.",
  alternates: { canonical: "https://sppgwonodri3.web.id/portfolio/" },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
