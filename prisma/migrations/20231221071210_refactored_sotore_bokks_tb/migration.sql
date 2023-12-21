-- CreateTable
CREATE TABLE "User" (
    "studentId" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "gakubu" TEXT NOT NULL,
    "gakka" TEXT NOT NULL,
    "phoneNum" TEXT NOT NULL,
    "password" TEXT,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("studentId")
);

-- CreateTable
CREATE TABLE "BookRecords" (
    "id" SERIAL NOT NULL,
    "studentId" TEXT NOT NULL,
    "bookName" TEXT,
    "rentStatus" TEXT,
    "transactionAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookRecords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoreBooks" (
    "id" TEXT NOT NULL,
    "isbn13" TEXT NOT NULL,
    "isbn10" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "authors" TEXT NOT NULL,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreBooks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_studentId_key" ON "User"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "StoreBooks_id_key" ON "StoreBooks"("id");

-- AddForeignKey
ALTER TABLE "BookRecords" ADD CONSTRAINT "BookRecords_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;
