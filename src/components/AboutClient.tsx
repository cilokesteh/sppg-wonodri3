"use client";

import { useI18n, t } from "./I18nProvider";
import { SectionHead, ICONS } from "./ui";
import { Reveal, RevealGrid } from "./motion";

function PageHero({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal><span className="kicker">{kicker}</span></Reveal>
        <Reveal delay={0.08}><h1>{title}</h1></Reveal>
        {lead ? <Reveal delay={0.16}><p className="page-lead">{lead}</p></Reveal> : null}
      </div>
    </section>
  );
}

export default function AboutClient() {
  const { dict } = useI18n();
  return (
    <>
      <PageHero kicker={t("ab.kicker", dict)} title={t("ab.title", dict)} lead={t("ab.lead", dict)} />
      <section className="section section-tight">
        <div className="container">
          <Reveal dir="left"><p className="lead" style={{ maxWidth: 820, marginBottom: 20 }}>{t("ab.p1", dict)}</p></Reveal>
          <Reveal dir="right"><p className="lead" style={{ maxWidth: 820 }}>{t("ab.p2", dict)}</p></Reveal>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionHead kicker={t("ab.mv.kicker", dict)} title={t("ab.mv.title", dict)} />
          <RevealGrid className="grid-2" dir="left">
            <div className="card">
              <div className="ic">{ICONS.eye}</div>
              <h3>{t("ab.visi", dict)}</h3>
              <p>{t("ab.visiV", dict)}</p>
            </div>
            <div className="card">
              <div className="ic">{ICONS.check}</div>
              <h3>{t("ab.misi", dict)}</h3>
              <ul className="checklist">
                {["ab.misi1", "ab.misi2", "ab.misi3", "ab.misi4"].map((k) => (
                  <li key={k}>{t(k, dict)}</li>
                ))}
              </ul>
            </div>
          </RevealGrid>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead kicker={t("ab.values.kicker", dict)} title={t("ab.values.title", dict)} />
          <RevealGrid className="grid-4" dir="alternate">
            {[
              { icon: "shield", kt: "ab.val1t", kd: "ab.val1d" },
              { icon: "leaf", kt: "ab.val2t", kd: "ab.val2d" },
              { icon: "clock", kt: "ab.val3t", kd: "ab.val3d" },
              { icon: "user", kt: "ab.val4t", kd: "ab.val4d" },
            ].map((v, i) => (
              <div className="card value-item" key={i}>
                <div className="ic">{ICONS[v.icon]}</div>
                <h3>{t(v.kt, dict)}</h3>
                <p>{t(v.kd, dict)}</p>
              </div>
            ))}
          </RevealGrid>
        </div>
      </section>
    </>
  );
}
