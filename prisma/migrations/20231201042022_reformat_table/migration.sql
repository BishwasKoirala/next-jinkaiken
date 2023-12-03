/*
  Warnings:

  - Added the required column `gakka` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gakubu` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNum` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "gakka" TEXT NOT NULL,
ADD COLUMN     "gakubu" TEXT NOT NULL,
ADD COLUMN     "phoneNum" TEXT NOT NULL;
