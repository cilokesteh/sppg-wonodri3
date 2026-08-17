"use client";

import Link from "next/link";
import { useI18n, t } from "./I18nProvider";
import { Reveal, RevealGrid } from "./motion";
import { TiltCard } from "./TiltCard";
import type { Article } from "@/lib/articles";

export function ArticleListClient({ articles }: { articles: Article[] }) {
  const { dict } = useI18n();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal><span className="kicker">{t("art.kicker", dict)}</span></Reveal>
          <Reveal delay={0.08}><h1>{t("art.title", dict)}</h1></Reveal>
          <Reveal delay={0.16}><p className="page-lead">{t("art.lead", dict)}</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <RevealGrid className="blog-grid" dir="alternate">
            {articles.map((a) => (
              <Link href={`/artikel/${a.slug}/`} className="blog-card" key={a.slug}>
                <span className="blog-cat">{a.category}</span>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <div className="blog-meta">
                  <span>{a.date}</span>
                  <span>•</span>
                  <span>{a.readTime}</span>
                </div>
              </Link>
            ))}
          </RevealGrid>
        </div>
      </section>
    </>
  );
}

export function ArticleDetailClient({ article }: { article: Article }) {
  const { dict } = useI18n();
  return (
    <>
      <section className="page-hero article-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">{t("nav.home", dict)}</Link>
            <span aria-hidden="true">/</span>
            <Link href="/artikel/">{t("nav.artikel", dict)}</Link>
            <span aria-hidden="true">/</span>
            <span>{article.title.slice(0, 40)}…</span>
          </nav>
          <Reveal><span className="kicker">{article.category}</span></Reveal>
          <Reveal delay={0.08}><h1>{article.title}</h1></Reveal>
          <Reveal delay={0.16}><div className="blog-meta">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow">
          <Reveal><article className="article-body">
            {article.content.map((block, i) => (
              <div key={i}>
                {block.h && <h2>{block.h}</h2>}
                {block.p && <p>{block.p}</p>}
                {block.ul && (
                  <ul>
                    {block.ul.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="article-tags">
              {article.keywords.map((k) => (
                <span key={k}>#{k.replace(/\s+/g, "")}</span>
              ))}
            </div>
          </article></Reveal>

          <Reveal className="article-cta" dir="up">
            <h3>{t("art.next", dict)}</h3>
            <Link href="/artikel/" className="btn btn-outline">{t("nav.artikel", dict)}</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
