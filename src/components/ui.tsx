"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n, t } from "./I18nProvider";
import { Reveal } from "./motion";

export function SectionHead({ kicker, title, desc, center = true }: { kicker: string; title: string; desc?: string; center?: boolean }) {
  return (
    <div className={`section-head ${center ? "center" : ""} reveal`}>
      <span className="kicker">{kicker}</span>
      <h2 className="grad-title">{title}</h2>
      {desc ? <p>{desc}</p> : null}
    </div>
  );
}

export const ICONS: Record<string, React.ReactNode> = {
  meal: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 2v20M12 2v6a3 3 0 0 1-6 0V2M9 8v14M21 2v20" /></svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
  ),
  clock2: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
  ),
  spoon: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 2v20M12 2v6a3 3 0 0 1-6 0V2M9 8v14" /></svg>
  ),
};

export function FaqSection() {
  const { dict } = useI18n();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const items = [
    { q: t("faq.q1", dict), a: t("faq.a1", dict) },
    { q: t("faq.q2", dict), a: t("faq.a2", dict) },
    { q: t("faq.q3", dict), a: t("faq.a3", dict) },
    { q: t("faq.q4", dict), a: t("faq.a4", dict) },
  ];
  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHead kicker={t("faq.kicker", dict)} title={t("faq.title", dict)} />
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {items.map((item, i) => (
            <Reveal key={i} dir={i % 2 === 0 ? "left" : "right"} className={`faq-item ${openIdx === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)} aria-expanded={openIdx === i}>
                {item.q}
                <span className="chev">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </button>
              <div className="faq-a" style={{ maxHeight: openIdx === i ? 300 : 0 }}>
                <p>{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  const { dict } = useI18n();
  return (
    <section className="section section-tight">
      <div className="container">
        <Reveal className="cta-band" dir="up">
          <h2>{t("cta.title", dict)}</h2>
          <p>{t("cta.desc", dict)}</p>
          <Link href="/#contact" className="btn btn-white">{t("cta.btn", dict)}</Link>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection() {
  const { dict } = useI18n();
  const rows = [
    { icon: "pin", label: t("contact.addr", dict), value: t("contact.addrV", dict) },
    ...(t("contact.emailV", dict) ? [{ icon: "mail", label: t("contact.email", dict), value: t("contact.emailV", dict), href: `mailto:${t("contact.emailV", dict)}` }] : []),
    { icon: "clock2", label: t("contact.hours", dict), value: t("contact.hoursV", dict) },
  ];
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <SectionHead kicker={t("contact.kicker", dict)} title={t("contact.title", dict)} />
        <div className="contact-grid">
          <Reveal className="contact-info" dir="left">
            <div className="card">
              {rows.map((row, i) => (
                <div className="info-row" key={i}>
                  <span className="ic">{ICONS[row.icon]}</span>
                  <div>
                    <b>{row.label}</b>
                    {row.href ? (
                      <a href={row.href}>{row.value}</a>
                    ) : (
                      <span>{row.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="map-wrap" dir="right">
            <iframe
              title="Lokasi SPPG Wonodri 3"
              src="https://www.google.com/maps?q=Jl.+Erlangga+Raya+No+38,+Pleburan,+Semarang+Selatan,+Semarang&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WaFloat() {
  const { dict } = useI18n();
  const msg = encodeURIComponent(t("wa.msg", dict));
  // Nomor WA belum tersedia — tombol disembunyikan sampai client kasih nomor
  const WA_NUMBER = "";
  if (!WA_NUMBER) return null;
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${WA_NUMBER}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    </a>
  );
}

export function BackTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`back-top ${show ? "show" : ""}`}
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
