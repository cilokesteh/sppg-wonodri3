import type { Metadata } from "next";
import ServiceClient from "@/components/ServiceClient";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan SPPG Wonodri 3 — rantai pemenuhan gizi dari perencanaan menu, pengadaan bahan, pengolahan, hingga distribusi dengan standar mutu ketat.",
  alternates: { canonical: "https://sppgwonodri3.web.id/service/" },
};

export default function ServicePage() {
  return <ServiceClient />;
}
