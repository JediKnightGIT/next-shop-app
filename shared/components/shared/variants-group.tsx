'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: readonly Variant[];
  selectedValue?: string;
  onClick?: (value: Variant['value']) => void;
  className?: string;
}

export const VariantsGroup: React.FC<Props> = ({
  items,
  onClick,
  selectedValue,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none',
        className,
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            'flex items-center justify-center h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
            {
              'bg-white shadow': item.value === selectedValue,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled,
            },
            className,
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};