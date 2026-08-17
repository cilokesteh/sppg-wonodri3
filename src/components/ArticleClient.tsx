"use client";

import Link from "next/link";
import { useI18n, t } from "./I18nProvider";
import { CtaBand } from "./ui";
import { Reveal, RevealGrid } from "./motion";
import { TiltCard } from "./TiltCard";
import type { Article } from "@/lib/articles";

export function ArticleListClient({ articles }: { articles: Article[] }) {
  const { dict } = useI18n();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker reveal">{t("art.kicker", dict)}</span>
          <h1 className="reveal">{t("art.title", dict)}</h1>
          <p className="page-lead reveal">{t("art.lead", dict)}</p>
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
      <CtaBand />
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
          <span className="kicker reveal">{article.category}</span>
          <h1 className="reveal">{article.title}</h1>
          <div className="blog-meta reveal">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow">
          <article className="article-body reveal">
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
          </article>

          <Reveal className="article-cta" dir="up">
            <h3>{t("art.next", dict)}</h3>
            <Link href="/artikel/" className="btn btn-outline">{t("nav.artikel", dict)}</Link>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
