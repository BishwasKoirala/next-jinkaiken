/*
  Warnings:

  - You are about to drop the column `studentNum` on the `ClubMember` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ClubMember_studentNum_key";

-- AlterTable
ALTER TABLE "ClubMember" DROP COLUMN "studentNum",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "ClubMember_id_seq";
