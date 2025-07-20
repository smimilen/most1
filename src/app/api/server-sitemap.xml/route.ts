import { NextResponse } from 'next/server';
import sql from '@/lib/db';

export const GET = async () => {
  const items = await sql`
    SELECT catalog.id, type.slug
    FROM catalog
    JOIN type ON catalog.type_id = type.id
  `;

  const types = await sql`
    SELECT slug
    FROM type
  `;

  const categories = await sql`
    SELECT slug
    FROM category
  `;

  const staticPages = [
    '',
    'contacts',
    'factories',
    'technique',
    'lines',
    'catalog',
  ];

  const itemUrls = items
    .map(
      ({ id, slug }) => `<url>
      <loc>https://kamchatka-china-bridge.ru/catalog/${slug}/${id}</loc>
      <changefreq>weekly</changefreq>
    </url>`
    )
    .join('');

  const typeUrls = types
    .map(
      ({ slug }) => `<url>
      <loc>https://kamchatka-china-bridge.ru/catalog/${slug}</loc>
      <changefreq>weekly</changefreq>
    </url>`
    )
    .join('');

  const categoryUrls = categories
    .map(
      ({ slug }) => `<url>
      <loc>https://kamchatka-china-bridge.ru/${slug}</loc>
      <changefreq>weekly</changefreq>
    </url>`
    )
    .join('');

  const staticUrls = staticPages
    .map(
      (path) => `<url>
      <loc>https://kamchatka-china-bridge.ru/${path}</loc>
      <changefreq>monthly</changefreq>
    </url>`
    )
    .join('');

  const sitemap = 
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls}
      ${categoryUrls}
      ${typeUrls}
      ${itemUrls}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
