import { Container, Title } from '@/shared/components/custom';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        {/* <ProductImage imageUrls={product.imageUrls} size={1} /> */}

        <div className="w-[490px] bg-[#fafafa] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            vel debitis dolores.
          </p>
        </div>
      </div>
    </Container>
  );
}
