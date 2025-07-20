export const dynamic = 'force-dynamic';

import loadDynamic from 'next/dynamic';

const HeroSection = loadDynamic(() => import('@/shared/Hero'));
const FormSection = loadDynamic(() => import('@/shared/Form'));

import sql from '@/lib/db';
import { CatalogListDto } from '@/shared/schemas/catalog.schema';

const CatalogSection = loadDynamic(() => import('@/shared/Main'));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  const categories: Record<string, string> = {
    lines: 'Производственные линии',
    factories: 'Заводы и мини-заводы',
    technique: 'Спецтехника',
  };

  const categoryName = categories[category] || 'Каталог оборудования';

  const title = `${categoryName} из Китая — Каталог`;
  const description = `Купить ${categoryName} из Китая напрямую от производителей. Импорт, доставка, гарантия.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://kamchatka-china-bridge.ru/catalog/${category}`,
      siteName: 'Китайский мост',
      locale: 'ru_RU',
      type: 'website',
    },
  };
};

const CatalogPage = async () => {
  const catalog = await sql<CatalogListDto>`
    SELECT id, name, image, slug FROM type ORDER BY name
  `;

  return (
    <>
      <HeroSection
        title='Каталог оборудования из Китая'
        capture='Компания &lsquo;Китайско-Российский Золотой Мост&rsquo; представляет каталог китайского оборудования. Для&nbsp;удобства вы&nbsp;можете воспользоваться поиском по&nbsp;каталогу. Если вы&nbsp;не&nbsp;нашли желаемого оборудования, то&nbsp;свяжитесь с&nbsp;нами прямо сейчас и&nbsp;мы&nbsp;подберем для вас желаемое оборудование в&nbsp;Китае.'
      />
      <main className='container'>
        <CatalogSection data={catalog} />
        <FormSection
          title='Нужна помощь с&nbsp;выбором?'
          capture='Свяжитесь с&nbsp;нашими специалистами, они предоставят вам бесплатную консультацию и&nbsp;помогут сделать правильный выбор'
        />
      </main>
    </>
  );
};

export default CatalogPage;
