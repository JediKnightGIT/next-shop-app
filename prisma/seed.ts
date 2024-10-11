import { Prisma } from '@prisma/client';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';
import { categories, ingredients, products } from './constants';

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductVariant = ({
  productId,
  size,
  price,
}: {
  productId: number;
  size?: 1 | 2 | 3;
  price?: number;
}) => {
  return {
    productId,
    size,
    price,
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
        connect: ingredients
          .slice(3, 6)
          .concat(ingredients[7], ingredients[10], ingredients[12]),
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
        connect: ingredients.slice(3, 5).concat(ingredients[11]),
      },
    },
  });

  const bighit = await prisma.product.create({
    data: {
      name: 'Биг Хит',
      imageUrls: ['/burgers/big_hit.webp', '/burgers/double_big_hit.webp'],
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(1, 7).concat(ingredients[12]),
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
        connect: ingredients
          .slice(1, 6)
          .concat(ingredients[9], ingredients[12]),
      },
    },
  });

  const grand = await prisma.product.create({
    data: {
      name: 'Гранд',
      imageUrls: ['/burgers/grand.webp', '/burgers/double_grand.webp'],
      categoryId: 1,
      ingredients: {
        connect: ingredients
          .slice(3, 8)
          .concat(ingredients[10], ingredients[12]),
      },
    },
  });

  await prisma.productVariant.createMany({
    data: [
      // Cheeseburger
      generateProductVariant({
        productId: cheeseburger.id,
        size: 1,
        price: 78,
      }),
      generateProductVariant({
        productId: cheeseburger.id,
        size: 2,
        price: 160,
      }),
      // Fishburger
      generateProductVariant({
        productId: fishburger.id,
        size: 1,
        price: 204,
      }),
      generateProductVariant({
        productId: fishburger.id,
        size: 2,
        price: 259,
      }),
      // Big Hit
      generateProductVariant({
        productId: bighit.id,
        size: 1,
        price: 186,
      }),
      generateProductVariant({
        productId: bighit.id,
        size: 2,
        price: 248,
      }),
      // Big Special
      generateProductVariant({
        productId: bigspecial.id,
        size: 1,
        price: 259,
      }),
      generateProductVariant({
        productId: bigspecial.id,
        size: 2,
        price: 299,
      }),
      generateProductVariant({
        productId: bigspecial.id,
        size: 3,
        price: 397,
      }),
      // Grand
      generateProductVariant({
        productId: grand.id,
        size: 1,
        price: 193,
      }),
      generateProductVariant({
        productId: grand.id,
        size: 2,
        price: 285,
      }),

      // Остальные продукты
      generateProductVariant({ productId: 1, price: 289 }),
      generateProductVariant({ productId: 2, price: 183 }),
      generateProductVariant({ productId: 3, price: 275 }),
      generateProductVariant({ productId: 4, price: 272 }),
      generateProductVariant({ productId: 5, price: 219 }),
      generateProductVariant({ productId: 6, price: 65 }),
      generateProductVariant({ productId: 7, price: 62 }),
      generateProductVariant({ productId: 8, price: 190 }),
      generateProductVariant({ productId: 9, price: 252 }),
      generateProductVariant({ productId: 10, price: 230 }),
      generateProductVariant({ productId: 11, price: 119 }),
      generateProductVariant({ productId: 12, price: 139 }),
      generateProductVariant({ productId: 13, price: 139 }),
      generateProductVariant({ productId: 14, price: 106 }),
      generateProductVariant({ productId: 15, price: 135 }),
      generateProductVariant({ productId: 16, price: 159 }),
      generateProductVariant({ productId: 17, price: 175 }),
      generateProductVariant({ productId: 18, price: 75 }),
      generateProductVariant({ productId: 19, price: 185 }),
      generateProductVariant({ productId: 20, price: 185 }),
      generateProductVariant({ productId: 21, price: 185 }),
      generateProductVariant({ productId: 22, price: 179 }),
      generateProductVariant({ productId: 23, price: 185 }),
      generateProductVariant({ productId: 24, price: 39 }),
      generateProductVariant({ productId: 25, price: 65 }),
      generateProductVariant({ productId: 26, price: 89 }),
      generateProductVariant({ productId: 27, price: 89 }),
      generateProductVariant({ productId: 28, price: 89 }),
      generateProductVariant({ productId: 29, price: 45 }),
      generateProductVariant({ productId: 30, price: 45 }),
      generateProductVariant({ productId: 31, price: 45 }),
      generateProductVariant({ productId: 32, price: 45 }),
      generateProductVariant({ productId: 33, price: 45 }),
      generateProductVariant({ productId: 34, price: 45 }),
      generateProductVariant({ productId: 35, price: 45 }),
      generateProductVariant({ productId: 36, price: 40 }),
      generateProductVariant({ productId: 37, price: 40 }),
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
