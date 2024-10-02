import { cn } from '@/shared/lib/utils';
import React from 'react';
import { BurgerImage } from './burger-image';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  imageUrls: string[];
  name: string;
  ingredients?: string[];
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
  const textDetails = 'lorem ipsum dolores';
  const totalPrice = '333';
  const size = 2;

  return (
    <div className={cn('flex flex-1', className)}>
      <BurgerImage imageUrls={imageUrls} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <Button className="h-[55px] px-10 texb-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
