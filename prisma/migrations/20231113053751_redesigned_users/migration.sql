/*
  Warnings:

  - You are about to drop the column `SchoolYear` on the `ClubMember` table. All the data in the column will be lost.
  - You are about to drop the column `gakuseki` on the `ClubMember` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[schoolNum]` on the table `ClubMember` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `schoolNum` to the `ClubMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolYear` to the `ClubMember` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ClubMember_gakuseki_key";

-- AlterTable
ALTER TABLE "ClubMember" DROP COLUMN "SchoolYear",
DROP COLUMN "gakuseki",
ADD COLUMN     "schoolNum" INTEGER NOT NULL,
ADD COLUMN     "schoolYear" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ClubMember_schoolNum_key" ON "ClubMember"("schoolNum");
