// ...existing code...
import { NextResponse } from "next/server";
// ...existing code...
// replace the import + client instantiation with:
import { PrismaClient } from "../../../src/generated/prisma";

declare global {
  // allow attaching prisma to global to reuse the client across HMR in dev
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;
// ...existing code...