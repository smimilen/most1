export const dynamic = 'force-dynamic';

import sql from '@/lib/db';
import { itemListSchema } from '@/shared/schemas/item.schema';
import loadDynamic from 'next/dynamic';

const CatalogSection = loadDynamic(() => import('@/shared/Catalog'));

export const generateMetadata = () => ({
  title: 'Спецтехника из Китая — Каталог',
  description: 'Современная спецтехника из Китая напрямую от заводов-производителей. Доставка по России и СНГ. Гарантия и сопровождение сделки.',
  openGraph: {
    title: 'Спецтехника из Китая — Каталог',
    description: 'Современная спецтехника из Китая напрямую от заводов-производителей. Доставка по России и СНГ. Гарантия и сопровождение сделки.',
    images: [
      {
        url: '/images/technique/concrete.jpg',
        width: 1200,
        height: 630,
        alt: 'Спецтехника из Китая',
      },
    ],
    type: 'website',
    siteName: 'Оборудование из Китая',
    locale: 'ru_RU',
    url: 'https://kamchatka-china-bridge.ru/technique',
  },
});

const TechniquePage = async () => {
  const result = await sql`
    SELECT id, name, image
    FROM catalog
    WHERE category_id = 3
    ORDER BY name
  `;

  const parsed = itemListSchema.safeParse(result);
  if (!parsed.success) {
    console.error('Ошибка валидации данных:', parsed.error);
    throw new Error('Некорректные данные из базы');
  }

  return <CatalogSection data={parsed.data} slug={'lines'} />;
};

export default TechniquePage;
