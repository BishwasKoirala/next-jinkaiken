/*
  Warnings:

  - You are about to drop the `bookRecords` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bookRecords" DROP CONSTRAINT "bookRecords_studentId_fkey";

-- DropTable
DROP TABLE "bookRecords";

-- CreateTable
CREATE TABLE "BookRecords" (
    "id" SERIAL NOT NULL,
    "studentId" TEXT NOT NULL,
    "bookName" TEXT,
    "rentStatus" TEXT,
    "transactionAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookRecords_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookRecords" ADD CONSTRAINT "BookRecords_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;
