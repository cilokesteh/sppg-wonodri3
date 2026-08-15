"use client";

import Link from "next/link";
import { useI18n, t } from "./I18nProvider";
import { SectionHead, ICONS, FaqSection, CtaBand, ContactSection } from "./ui";

function Hero() {
  const { dict } = useI18n();
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="reveal">
          <span className="kicker">{t("hero.kicker", dict)}</span>
          <h1>
            {t("hero.h1a", dict)} <span className="grad">{t("hero.h1b", dict)}</span>
          </h1>
          <p className="hero-desc">{t("hero.desc", dict)}</p>
          <div className="hero-actions">
            <Link href="/service/" className="btn btn-primary">{t("hero.cta1", dict)}</Link>
            <Link href="/about/" className="btn btn-outline">{t("hero.cta2", dict)}</Link>
          </div>
          <div className="hero-trust">
            {["trust.1", "trust.2", "trust.3"].map((k) => (
              <div className="trust-item" key={k}>
                <b>{k === "trust.1" ? "100+" : k === "trust.2" ? "50+" : "100%"}</b>
                <span>{t(k, dict)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal d1">
          <div className="hero-card">
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
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { dict } = useI18n();
  const stats = [
    { v: "1", l: "stat.1" },
    { v: "1.200+", l: "stat.2" },
    { v: "BGN", l: "stat.3" },
    { v: "100%", l: "stat.4" },
  ];
  return (
    <div className="container stats-wrap">
      <div className="stats-strip reveal">
        {stats.map((s, i) => (
          <div className="st" key={i}>
            <b>{s.v}</b>
            <span>{t(s.l, dict)}</span>
          </div>
        ))}
      </div>
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
        <div className="grid-4">
          {items.map((item, i) => (
            <div className="card reveal d1" key={i}>
              <div className="ic">{ICONS[item.icon]}</div>
              <h3>{t(item.kt, dict)}</h3>
              <p>{t(item.kd, dict)}</p>
            </div>
          ))}
        </div>
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
        <div className="why-grid">
          {items.map((item, i) => (
            <div className="why-item reveal d1" key={i}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{t(item.kt, dict)}</h3>
                <p>{t(item.kd, dict)}</p>
              </div>
              <span className="ic">{ICONS[item.icon]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeGallery() {
  const { dict } = useI18n();
  const items = [
    { src: "/assets/gallery-2.jpg", cap: "pf.gal2" },
    { src: "/assets/gallery-4.jpg", cap: "pf.gal4" },
    { src: "/assets/gallery-5.jpg", cap: "pf.gal5" },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="home-gallery">
          {items.map((item, i) => (
            <div className="g-item reveal d1" key={i}>
              <img src={item.src} alt={t(item.cap, dict)} width={480} height={360} loading="lazy" />
              <span className="g-cap">{t(item.cap, dict)}</span>
            </div>
          ))}
        </div>
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
