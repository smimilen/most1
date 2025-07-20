import { z } from 'zod';

export const catalogItemSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1),
  image: z.string(), 
  slug: z.string(), 
});

export type CatalogItemDto = z.infer<typeof catalogItemSchema>;

export const catalogListSchema = z.array(catalogItemSchema);

export type CatalogListDto = z.infer<typeof catalogListSchema>;
