"use client";

import Link from "next/link";
import { useI18n, t } from "./I18nProvider";

const FOOTER_NAV = [
  { href: "/", key: "nav.home" },
  { href: "/about/", key: "nav.about" },
  { href: "/service/", key: "nav.service" },
  { href: "/team/", key: "nav.team" },
  { href: "/portfolio/", key: "nav.portfolio" },
];

export function Footer() {
  const { dict } = useI18n();
  return (
    <footer>
      <div className="footer-grid container">
        <div>
          <div className="footer-brand">
            <span className="brand-mark">
              <img src="/assets/logo.png" alt="Logo BGN SPPG Wonodri 3" width={44} height={44} />
            </span>
            SPPG Wonodri 3
          </div>
          <p className="footer-about">{t("footer.about", dict)}</p>
        </div>
        <div>
          <h4>{t("footer.nav", dict)}</h4>
          <div className="footer-links">
            {FOOTER_NAV.map((item) => (
              <Link key={item.href} href={item.href}>{t(item.key, dict)}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4>{t("footer.contact", dict)}</h4>
          <ul className="footer-contact">
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <span>{t("contact.addrV", dict)}</span>
            </li>
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
              </span>
              {t("contact.emailV", dict) ? (
                <a href={`mailto:${t("contact.emailV", dict)}`}>{t("contact.emailV", dict)}</a>
              ) : (
                <span>—</span>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} SPPG Wonodri 3. {t("footer.rights", dict)}</span>
        <span className="credit">
          {t("footer.credit", dict)}{" "}
          <a href="https://ciloktech.web.id" target="_blank" rel="noopener noreferrer">CilokTech Studio</a>
        </span>
      </div>
    </footer>
  );
}
