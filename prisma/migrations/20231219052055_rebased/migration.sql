/*
  Warnings:

  - You are about to drop the column `aurhors3` on the `StoreBooks` table. All the data in the column will be lost.
  - You are about to drop the column `authors2` on the `StoreBooks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StoreBooks" DROP COLUMN "aurhors3",
DROP COLUMN "authors2";
