import { cn } from '@/shared/lib/utils';

interface Props {
  src: string;
  name?: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({
  name,
  src,
  className,
}) => {
  return <img className={cn('size-[60px]', className)} src={src} alt={name} />;
};
