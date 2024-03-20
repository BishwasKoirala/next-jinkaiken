-- CreateTable
CREATE TABLE "User" (
    "studentId" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "gakubu" TEXT NOT NULL,
    "gakka" TEXT NOT NULL,
    "phoneNum" TEXT NOT NULL,
    "password" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "registered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("studentId")
);

-- CreateTable
CREATE TABLE "StoreBooks" (
    "id" TEXT NOT NULL,
    "isbn13" TEXT,
    "isbn10" TEXT,
    "title" TEXT NOT NULL,
    "authors" TEXT NOT NULL,
    "rentable" BOOLEAN NOT NULL DEFAULT true,
    "registered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreBooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookRecords" (
    "id" SERIAL NOT NULL,
    "studentId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "burrowed_at" TIMESTAMP(3) NOT NULL,
    "returned" BOOLEAN NOT NULL DEFAULT false,
    "returned_at" TIMESTAMP(3),

    CONSTRAINT "BookRecords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_studentId_key" ON "User"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "StoreBooks_id_key" ON "StoreBooks"("id");

-- AddForeignKey
ALTER TABLE "BookRecords" ADD CONSTRAINT "BookRecords_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRecords" ADD CONSTRAINT "BookRecords_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "StoreBooks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
