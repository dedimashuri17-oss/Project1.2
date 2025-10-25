import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

export async function GET() {
  const products = await prisma.product.findMany()
  return Response.json(products)
}
