export const dynamic = 'force-dynamic';

import sql from '@/lib/db';
import { itemSchema } from '@/shared/schemas/item.schema';
import CardSection from '@/shared/Card';

type Params = { slug: string; itemId: string };

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>;
}) => {
  const { itemId } = await params;
  const id = Number(itemId);

  const [row] = await sql`
    SELECT name, description
    FROM catalog
    WHERE id = ${id}
    LIMIT 1
  `;

  if (!row) {
    return {
      title: 'Оборудование не найдено',
      description: 'Страница не найдена',
    };
  }

  const cleanDesc = row.description
    ? row.description
        .replace(/(<([^>]+)>)/gi, '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 140)
    : `Купить ${row.name} из Китая с гарантией.`;

  return {
    title: `${row.name} — Оборудование из Китая`,
    description: cleanDesc,
    openGraph: {
      images: row.image ? [{ url: row.image, alt: row.name }] : [],
    },
  };
};

const CardPage = async ({ params }: { params: Promise<Params> }) => {
  const { itemId } = await params;

  const id = Number(itemId);
  if (Number.isNaN(id)) throw new Error(`Некорректный itemId: ${itemId}`);

  const [row] = await sql`
      SELECT id,
            name,
            image,
            description,
            list_title         AS "listTitle",
            item_list          AS "itemList",
            description2,
            list_title2        AS "listTitle2",
            item_list2         AS "itemList2",
            underline
        FROM catalog
      WHERE id = ${id}
      LIMIT 1;
  `;

  const parsed = itemSchema.safeParse(row);
  console.log(row);
  if (!parsed.success) {
    throw new Error('Ошибка валидации данных');
  }

  return <CardSection item={parsed.data} />;
};

export default CardPage;
