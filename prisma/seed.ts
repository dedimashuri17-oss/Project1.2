import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.product.createMany({
    data: [
      { name: "Produk A", price: 10000, stock: 5 },
      { name: "Produk B", price: 15000, stock: 10 }
    ],
  })

  console.log('✅ Database berhasil di-seed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
