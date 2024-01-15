/*
  Warnings:

  - You are about to drop the column `burrowDate` on the `BookRecords` table. All the data in the column will be lost.
  - You are about to drop the column `returnedDate` on the `BookRecords` table. All the data in the column will be lost.
  - You are about to drop the column `registeredAt` on the `StoreBooks` table. All the data in the column will be lost.
  - You are about to drop the column `registeredAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `burrowed_at` to the `BookRecords` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookRecords" DROP COLUMN "burrowDate",
DROP COLUMN "returnedDate",
ADD COLUMN     "burrowed_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "returned_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "StoreBooks" DROP COLUMN "registeredAt",
ADD COLUMN     "registered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "registeredAt",
ADD COLUMN     "registered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
