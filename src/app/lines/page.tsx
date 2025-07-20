export const dynamic = 'force-dynamic';

import sql from '@/lib/db';
import { itemListSchema } from '@/shared/schemas/item.schema';
import loadDynamic from 'next/dynamic';

const CatalogSection = loadDynamic(() => import('@/shared/Catalog'));

export const generateMetadata = () => ({
  title: 'Производственные линии из Китая — Каталог',
  description: 'Каталог производственных линий из Китая. Прямые поставки оборудования от производителей, индивидуальный подбор, гарантия. Оборудование для вашего бизнеса.',
  openGraph: {
    title: 'Производственные линии из Китая',
    description: 'Поставки производственных линий из Китая под ключ. Надежный поставщик. Гарантия.',
    url: 'https://kamchatka-china-bridge.ru/lines', 
    images: [
      {
        url: '/images/lines/alum.png', 
        width: 1200,
        height: 630,
        alt: 'Производственные линии из Китая',
      },
    ],
    type: 'website',
    siteName: 'Оборудование из Китая',
    locale: 'ru_RU',
  },
});

const LinesPage = async () => {
  const result = await sql`
    SELECT id, name, image
    FROM catalog
    WHERE category_id = 1
    ORDER BY name
  `;

  const parsed = itemListSchema.safeParse(result);
  if (!parsed.success) {
    console.error('Ошибка валидации данных:', parsed.error);
    throw new Error('Некорректные данные из базы');
  }

  return <CatalogSection data={parsed.data} slug={'lines'} />;
};

export default LinesPage;
