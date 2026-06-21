import type { Post } from '@/types'

export const defaultSEO = {
  siteName: 'MotivationMax',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://motivationmax.fr',
  defaultTitle: 'MotivationMax — Inspirez • Agissez • Réussissez',
  defaultDescription: 'Motivation quotidienne, discipline, succès et développement personnel. Transformez votre mentalité, transformez votre vie.',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@MotivationMax',
  locale: 'fr_FR',
}

export function generatePostSEO(post: Post) {
  return {
    title: post.seo_title || post.title,
    description: post.seo_desc || post.excerpt,
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_desc || post.excerpt,
      images: [{ url: post.og_image || post.cover_url || defaultSEO.defaultImage }],
      type: 'article',
      publishedTime: post.published_at,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo_title || post.title,
      description: post.seo_desc || post.excerpt,
      images: [post.og_image || post.cover_url || defaultSEO.defaultImage],
    },
  }
}

export function generateArticleSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.cover_url,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: { '@type': 'Organization', name: 'MotivationMax' },
    publisher: {
      '@type': 'Organization',
      name: 'MotivationMax',
      logo: { '@type': 'ImageObject', url: `${defaultSEO.siteUrl}/logo.png` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${defaultSEO.siteUrl}/blog/${post.slug}`,
    },
  }
}