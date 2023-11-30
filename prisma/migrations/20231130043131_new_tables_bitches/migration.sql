-- CreateEnum
CREATE TYPE "RentStatus" AS ENUM ('BURROW', 'RETURN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "bookRecords" (
    "id" SERIAL NOT NULL,
    "studentId" TEXT NOT NULL,
    "bookName" TEXT,
    "rentStatus" TEXT,

    CONSTRAINT "bookRecords_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bookRecords" ADD CONSTRAINT "bookRecords_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;
