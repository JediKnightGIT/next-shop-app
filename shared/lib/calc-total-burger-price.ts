import { Ingredient, ProductVariant } from '@prisma/client';
import { BurgerSize } from '../constants/burger';

/**
 * Функция для подсчёта общей стоимости бургера
 *
 * @param size - размер выбранного бургера
 * @param items - список вариантов бургеров
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 *
 * @returns `number` - общая стоимость
 */
export const calcTotalBurgerPrice = (
  size: BurgerSize,
  items: ProductVariant[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number> = new Set<number>(),
) => {
  const burgerPrice = items.find((item) => item.size === size)!.price;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);
  return burgerPrice + totalIngredientsPrice;
};
