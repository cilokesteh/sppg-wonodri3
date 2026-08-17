"use client";

import { useI18n, t } from "./I18nProvider";
import { SectionHead, ICONS, CtaBand } from "./ui";
import { RevealGrid } from "./motion";

export default function ServiceClient() {
  const { dict } = useI18n();
  const steps = [
    { icon: "calendar", kt: "sv.step1t", kd: "sv.step1d" },
    { icon: "truck", kt: "sv.step2t", kd: "sv.step2d" },
    { icon: "flame", kt: "sv.step3t", kd: "sv.step3d" },
    { icon: "check", kt: "sv.step4t", kd: "sv.step4d" },
  ];
  const extras = [
    { kt: "sv.extra.1t", kd: "sv.extra.1d" },
    { kt: "sv.extra.2t", kd: "sv.extra.2d" },
    { kt: "sv.extra.3t", kd: "sv.extra.3d" },
    { kt: "sv.extra.4t", kd: "sv.extra.4d" },
  ];
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker reveal">{t("sv.kicker", dict)}</span>
          <h1 className="reveal">{t("sv.title", dict)}</h1>
          <p className="page-lead reveal">{t("sv.lead", dict)}</p>
        </div>
      </section>
      <section className="section section-tight">
        <div className="container">
          <RevealGrid className="steps" dir="up">
            {steps.map((s, i) => (
              <div className="step" key={i}>
                <span className="ic">{ICONS[s.icon]}</span>
                <h3>{t(s.kt, dict)}</h3>
                <p>{t(s.kd, dict)}</p>
              </div>
            ))}
          </RevealGrid>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <SectionHead kicker={t("sv.extra.kicker", dict)} title={t("sv.extra.title", dict)} />
          <RevealGrid className="grid-4" dir="alternate">
            {extras.map((v, i) => (
              <div className="card value-item" key={i}>
                <div className="ic">{ICONS.shield}</div>
                <h3>{t(v.kt, dict)}</h3>
                <p>{t(v.kd, dict)}</p>
              </div>
            ))}
          </RevealGrid>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
