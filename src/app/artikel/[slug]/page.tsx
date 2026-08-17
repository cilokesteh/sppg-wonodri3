import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { ArticleDetailClient } from "@/components/ArticleClient";
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `https://sppgwonodri3.web.id/artikel/${article.slug}/` },
    keywords: article.keywords,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `https://sppgwonodri3.web.id/artikel/${article.slug}/`,
      siteName: "SPPG Wonodri 3",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: "SPPG Wonodri 3", url: "https://sppgwonodri3.web.id/" },
    publisher: { "@type": "Organization", name: "SPPG Wonodri 3", logo: { "@type": "ImageObject", url: "https://sppgwonodri3.web.id/assets/logo.png" } },
    mainEntityOfPage: `https://sppgwonodri3.web.id/artikel/${article.slug}/`,
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://sppgwonodri3.web.id/" },
      { "@type": "ListItem", position: 2, name: "Artikel", item: "https://sppgwonodri3.web.id/artikel/" },
      { "@type": "ListItem", position: 3, name: article.title },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }} />
      <ArticleDetailClient article={article} />
    </>
  );
}
