/*
  Warnings:

  - You are about to drop the column `schoolNum` on the `ClubMember` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[StudenNum]` on the table `ClubMember` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `StudenNum` to the `ClubMember` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ClubMember_schoolNum_key";

-- AlterTable
ALTER TABLE "ClubMember" DROP COLUMN "schoolNum",
ADD COLUMN     "StudenNum" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ClubMember_StudenNum_key" ON "ClubMember"("StudenNum");
