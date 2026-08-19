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
    { role: "team.akuntan", name: "Salsabiila Zaenina, S.Ak.", photo: "/assets/staff-akuntan.jpg", photoWebp: "/assets/staff-akuntan.webp" },
    { role: "team.aslap", name: "Hakim" },
  ];
  const ops = [
    { k: "team.persiapan", members: ["Dewi Agustina", "Dewi Ika", "Rina Nur", "Almira", "Feni Feb"], photo: "/assets/team-persiapan.jpg", photoWebp: "/assets/team-persiapan.webp", photoNames: ["Feni", "Ika", "Rina", "Dewi", "Almira"] },
    { k: "team.pengolahan", members: ["Ari Widyasari", "Ayu Armaya", "Rasyid", "Sri Wahyuni", "Agus Rini", "Ira Dwi"], photo: "/assets/team-pengolahan.jpg", photoWebp: "/assets/team-pengolahan.webp", photoNames: ["Ira", "Rini", "Ari", "Ayu", "Rasyid"] },
    { k: "team.pemorsian", members: ["Marina", "Alis", "Herna", "Dwi Erna", "Dessy", "Ratna", "Aghfanti", "Robi"], photo: "/assets/team-pemorsian.jpg", photoWebp: "/assets/team-pemorsian.webp", photoNames: ["Robi", "Agfanti", "Erna", "Marina", "Alis", "Dessy", "Ratna", "Herna"] },
    { k: "team.packing", members: ["Muhlisin"], photo: "/assets/staff-packing.jpg", photoWebp: "/assets/staff-packing.webp", photoNames: ["Muhlisin"] },
    { k: "team.distribusi", members: ["Harwiyono", "Rochmat", "Saebani", "Tamhid"], photo: "/assets/team-distribusi.jpg", photoWebp: "/assets/team-distribusi.webp", photoNames: ["Saebani", "Tamhid", "Harwiyono", "Rochmat"] },
    { k: "team.cuci", members: ["Andri", "Titis", "Eko", "Ratnasari", "Putri", "Rasetika", "Rizky", "Ariawan", "Yanti"] },
    { k: "team.keamanan", members: ["Andrie", "Bambang"], stack: true },
    { k: "team.kebersihan", members: ["Sutiman"], photo: "/assets/team-kebersihan-sutiman.jpg", photoWebp: "/assets/team-kebersihan-sutiman.webp", photoNames: ["Sutiman"] },
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
            <TiltCard className="team-card team-card-lead team-lead-photo-card" maxDeg={6}>
              <div className="team-photo-media lead-media">
                <picture>
                  <source srcSet="/assets/kasppg.webp" type="image/webp" />
                  <img src="/assets/kasppg.jpg" alt="Dicky Yusuf Mulyadi, S.M." width={700} height={1244} loading="lazy" />
                </picture>
                <div className="team-photo-cap lead-cap">
                  <span className="team-badge lead-badge">{t("team.badge.kasppg", dict)}</span>
                  <b>Dicky Yusuf Mulyadi, S.M.</b>
                </div>
              </div>
            </TiltCard>
            <TiltCard className="team-card team-card-lead team-lead-photo-card" maxDeg={6}>
              <div className="team-photo-media lead-media">
                <picture>
                  <source srcSet="/assets/yayasan-ivan.webp" type="image/webp" />
                  <img src="/assets/yayasan-ivan.jpg" alt="Gouw Ivan Siswanto S.H, M.TH" width={840} height={1120} loading="lazy" />
                </picture>
                <div className="team-photo-cap lead-cap">
                  <span className="team-badge team-badge-alt lead-badge">{t("team.badge.yayasan", dict)}</span>
                  <b>Gouw Ivan Siswanto S.H, M.TH</b>
                </div>
              </div>
            </TiltCard>
          </RevealGrid>
        </div>
      </section>

      {/* Staff 4 sejajar */}
      <section className="section team-section section-alt">
        <div className="container">
          <SectionHead kicker={t("team.staff.kicker", dict)} title={t("team.staff.title", dict)} />
          <RevealGrid className="team-grid team-staff-grid" dir="alternate">
            {staff.map((s, i) => (
              <TiltCard className="team-card team-staff-photo-card" key={i} maxDeg={6}>
                <div className="staff-media">
                  {s.photo ? (
                    <picture>
                      <source srcSet={s.photoWebp} type="image/webp" />
                      <img src={s.photo} alt={s.name} width={700} height={1050} loading="lazy" />
                    </picture>
                  ) : (
                    <div className="staff-avatar-placeholder">
                      <Avatar />
                    </div>
                  )}
                  <div className="staff-cap">
                    <span className="team-badge staff-badge">{t(s.role, dict)}</span>
                    <b>{s.name}</b>
                  </div>
                </div>
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
            <Reveal className="team-card team-card-admin team-staff-photo-card" dir="left">
              <div className="staff-media">
                <picture>
                  <source srcSet="/assets/admin-khafidin.webp" type="image/webp" />
                  <img src="/assets/admin-khafidin.jpg" alt="Nur Khafidin" width={700} height={1050} loading="lazy" />
                </picture>
                <div className="staff-cap">
                  <span className="team-badge staff-badge">{t("team.adminRole", dict)}</span>
                  <b>Nur Khafidin</b>
                </div>
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
          {(() => {
            const photoOps = ops.filter((x) => x.photo);
            if (!photoOps.length) return null;
            return (
              <div className="ops-photo-stack">
                {photoOps.map((o, i) => (
                  <Reveal className="ops-photo-wide" dir="up" key={i}>
                    <TiltCard className="team-card team-photo-wide-card">
                      <div className="team-photo-media">
                        <picture>
                          <source srcSet={o.photoWebp} type="image/webp" />
                          <img src={o.photo} alt={t(o.k, dict)} width={1200} height={800} loading="lazy" />
                        </picture>
                        <div className="team-photo-cap">
                          <b>{t(o.k, dict)}</b>
                          {o.photoNames && (
                            <span className="team-photo-names">
                              {o.photoNames.map((n, ni) => (
                                <i key={ni}>{n}</i>
                              ))}
                            </span>
                          )}
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>
                ))}
              </div>
            );
          })()}
          <RevealGrid className="team-grid" dir="alternate">
            {ops
              .filter((o) => !o.photo)
              .map((o, i) => (
                <TiltCard className="team-card team-card-multi" key={i}>
                  <Avatar icon={o.stack ? "stack" : "user"} />
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
