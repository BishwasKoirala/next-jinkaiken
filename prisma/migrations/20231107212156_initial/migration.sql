/*
  Warnings:

  - Changed the type of `SchoolYear` on the `ClubMember` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ClubMember" DROP COLUMN "SchoolYear",
ADD COLUMN     "SchoolYear" INTEGER NOT NULL;
