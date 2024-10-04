import { cn } from '@/shared/lib/utils';
import React from 'react';
import { BurgerImage } from './burger-image';
import { Title } from './title';
import { Button } from '../ui';
import { VariantsGroup } from './variants-group';
import { BurgerSize, burgerSizes } from '@/shared/constants/burger';
import { Ingredient } from '@prisma/client';
import { IngredientItem } from './ingredient-item';

interface Props {
  imageUrls: string[];
  name: string;
  ingredients: Ingredient[];
  items?: any[];
  onAddClick?: VoidFunction;
  className?: string;
}

export const PickBurgerForm: React.FC<Props> = ({
  name,
  imageUrls,
  ingredients,
  onAddClick,
  className,
}) => {
  const [size, setSize] = React.useState<BurgerSize>(1);

  const textDetails = 'lorem ipsum dolores';
  const totalPrice = '333';

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

        <div className="grid gird-cols-3 gap-3">
          {ingredients.map((ingredient) => (
            <IngredientItem
              key={ingredient.id}
              name={ingredient.name}
              price={ingredient.price}
              imageUrl={ingredient.imageUrl}
              onClick={onAddClick}
            />
          ))}
        </div>

        <Button className="h-[55px] px-10 texb-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
