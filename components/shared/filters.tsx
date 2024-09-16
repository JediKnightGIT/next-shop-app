'use client';

import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';
import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  className?: string;
}

interface PriceProps {
  from?: number;
  to?: number;
}

interface QueryFilters extends PriceProps {
  sizes: string;
  ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const router = useRouter();
  const { ingredients, loading, selectedIngredients, onAddId } =
    useFilterIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));

  const [prices, setPrice] = React.useState<PriceProps>({});

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const onChangePrice = (name: keyof PriceProps, value: number) => {
    setPrice({ ...prices, [name]: value });
  };

  console.log(searchParams, 11);

  React.useEffect(() => {
    const filters = {
      ...prices,
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    };

    const query = qs.stringify(filters, {
      arrayFormat: 'comma',
    });

    router.push(`?${query}`, { scroll: false });
  }, [prices, sizes, selectedIngredients, router]);

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        selected={sizes}
        items={[
          { text: 'Одинарный', value: '1' },
          { text: 'Двойной', value: '2' },
        ]}
        onClickCheckbox={toggleSizes}
      />
      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.from)}
            onChange={(e) => onChangePrice('from', Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(prices.to)}
            onChange={(e) => onChangePrice('to', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.from || 0, prices.to || 1000]}
          onValueChange={([from, to]) => setPrice({ from, to })}
        />
      </div>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        selected={selectedIngredients}
        onClickCheckbox={onAddId}
      />
    </div>
  );
};
