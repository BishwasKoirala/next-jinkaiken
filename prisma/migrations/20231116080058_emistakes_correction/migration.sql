/*
  Warnings:

  - You are about to drop the column `StudentNum` on the `ClubMember` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentNum]` on the table `ClubMember` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentNum` to the `ClubMember` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ClubMember_StudentNum_key";

-- AlterTable
ALTER TABLE "ClubMember" DROP COLUMN "StudentNum",
ADD COLUMN     "studentNum" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ClubMember_studentNum_key" ON "ClubMember"("studentNum");
