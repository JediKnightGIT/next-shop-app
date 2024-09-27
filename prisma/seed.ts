import { Prisma, PrismaClient } from '@prisma/client';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';
import { categories, ingredients, products } from './constants';

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductVariant = ({
  productId,
  size,
}: {
  productId: number;
  size?: 1 | 2 | 3;
}) => {
  return {
    productId,
    price: randomNumber(150, 650),
    size,
  } as Prisma.ProductVariantUncheckedCreateInput;
};

// generate data
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'Test User',
        email: 'user@test.com',
        password: hashSync('test123', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'admin@test.com',
        password: hashSync('test123', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const cheeseburger = await prisma.product.create({
    data: {
      name: 'Чизбургер',
      imageUrls: [
        '/burgers/cheeseburger.webp',
        '/burgers/double_cheeseburger.webp',
      ],
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const fishburger = await prisma.product.create({
    data: {
      name: 'Фишбургер',
      imageUrls: [
        '/burgers/fishburger.webp',
        '/burgers/double_fishburger.webp',
      ],
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const bighit = await prisma.product.create({
    data: {
      name: 'Биг Хит',
      imageUrls: ['/burgers/big_hit.webp', '/burgers/double_big_hit.webp'],
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(4, 10),
      },
    },
  });

  const bigspecial = await prisma.product.create({
    data: {
      name: 'Биг Спешиал',
      imageUrls: [
        '/burgers/junior_big_special.webp',
        '/burgers/big_special.webp',
        '/burgers/double_big_special.webp',
      ],
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(4, 10),
      },
    },
  });

  const grand = await prisma.product.create({
    data: {
      name: 'Гранд',
      imageUrls: ['/burgers/grand.webp', '/burgers/double_grand.webp'],
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(4, 10),
      },
    },
  });

  await prisma.productVariant.createMany({
    data: [
      // Cheeseburger
      generateProductVariant({
        productId: cheeseburger.id,
        size: 1,
      }),
      generateProductVariant({
        productId: cheeseburger.id,
        size: 2,
      }),
      // Fishburger
      generateProductVariant({
        productId: fishburger.id,
        size: 1,
      }),
      generateProductVariant({
        productId: fishburger.id,
        size: 2,
      }),
      // Big Hit
      generateProductVariant({
        productId: bighit.id,
        size: 2,
      }),
      generateProductVariant({
        productId: bighit.id,
        size: 3,
      }),
      // Big Special
      generateProductVariant({
        productId: bigspecial.id,
        size: 1,
      }),
      generateProductVariant({
        productId: bigspecial.id,
        size: 2,
      }),
      generateProductVariant({
        productId: bigspecial.id,
        size: 3,
      }),
      // Grand
      generateProductVariant({
        productId: grand.id,
        size: 2,
      }),
      generateProductVariant({
        productId: grand.id,
        size: 3,
      }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '1111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '2222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productVariantId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

// clear data
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
