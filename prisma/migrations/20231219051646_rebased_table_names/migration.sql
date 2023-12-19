/*
  Warnings:

  - You are about to drop the column `aurhor3` on the `StoreBooks` table. All the data in the column will be lost.
  - You are about to drop the column `author` on the `StoreBooks` table. All the data in the column will be lost.
  - You are about to drop the column `author2` on the `StoreBooks` table. All the data in the column will be lost.
  - Added the required column `aurhors3` to the `StoreBooks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authors` to the `StoreBooks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authors2` to the `StoreBooks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StoreBooks" DROP COLUMN "aurhor3",
DROP COLUMN "author",
DROP COLUMN "author2",
ADD COLUMN     "aurhors3" TEXT NOT NULL,
ADD COLUMN     "authors" TEXT NOT NULL,
ADD COLUMN     "authors2" TEXT NOT NULL;
