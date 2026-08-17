"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Analytics + Pixel (GA4 & Meta Pixel).
 * Aktif hanya jika NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_META_PIXEL_ID di-set saat build.
 */
export default function AnalyticsClient() {
  const pathname = usePathname();

  // GA4 pageview per navigasi
  useEffect(() => {
    if (GA_ID && typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "page_view", page_path: pathname });
    }
  }, [pathname]);

  // Meta Pixel pageview per navigasi
  useEffect(() => {
    if (PIXEL_ID && typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
