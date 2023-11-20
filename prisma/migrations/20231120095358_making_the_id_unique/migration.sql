/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `ClubMember` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ClubMember_id_key" ON "ClubMember"("id");
