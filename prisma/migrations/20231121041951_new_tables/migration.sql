-- CreateEnum
CREATE TYPE "RentStatus" AS ENUM ('RENT', 'RETURN');

-- CreateTable
CREATE TABLE "BookRecord" (
    "id" SERIAL NOT NULL,
    "bookName" TEXT NOT NULL,
    "memberId" INTEGER NOT NULL,
    "rentStatus" "RentStatus" NOT NULL,
    "transactionAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookRecord" ADD CONSTRAINT "BookRecord_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "ClubMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
