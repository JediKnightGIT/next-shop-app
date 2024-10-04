export const mapSize = {
  1: 'Маленький',
  2: 'Средний',
  3: 'Большой',
} as const;

export const burgerSizes = Object.entries(mapSize).map(([value, name]) => ({
  name,
  value,
}));

export type BurgerSize = keyof typeof mapSize;
