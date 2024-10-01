'use client';

import React from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilters, useQueryFilters, useIngredients } from '@/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const onChangePrices = (prices: number[]) => {
    filters.setPrices('from', prices[0]);
    filters.setPrices('to', prices[1]);
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        selected={filters.sizes}
        items={[
          { text: 'Малый', value: '1' },
          { text: 'Средний', value: '2' },
          { text: 'Большой', value: '3' },
        ]}
        onClickCheckbox={filters.setSizes}
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
            value={String(filters.prices.from)}
            onChange={(e) => filters.setPrices('from', Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(filters.prices.to)}
            onChange={(e) => filters.setPrices('to', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.prices.from || 0, filters.prices.to || 1000]}
          onValueChange={onChangePrices}
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
        selected={filters.selectedIngredients}
        onClickCheckbox={filters.setSelectedIngredients}
      />
    </div>
  );
};
