-- AlterTable
ALTER TABLE "public"."Product" ADD COLUMN     "category" TEXT,
ADD COLUMN     "image" TEXT,
ALTER COLUMN "stock" DROP NOT NULL;
