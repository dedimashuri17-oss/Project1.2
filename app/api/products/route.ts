// app/api/product/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// 👇 optional: biar route selalu dynamic (tidak di-cache di build Next.js)
export const dynamic = "force-dynamic";

declare global {
  // allow attaching prisma to global to reuse the client across HMR in dev
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

/**
 * GET - Fetch all products
 */
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { id: "desc" },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

/**
 * POST - Create new product
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, price, category, image } = body;

    // Validasi input
    if (!name || !category || !image || isNaN(Number(price))) {
      return NextResponse.json(
        { error: "Invalid or missing input data" },
        { status: 400 }
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        price: Number(price),
        category,
        image,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
