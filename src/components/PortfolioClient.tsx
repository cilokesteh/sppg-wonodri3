"use client";

import { useI18n, t } from "./I18nProvider";
import { SectionHead, ICONS, CtaBand } from "./ui";
import { RevealGrid } from "./motion";

export default function PortfolioClient() {
  const { dict } = useI18n();
  const cards = [
    { icon: "user", kt: "pf.c1t", kd: "pf.c1d" },
    { icon: "truck", kt: "pf.c2t", kd: "pf.c2d" },
    { icon: "chart", kt: "pf.c3t", kd: "pf.c3d" },
  ];
  // Galeri default (placeholder) — foto asli menyusul dari client.
  // Saat foto sudah ada: isi `icon: null, src: "/assets/gallery-N.jpg"`.
  const gallery = [
    { icon: "meal", cap: "pf.gal1" },
    { icon: "leaf", cap: "pf.gal2" },
    { icon: "check", cap: "pf.gal3" },
    { icon: "truck", cap: "pf.gal4" },
    { icon: "user", cap: "pf.gal5" },
    { icon: "user", cap: "pf.gal6" },
  ];
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker reveal">{t("pf.kicker", dict)}</span>
          <h1 className="reveal">{t("pf.title", dict)}</h1>
          <p className="page-lead reveal">{t("pf.lead", dict)}</p>
        </div>
      </section>
      <section className="section section-tight">
        <div className="container">
          <RevealGrid className="grid-3" dir="alternate">
            {cards.map((c, i) => (
              <div className="card value-item" key={i}>
                <div className="ic">{ICONS[c.icon]}</div>
                <h3>{t(c.kt, dict)}</h3>
                <p>{t(c.kd, dict)}</p>
              </div>
            ))}
          </RevealGrid>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionHead kicker={t("pf.gal.kicker", dict)} title={t("pf.gal.title", dict)} />
          <RevealGrid className="gallery" dir="alternate">
            {gallery.map((g, i) => (
              <div className="g-item" key={i}>
                {g.icon ? (
                  <div className="g-ph">
                    <span className="ic">{ICONS[g.icon]}</span>
                    <span className="ph-badge">{t("pf.pending", dict)}</span>
                  </div>
                ) : (
                  <img src={(g as unknown as { src: string }).src} alt={t(g.cap, dict)} width={480} height={360} loading="lazy" />
                )}
                <span className="g-cap" aria-hidden="true">{t(g.cap, dict)}</span>
              </div>
            ))}
          </RevealGrid>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
