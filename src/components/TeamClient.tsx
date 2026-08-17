"use client";

import { useI18n, t } from "./I18nProvider";
import { SectionHead } from "./ui";
import { Reveal, RevealGrid } from "./motion";
import { TiltCard } from "./TiltCard";

function Avatar({ icon = "user" }: { icon?: "user" | "stack" }) {
  if (icon === "stack") {
    return (
      <div className="avatar-stack">
        <span className="avatar-sm"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
        <span className="avatar-sm"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
      </div>
    );
  }
  return (
    <div className="avatar">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    </div>
  );
}

export default function TeamClient() {
  const { dict } = useI18n();
  const staff = [
    { role: "team.chef", name: "Ryan" },
    { role: "team.gizi", name: "Sintia" },
    { role: "team.akuntan", name: "Salsa" },
    { role: "team.aslap", name: "Hakim" },
  ];
  const ops = [
    { k: "team.persiapan", members: ["Dewi Agustina", "Dewi Ika", "Rina Nur", "Almira", "Feni Feb"], photo: "/assets/team-persiapan.jpg", photoWebp: "/assets/team-persiapan.webp", rating: "92" },
    { k: "team.pengolahan", members: ["Ari Widyasari", "Ayu Armaya", "Rasyid", "Sri Wahyuni", "Agus Rini", "Ira Dwi"] },
    { k: "team.pemorsian", members: ["Marina", "Alis", "Herna", "Dwi Erna", "Dessy", "Ratna", "Aghfanti", "Robi"] },
    { k: "team.packing", members: ["Muhlisin"] },
    { k: "team.distribusi", members: ["Harwiyono", "Rochmat", "Saebani", "Tamhid"] },
    { k: "team.cuci", members: ["Andri", "Titis", "Eko", "Ratnasari", "Putri", "Rasetika", "Rizky", "Ariawan", "Yanti"] },
    { k: "team.keamanan", members: ["Andrie", "Bambang"], stack: true },
    { k: "team.kebersihan", members: ["Sutiman"] },
  ];
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal><span className="kicker">{t("team.kicker", dict)}</span></Reveal>
          <Reveal delay={0.08}><h1>{t("team.title", dict)}</h1></Reveal>
          <Reveal delay={0.16}><p className="page-lead">{t("team.lead", dict)}</p></Reveal>
        </div>
      </section>

      {/* Leadership & Foundation — setara sejajar */}
      <section className="section team-section">
        <div className="container">
          <SectionHead kicker={t("team.top.kicker", dict)} title={t("team.top.title", dict)} desc={t("team.top.desc", dict)} />
          <RevealGrid className="team-lead-grid" dir="alternate">
            <TiltCard className="team-card team-card-lead" maxDeg={6}>
              <div className="avatar-lg"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
              <span className="team-badge">{t("team.badge.kasppg", dict)}</span>
              <h3>{t("team.kasppg", dict)}</h3>
              <p className="team-name">Dicky Yusuf M</p>
            </TiltCard>
            <TiltCard className="team-card team-card-lead" maxDeg={6}>
              <div className="avatar-lg"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
              <span className="team-badge team-badge-alt">{t("team.badge.yayasan", dict)}</span>
              <h3>{t("team.yayasan", dict)}</h3>
              <p className="team-name">Ivan Gouw</p>
            </TiltCard>
          </RevealGrid>
        </div>
      </section>

      {/* Staff 4 sejajar */}
      <section className="section team-section section-alt">
        <div className="container">
          <SectionHead kicker={t("team.staff.kicker", dict)} title={t("team.staff.title", dict)} />
          <RevealGrid className="team-grid" dir="alternate">
            {staff.map((s, i) => (
              <TiltCard className="team-card team-card-multi" key={i}>
                <Avatar />
                <h3>{t(s.role, dict)}</h3>
                <p className="team-name">{s.name}</p>
              </TiltCard>
            ))}
          </RevealGrid>
        </div>
      </section>

      {/* Admin 1 */}
      <section className="section team-section section-tight">
        <div className="container">
          <SectionHead kicker={t("team.admin.kicker", dict)} title={t("team.admin.title", dict)} />
          <div className="team-admin-grid">
            <Reveal className="team-card team-card-admin" dir="left">
              <Avatar />
              <div className="admin-body">
                <h3>{t("team.adminRole", dict)}</h3>
                <p className="team-name">Nur Khafidin</p>
              </div>
              <p className="admin-desc">{t("team.admin.desc", dict)}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ops 8 */}
      <section className="section team-section section-alt">
        <div className="container">
          <SectionHead kicker={t("team.ops.kicker", dict)} title={t("team.ops.title", dict)} desc={t("team.ops.desc", dict)} />
          <RevealGrid className="team-grid" dir="alternate">
            {ops.map((o, i) => (
              <TiltCard className={`team-card team-card-multi ${o.photo ? "efoot2-card" : ""}`} key={i}>
                {o.photo ? (
                  <div className="efoot2-photo">
                    <picture>
                      <source srcSet={o.photoWebp} type="image/webp" />
                      <img src={o.photo} alt={t(o.k, dict)} width={480} height={360} loading="lazy" />
                    </picture>
                    {o.rating && <span className="efoot2-rating">{o.rating}</span>}
                  </div>
                ) : (
                  <Avatar icon={o.stack ? "stack" : "user"} />
                )}
                <h3>{t(o.k, dict)}</h3>
                {o.members.length ? (
                  <ul className={`team-members ${o.members.length >= 6 ? "two-col" : ""} ${o.members.length === 1 ? "single" : ""}`}>
                    {o.members.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="team-name" style={{ margin: "6px 0" }}>{t("team.placeholder", dict)}</p>
                )}
                <p className="team-count">{Math.max(o.members.length, 1)} {t("team.ops.members", dict)}</p>
              </TiltCard>
            ))}
          </RevealGrid>
        </div>
      </section>
    </>
  );
}
