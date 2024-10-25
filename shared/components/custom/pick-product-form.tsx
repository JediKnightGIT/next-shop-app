import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  imageUrls: string[];
  name: string;
  // ingredients: any;
  items?: any[];
  onAddClick?: VoidFunction;
  className?: string;
}

export const PickProductForm: React.FC<Props> = ({
  name,
  imageUrls,
  // ingredients,
  onAddClick,
  className,
}) => {
  const textDetails = 'lorem ipsum dolores';
  const totalPrice = '333';

  return (
    <div className={cn('flex flex-1', className)}>
      <div
        className={cn(
          'flex items-center justify-center flex-1 relative w-full',
        )}
      >
        <img
          src={imageUrls[0]}
          className="relative left-2 top-2 transition-all z-10 duration-300 size-[350px] object-cover"
          alt={name}
        />
      </div>

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
