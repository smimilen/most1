export const dynamic = 'force-dynamic';

import sql from '@/lib/db';
import CatalogSection from '@/shared/Catalog';
import { itemListSchema } from '@/shared/schemas/item.schema';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
  }) => {
  const { slug } = await params;
  
  const [type] = await sql`
    SELECT name FROM type WHERE slug = ${slug} LIMIT 1
  `;

  if (!type) {
    return {
      title: 'Каталог оборудования из Китая',
      description: 'Каталог китайского оборудования. Поставка, доставка, гарантия.',
    };
  }

  return {
    title: `${type.name} — Оборудование из Китая | Каталог`,
    description: `Купить ${type.name} напрямую от китайских производителей. Официальная поставка, доставка по России и СНГ, гарантия.`,
    openGraph: {
      title: `${type.name} — Оборудование из Китая | Каталог`,
      description: `Купить ${type.name} напрямую от производителей. Официальная поставка и доставка по России.`,
      url: `https://kamchatka-china-bridge.ru/catalog/${slug}`,
      type: 'website',
    }
  };
};

const ItemSection = async ({
  params,
}: {
  params: Promise<{ slug: string }>
})=> {
  const { slug } = await params;

  const type = await sql`SELECT id FROM type WHERE slug = ${slug} LIMIT 1`;
  if (!type.length) throw new Error(`Тип "${slug}" не найден`);

  const typeId = type[0].id;

  const result = await sql`
    SELECT id, name, image
    FROM catalog
    WHERE type_id = ${typeId}
    ORDER BY name
  `;

  const parsed = itemListSchema.safeParse(result);
  if (!parsed.success) {
    console.error('Ошибка валидации:', parsed.error);
    throw new Error('Неправильные данные из БД');
  }

  return <CatalogSection data={parsed.data} slug={slug} />;
}

export default ItemSection;