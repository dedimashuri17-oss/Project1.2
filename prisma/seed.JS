const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Produk A",
        price: 10000,
        category: "Food",
        image: "https://via.placeholder.com/150",
        stock: 5,
      },
      {
        name: "Produk B",
        price: 15000,
        category: "Drink",
        image: "https://via.placeholder.com/150",
        stock: 10,
      },
    ],
  });
  console.log("✅ Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
