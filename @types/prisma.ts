import { Ingredient, Product, ProductVariant } from '@prisma/client';

export type ProductWithRelations = Product & {
  items: ProductVariant[];
  ingredients: Ingredient[];
};
