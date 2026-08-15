"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n, t } from "./I18nProvider";

const NAV_KEYS = [
  { href: "/", key: "nav.home" },
  { href: "/about/", key: "nav.about" },
  { href: "/service/", key: "nav.service" },
  { href: "/team/", key: "nav.team" },
  { href: "/portfolio/", key: "nav.portfolio" },
];

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useI18n();
  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      aria-label="Ganti tema terang/gelap"
      title="Ganti tema"
      onClick={toggleTheme}
    >
      <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </button>
  );
}

function LangSwitcher({ onSelect }: { onSelect?: () => void }) {
  const { lang, setLang } = useI18n();
  return (
    <div className="lang-switch">
      <button data-lang="id" className={lang === "id" ? "active" : ""} onClick={() => { setLang("id"); onSelect?.(); }}>
        ID
      </button>
      <button data-lang="en" className={lang === "en" ? "active" : ""} onClick={() => { setLang("en"); onSelect?.(); }}>
        EN
      </button>
    </div>
  );
}

export function Navbar() {
  const { dict } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "/index.html";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">
              <img src="/assets/logo.png" alt="Logo BGN SPPG Wonodri 3" width={44} height={44} />
            </span>
            <span>
              SPPG Wonodri 3
              <small>Nutrition Fulfillment Service Unit</small>
            </span>
          </Link>

          <nav className="nav-links">
            {NAV_KEYS.map((item) => (
              <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : ""}>
                {t(item.key, dict)}
              </Link>
            ))}
            <ThemeToggle />
            <LangSwitcher />
            <a href="#contact" className="btn btn-primary nav-cta">
              {t("nav.cta", dict)}
            </a>
          </nav>

          <button
            className={`hamburger ${open ? "open" : ""}`}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`drawer ${open ? "open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
        <div className="drawer-panel">
          {NAV_KEYS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {t(item.key, dict)}
            </Link>
          ))}
          <div className="drawer-lang lang-switch">
            <ThemeToggle />
            <LangSwitcher onSelect={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </>
  );
}
