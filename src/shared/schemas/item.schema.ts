import { z } from 'zod';

export const itemSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  image: z.string(),
  description: z.string().nullable().optional(),
  listTitle: z.string().nullable().optional(),
  itemList: z.string().nullable().optional(),
  description2: z.string().nullable().optional(),
  listTitle2: z.string().nullable().optional(),
  itemList2: z.string().nullable().optional(),
  underline: z.boolean().nullable().optional(),
});

export const itemListSchema = z.array(itemSchema);

export type ItemDto = z.infer<typeof itemSchema>;
export type ItemListDto = z.infer<typeof itemListSchema>;
