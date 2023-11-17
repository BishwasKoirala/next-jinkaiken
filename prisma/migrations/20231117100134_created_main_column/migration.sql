/*
  Warnings:

  - A unique constraint covering the columns `[jindaiMail]` on the table `ClubMember` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `jindaiMail` to the `ClubMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClubMember" ADD COLUMN     "jindaiMail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ClubMember_jindaiMail_key" ON "ClubMember"("jindaiMail");
