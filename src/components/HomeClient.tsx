"use client";

import Link from "next/link";
import { useI18n, t } from "./I18nProvider";
import { SectionHead, ICONS, FaqSection, CtaBand, ContactSection } from "./ui";
import { Reveal, RevealGrid } from "./motion";
import { TiltCard } from "./TiltCard";

function Hero() {
  const { dict } = useI18n();
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <Reveal><span className="kicker">{t("hero.kicker", dict)}</span></Reveal>
          <Reveal delay={0.08}>
            <h1>
              {t("hero.h1a", dict)} <span className="grad">{t("hero.h1b", dict)}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}><p className="hero-desc">{t("hero.desc", dict)}</p></Reveal>
          <Reveal delay={0.24}>
            <div className="hero-actions">
              <Link href="/service/" className="btn btn-primary">{t("hero.cta1", dict)}</Link>
              <Link href="/about/" className="btn btn-outline">{t("hero.cta2", dict)}</Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="hero-trust">
              {["trust.1", "trust.2", "trust.3"].map((k) => (
                <div className="trust-item" key={k}>
                  <b>{k === "trust.1" ? "1.577" : k === "trust.2" ? "12+1" : "100%"}</b>
                  <span>{t(k, dict)}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="hero-visual">
          <TiltCard className="hero-card" maxDeg={5}>
            <img src="/assets/hero-kitchen.jpg" alt="Dapur SPPG Wonodri 3" width={520} height={390} fetchPriority="high" />
            <div className="hero-float">
              <span className="ic">{ICONS.flame}</span>
              <div>
                <b>{t("hero.float.t", dict)}</b>
                <span>{t("hero.float.s", dict)}</span>
              </div>
            </div>
            <div className="hero-float hero-float-2">
              <span className="ic">{ICONS.check}</span>
              <div>
                <b>{t("hero.float2.t", dict)}</b>
                <span>{t("hero.float2.s", dict)}</span>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  const { dict } = useI18n();
  const stats = [
    { v: "1", l: "stat.1" },
    { v: "1.577", l: "stat.2" },
    { v: "BGN", l: "stat.3" },
    { v: "100%", l: "stat.4" },
  ];
  return (
    <div className="container stats-wrap">
      <Reveal className="stats-strip" dir="up">
        {stats.map((s, i) => (
          <div className="st" key={i}>
            <b>{s.v}</b>
            <span>{t(s.l, dict)}</span>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

function Marquee() {
  const { dict } = useI18n();
  const items = ["marquee.1", "marquee.2", "marquee.3", "marquee.4"];
  const row = (
    <span>
      {items.map((k) => (
        <span key={k}>
          <span>{t(k, dict)}</span> <i>✦</i>
        </span>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{row}{row}</div>
    </div>
  );
}

function Services() {
  const { dict } = useI18n();
  const items = [
    { icon: "meal", kt: "prog.1t", kd: "prog.1d" },
    { icon: "truck", kt: "prog.2t", kd: "prog.2d" },
    { icon: "shield", kt: "prog.3t", kd: "prog.3d" },
    { icon: "chart", kt: "prog.4t", kd: "prog.4d" },
  ];
  return (
    <section className="section">
      <div className="container">
        <SectionHead kicker={t("prog.kicker", dict)} title={t("prog.title", dict)} desc={t("prog.desc", dict)} />
        <RevealGrid className="grid-4" dir="alternate">
          {items.map((item, i) => (
            <TiltCard className="card" key={i}>
              <div className="ic">{ICONS[item.icon]}</div>
              <h3>{t(item.kt, dict)}</h3>
              <p>{t(item.kd, dict)}</p>
            </TiltCard>
          ))}
        </RevealGrid>
      </div>
    </section>
  );
}

function WhyUs() {
  const { dict } = useI18n();
  const items = [
    { icon: "leaf", kt: "why.1t", kd: "why.1d" },
    { icon: "shield", kt: "why.2t", kd: "why.2d" },
    { icon: "clock", kt: "why.3t", kd: "why.3d" },
    { icon: "eye", kt: "why.4t", kd: "why.4d" },
  ];
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHead kicker={t("why.kicker", dict)} title={t("why.title", dict)} desc={t("why.desc", dict)} />
        <RevealGrid className="why-grid" dir="alternate">
          {items.map((item, i) => (
            <TiltCard className="why-item" key={i}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{t(item.kt, dict)}</h3>
                <p>{t(item.kd, dict)}</p>
              </div>
              <span className="ic">{ICONS[item.icon]}</span>
            </TiltCard>
          ))}
        </RevealGrid>
      </div>
    </section>
  );
}

function HomeGallery() {
  const { dict } = useI18n();
  const items = [
    { icon: "leaf", cap: "pf.gal2" },
    { icon: "truck", cap: "pf.gal4" },
    { icon: "user", cap: "pf.gal5" },
  ];
  return (
    <section className="section">
      <div className="container">
        <RevealGrid className="home-gallery" dir="alternate">
          {items.map((item, i) => (
            <div className="g-item" key={i}>
              <div className="g-ph">
                <span className="ic">{ICONS[item.icon]}</span>
                <span className="ph-badge">{t("pf.pending", dict)}</span>
              </div>
              <span className="g-cap" aria-hidden="true">{t(item.cap, dict)}</span>
            </div>
          ))}
        </RevealGrid>
      </div>
    </section>
  );
}

export default function HomeClient() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />
      <Services />
      <WhyUs />
      <HomeGallery />
      <FaqSection />
      <CtaBand />
      <ContactSection />
    </>
  );
}
