'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Product } from '@prisma/client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { PickProductForm } from '../pick-product-form';

interface Props {
  product: Product;
  className?: string;
}

export const PickProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}
      >
        <PickProductForm
          imageUrls={product.imageUrls}
          name={product.name}
          ingredients={[]}
        />
      </DialogContent>
    </Dialog>
  );
};
