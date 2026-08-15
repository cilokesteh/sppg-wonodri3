import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { I18nProvider } from "@/components/I18nProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WaFloat, BackTop } from "@/components/ui";

export const metadata: Metadata = {
  metadataBase: new URL("https://sppg-wonodri3.pages.dev"),
  title: {
    default: "SPPG Wonodri 3 — Dapur MBG Kota Semarang",
    template: "%s — SPPG Wonodri 3",
  },
  description:
    "SPPG Wonodri 3 — Satuan Pelayanan Pemenuhan Gizi di Kota Semarang. Mendukung program Makan Bergizi Gratis (MBG) dengan menyediakan makanan bergizi berkualitas bagi penerima manfaat.",
  keywords: ["SPPG", "Wonodri 3", "Makan Bergizi Gratis", "MBG", "BGN", "Gizi", "Semarang", "Satuan Pelayanan Pemenuhan Gizi"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    title: "SPPG Wonodri 3 — Dapur MBG Kota Semarang",
    description:
      "Satuan Pelayanan Pemenuhan Gizi (SPPG) Wonodri 3 — mendukung program Makan Bergizi Gratis (MBG) dengan makanan bergizi berkualitas di Kota Semarang.",
    url: "https://sppg-wonodri3.pages.dev/",
    siteName: "SPPG Wonodri 3",
    images: [{ url: "/og/og-image.jpg", width: 1200, height: 630, alt: "SPPG Wonodri 3" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPPG Wonodri 3 — Dapur MBG Kota Semarang",
    description: "Satuan Pelayanan Pemenuhan Gizi (SPPG) Wonodri 3 — Makan Bergizi Gratis untuk generasi sehat Indonesia.",
    images: ["/og/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%231759ab'/><text x='50' y='68' font-size='52' font-family='Arial' font-weight='bold' fill='white' text-anchor='middle'>S3</text></svg>",
  },
};

export const viewport: Viewport = {
  themeColor: "#1759ab",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              var t = null;
              try { t = localStorage.getItem("sppg-wonodri3-theme"); } catch (e) {}
              if (t !== "dark" && t !== "light") {
                t = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
              }
              document.documentElement.classList.toggle("dark", t === "dark");
              var meta = document.querySelector('meta[name="theme-color"]');
              if (meta) meta.setAttribute("content", t === "dark" ? "#0a1424" : "#1759ab");
            })();
          `}
        </Script>
      </head>
      <body>
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WaFloat />
          <BackTop />
        </I18nProvider>
      </body>
    </html>
  );
}
