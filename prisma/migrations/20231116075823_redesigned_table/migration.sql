/*
  Warnings:

  - You are about to drop the column `StudenNum` on the `ClubMember` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[StudentNum]` on the table `ClubMember` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `StudentNum` to the `ClubMember` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ClubMember_StudenNum_key";

-- AlterTable
ALTER TABLE "ClubMember" DROP COLUMN "StudenNum",
ADD COLUMN     "StudentNum" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ClubMember_StudentNum_key" ON "ClubMember"("StudentNum");
