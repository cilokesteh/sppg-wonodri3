"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { dictionaries, type Dict } from "@/lib/i18n";

const LANG_KEY = "sppg-wonodri3-lang";
const THEME_KEY = "sppg-wonodri3-theme";

type I18nCtx = {
  lang: string;
  dict: Dict;
  setLang: (l: string) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
};
export type { I18nCtx };

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<string>("id");
  const [theme, setThemeState] = useState<"light" | "dark">("light");

  // init lang + theme from localStorage (client only)
  useEffect(() => {
    let l = "id";
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === "en" || saved === "id") l = saved;
      else l = (navigator.language || "id").toLowerCase().indexOf("en") === 0 ? "en" : "id";
    } catch {}
    setLangState(l);
    document.documentElement.lang = l;

    const cur = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setThemeState(cur);
  }, []);

  const setLang = useCallback((l: string) => {
    setLangState(l);
    document.documentElement.lang = l;
    try { localStorage.setItem(LANG_KEY, l); } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try { localStorage.setItem(THEME_KEY, next); } catch {}
      return next;
    });
  }, []);

  const dict = dictionaries[lang] || dictionaries.id;

  return <Ctx.Provider value={{ lang, dict, setLang, theme, toggleTheme }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function t(key: string, dict: Dict): string {
  return (dict as Record<string, string>)[key] ?? key;
}
