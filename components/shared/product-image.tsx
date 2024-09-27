import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  imageUrls: string[];
  size: number;
}

export const ProductImage: React.FC<Props> = ({
  imageUrls,
  size,
  className,
}) => {
  return (
    <div className={className}>
      <img
        src={imageUrls.length >= 1 ? imageUrls[size - 1] : imageUrls[0]}
        alt=""
        className={cn(
          'relative left-2 top-2 transition-all z-10 duration-300',
          {
            'size-[300px]': size === 1,
            'size-[400px]': size === 2,
            'size-[500px]': size === 3,
          },
        )}
      />
    </div>
  );
};
