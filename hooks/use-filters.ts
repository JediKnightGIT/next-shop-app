import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useSet } from 'react-use';

interface PriceProps {
  from?: number;
  to?: number;
}

interface QueryFilters extends PriceProps {
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setSizes: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  // Фильтр ингредиентов
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(',')),
  );

  // Фильтр размеров
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : [],
    ),
  );

  // Фильтр цены
  const [prices, setPrices] = React.useState<PriceProps>({
    from: Number(searchParams.get('from')) || undefined,
    to: Number(searchParams.get('to')) || undefined,
  });

  const onChangePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({ ...prev, [name]: value }));
  };

  return {
    sizes,
    selectedIngredients,
    prices,
    setPrices: onChangePrice,
    setSizes: toggleSizes,
    setSelectedIngredients: toggleIngredients,
  };
};
