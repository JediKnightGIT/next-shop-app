import { Ingredient } from '@prisma/client';
import { BurgerSize } from '../constants/burger';

export const getCartItemDetails = (
  size: BurgerSize,
  ingredients: Ingredient[],
): string => {
  const details = [];

  if (size) {
    details.push(`Размер ${size}`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(', ');
};
