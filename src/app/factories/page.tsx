export const dynamic = 'force-dynamic';

import loadDynamic from 'next/dynamic';
import sql from '@/lib/db';
import { itemListSchema } from '@/shared/schemas/item.schema';

const CatalogSection = loadDynamic(() => import('@/shared/Catalog'));

export const generateMetadata = () => ({
  title: 'Заводы и мини-заводы из Китая — Поставка, оформление, доставка',
  description:
    'Прямые поставки заводов и мини-заводов из Китая. Оформление, доставка, гарантия. Найдём оптимальное решение под ваши задачи. Вся Россия и СНГ.',
  openGraph: {
    title: 'Заводы и мини-заводы из Китая — Поставка, оформление, доставка',
    description:
      'Компания "Китайско-Российский Золотой Мост" осуществляет поставки заводов и мини-заводов из Китая. Оформление, доставка, гарантия.',
    url: 'https://kamchatka-china-bridge.ru/factories',
    images: [
      {
        url: '/images/factories/asphalt.jpg',
        width: 1200,
        height: 630,
        alt: 'Заводы из Китая',
      },
    ],
    type: 'website',
    siteName: 'Оборудование из Китая',
    locale: 'ru_RU',
  },
});

const FactoriesPage = async () => {
  const result = await sql`
    SELECT id, name, image
    FROM catalog
    WHERE category_id = 2
    ORDER BY name
  `;

  const parsed = itemListSchema.safeParse(result);
  if (!parsed.success) {
    console.error('Ошибка валидации данных:', parsed.error);
    throw new Error('Некорректные данные из базы');
  }

  return <CatalogSection data={parsed.data} slug={'factories'} />;
};

export default FactoriesPage;
