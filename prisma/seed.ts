import { PrismaClient } from '@prisma/client';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';
import { categories, ingredients } from './constants';

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

  await prisma.category.createMany({
    data: ingredients,
  });
}

// clear data
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
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
