'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { PickProductForm } from '../pick-product-form';
import { ProductWithRelations } from '@/@types/prisma';
import { PickBurgerForm } from '../pick-burger-form';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const PickProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const isBurgerForm = Boolean(product.imageUrls.length > 1);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}
      >
        {isBurgerForm ? (
          <PickBurgerForm
            imageUrls={product.imageUrls}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
          />
        ) : (
          <PickProductForm imageUrls={product.imageUrls} name={product.name} />
        )}
      </DialogContent>
    </Dialog>
  );
};
