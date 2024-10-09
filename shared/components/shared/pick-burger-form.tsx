import { cn } from '@/shared/lib/utils';
import React from 'react';
import { BurgerImage } from './burger-image';
import { Title } from './title';
import { Button } from '../ui';
import { VariantsGroup } from './variants-group';
import { BurgerSize, burgerSizes } from '@/shared/constants/burger';
import { Ingredient, ProductVariant } from '@prisma/client';
import { IngredientItem } from './ingredient-item';
import { useSet } from 'react-use';

interface Props {
  imageUrls: string[];
  name: string;
  ingredients: Ingredient[];
  items: ProductVariant[];
  onAddToCartClick?: VoidFunction;
  className?: string;
}

export const PickBurgerForm: React.FC<Props> = ({
  name,
  items,
  imageUrls,
  ingredients,
  onAddToCartClick,
  className,
}) => {
  const [size, setSize] = React.useState<BurgerSize>(1);

  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([]),
  );

  const textDetails = 'lorem ipsum dolores';
  const totalPrice = '333';

  console.log(items);

  return (
    <div className={cn('flex flex-1', className)}>
      <BurgerImage imageUrls={imageUrls} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <VariantsGroup
          items={burgerSizes.slice(0, imageUrls.length)}
          value={String(size)}
          onClick={(value) => setSize(Number(value) as BurgerSize)}
          className="mt-5"
        />

        <div className="bg-gray-50 p-5 rounded-md h-[320px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button className="h-[55px] px-10 texb-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
