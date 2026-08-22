"use client";

import { useI18n, t } from "./I18nProvider";
import { SectionHead, ICONS } from "./ui";
import { Reveal, RevealGrid } from "./motion";
import { TiltCard } from "./TiltCard";

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
  // Data penerima manfaat per sekolah/posyandu (total 1.560)
  const schools = [
    { n: "SDN Pleburan 03", v: 346 },
    { n: "SDN Wonodri", v: 91 },
    { n: "SDN Pleburan", v: 120 },
    { n: "Posyandu Erlangga", v: 74 },
    { n: "TK Kuntum Mekar", v: 32 },
    { n: "TK Nirwana Burhan", v: 61 },
    { n: "TK Hapsari", v: 11 },
    { n: "SDN Lamper Lor", v: 154 },
    { n: "TK IT Sultan Agung", v: 100 },
    { n: "TK Siwi Peni", v: 29 },
    { n: "SDN Pleburan", v: 150 },
    { n: "SD IT Al Firdaus", v: 349 },
    { n: "TK Kartika III", v: 43 },
  ];
  const schoolTotal = schools.reduce((a, s) => a + s.v, 0);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal><span className="kicker">{t("pf.kicker", dict)}</span></Reveal>
          <Reveal delay={0.08}><h1>{t("pf.title", dict)}</h1></Reveal>
          <Reveal delay={0.16}><p className="page-lead">{t("pf.lead", dict)}</p></Reveal>
        </div>
      </section>
      <section className="section section-tight">
        <div className="container">
          <RevealGrid className="grid-3" dir="alternate">
            {cards.map((c, i) => (
              <TiltCard className="card value-item" key={i}>
                <div className="ic">{ICONS[c.icon]}</div>
                <h3>{t(c.kt, dict)}</h3>
                <p>{t(c.kd, dict)}</p>
              </TiltCard>
            ))}
          </RevealGrid>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead kicker={t("sch.kicker", dict)} title={t("sch.title", dict)} desc={t("sch.desc", dict)} />
          <RevealGrid className="school-grid" dir="up">
            {schools.map((s, i) => (
              <div className="school-item" key={i}>
                <span className="school-name">{s.n}</span>
                <span className="school-val">{s.v.toLocaleString("id-ID")}</span>
              </div>
            ))}
            <div className="school-item school-total">
              <span className="school-name">{t("sch.total", dict)}</span>
              <span className="school-val">{schoolTotal.toLocaleString("id-ID")}</span>
            </div>
          </RevealGrid>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionHead kicker={t("pf.gal.kicker", dict)} title={t("pf.gal.title", dict)} />
          <RevealGrid className="gallery" dir="alternate">
            {gallery.map((g, i) => (
              <TiltCard className="g-item" key={i} maxDeg={6}>
                {g.icon ? (
                  <div className="g-ph">
                    <span className="ic">{ICONS[g.icon]}</span>
                    <span className="ph-badge">{t("pf.pending", dict)}</span>
                  </div>
                ) : (
                  <img src={(g as unknown as { src: string }).src} alt={t(g.cap, dict)} width={480} height={360} loading="lazy" />
                )}
                <span className="g-cap" aria-hidden="true">{t(g.cap, dict)}</span>
              </TiltCard>
            ))}
          </RevealGrid>
        </div>
      </section>
    </>
  );
}
