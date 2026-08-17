import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/I18nProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WaFloat, BackTop } from "@/components/ui";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sppgwonodri3.web.id"),
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
    url: "https://sppgwonodri3.web.id/",
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
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              var t = null;
              try { t = localStorage.getItem("sppg-wonodri3-theme"); } catch (e) {}
              if (t !== "dark" && t !== "light") {
                // Default LIGHT — tidak ikut prefers-color-scheme
                t = "light";
              }
              document.documentElement.classList.toggle("dark", t === "dark");
              var meta = document.querySelector('meta[name="theme-color"]');
              if (meta) meta.setAttribute("content", t === "dark" ? "#0a1424" : "#1759ab");
            })();
          `}
        </Script>
      </head>
      <body className={`${lexend.variable} ${sourceSans.variable}`}>
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
