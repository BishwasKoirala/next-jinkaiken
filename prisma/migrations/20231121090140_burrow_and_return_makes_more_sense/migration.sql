/*
  Warnings:

  - The values [RENT] on the enum `RentStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RentStatus_new" AS ENUM ('BURROW', 'RETURN');
ALTER TABLE "BookRecord" ALTER COLUMN "rentStatus" TYPE "RentStatus_new" USING ("rentStatus"::text::"RentStatus_new");
ALTER TYPE "RentStatus" RENAME TO "RentStatus_old";
ALTER TYPE "RentStatus_new" RENAME TO "RentStatus";
DROP TYPE "RentStatus_old";
COMMIT;
