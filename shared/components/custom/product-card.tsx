import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
  id: number;
  name: string;
  price: number;
  count?: number;
  imageUrls: string[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  count,
  imageUrls,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[215px]">
          <img
            width={215}
            height={215}
            className="object-contain"
            src={imageUrls.length >= 3 ? imageUrls[1] : imageUrls[0]}
            alt={name}
          />
        </div>

        <Title text={name} size="xs" className="mb-1 mt-3 font-bold" />

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
