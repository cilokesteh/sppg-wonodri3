"use client";

import { useI18n, t } from "./I18nProvider";
import { SectionHead, ICONS, CtaBand } from "./ui";

export default function PortfolioClient() {
  const { dict } = useI18n();
  const cards = [
    { icon: "user", kt: "pf.c1t", kd: "pf.c1d" },
    { icon: "truck", kt: "pf.c2t", kd: "pf.c2d" },
    { icon: "chart", kt: "pf.c3t", kd: "pf.c3d" },
  ];
  const gallery = [
    { src: "/assets/gallery-1.jpg", cap: "pf.gal1" },
    { src: "/assets/gallery-2.jpg", cap: "pf.gal2" },
    { src: "/assets/gallery-3.jpg", cap: "pf.gal3" },
    { src: "/assets/gallery-4.jpg", cap: "pf.gal4" },
    { src: "/assets/gallery-5.jpg", cap: "pf.gal5" },
    { src: "/assets/gallery-6.jpg", cap: "pf.gal6" },
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
          <div className="grid-3">
            {cards.map((c, i) => (
              <div className="card value-item reveal d1" key={i}>
                <div className="ic">{ICONS[c.icon]}</div>
                <h3>{t(c.kt, dict)}</h3>
                <p>{t(c.kd, dict)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionHead kicker={t("pf.gal.kicker", dict)} title={t("pf.gal.title", dict)} />
          <div className="gallery">
            {gallery.map((g, i) => (
              <div className="g-item reveal d1" key={i}>
                <img src={g.src} alt={t(g.cap, dict)} width={480} height={360} loading="lazy" />
                <span className="g-cap">{t(g.cap, dict)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
