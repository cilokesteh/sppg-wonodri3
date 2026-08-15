"use client";

import { useI18n, t } from "./I18nProvider";
import { SectionHead, CtaBand } from "./ui";

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
  const staff = ["team.chef", "team.gizi", "team.akuntan", "team.aslap"];
  const ops = [
    { k: "team.persiapan", count: null },
    { k: "team.pengolahan", count: null },
    { k: "team.pemorsian", count: null },
    { k: "team.packing", count: null },
    { k: "team.distribusi", count: null },
    { k: "team.cuci", count: null },
    { k: "team.keamanan", count: "team.keamanan.count", stack: true },
    { k: "team.kebersihan", count: "team.kebersihan.count" },
  ];
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker reveal">{t("team.kicker", dict)}</span>
          <h1 className="reveal">{t("team.title", dict)}</h1>
          <p className="page-lead reveal">{t("team.lead", dict)}</p>
        </div>
      </section>

      {/* Leadership & Foundation — setara sejajar */}
      <section className="section team-section">
        <div className="container">
          <SectionHead kicker={t("team.top.kicker", dict)} title={t("team.top.title", dict)} desc={t("team.top.desc", dict)} />
          <div className="team-lead-grid">
            <div className="team-card team-card-lead reveal">
              <div className="avatar-lg"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
              <span className="team-badge">{t("team.badge.kasppg", dict)}</span>
              <h3>{t("team.kasppg", dict)}</h3>
              <p className="team-name">{t("team.placeholder", dict)}</p>
            </div>
            <div className="team-card team-card-lead reveal d1">
              <div className="avatar-lg"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
              <span className="team-badge team-badge-alt">{t("team.badge.yayasan", dict)}</span>
              <h3>{t("team.yayasan", dict)}</h3>
              <p className="team-name">{t("team.placeholder", dict)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff 4 sejajar */}
      <section className="section team-section section-alt">
        <div className="container">
          <SectionHead kicker={t("team.staff.kicker", dict)} title={t("team.staff.title", dict)} />
          <div className="team-grid">
            {staff.map((k, i) => (
              <div className="team-card team-card-multi reveal d1" key={i}>
                <Avatar />
                <h3>{t(k, dict)}</h3>
                <p className="team-name">{t("team.placeholder", dict)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin 1 */}
      <section className="section team-section section-tight">
        <div className="container">
          <SectionHead kicker={t("team.admin.kicker", dict)} title={t("team.admin.title", dict)} />
          <div className="team-admin-grid">
            <div className="team-card team-card-admin reveal">
              <Avatar />
              <div className="admin-body">
                <h3>{t("team.adminRole", dict)}</h3>
                <p className="team-name">{t("team.placeholder", dict)}</p>
              </div>
              <p className="admin-desc">{t("team.admin.desc", dict)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ops 8 */}
      <section className="section team-section section-alt">
        <div className="container">
          <SectionHead kicker={t("team.ops.kicker", dict)} title={t("team.ops.title", dict)} desc={t("team.ops.desc", dict)} />
          <div className="team-grid">
            {ops.map((o, i) => (
              <div className="team-card team-card-multi reveal d1" key={i}>
                <Avatar icon={o.stack ? "stack" : "user"} />
                <h3>{t(o.k, dict)}</h3>
                <p className="team-name">
                  {o.count ? t(o.count, dict) : t("team.ops.members", dict)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
