-- CreateTable
CREATE TABLE "StoreBooks" (
    "columnId" SERIAL NOT NULL,
    "isbn13" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "author2" TEXT NOT NULL,
    "aurhor3" TEXT NOT NULL,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StoreBooks_pkey" PRIMARY KEY ("columnId")
);

-- CreateIndex
CREATE UNIQUE INDEX "StoreBooks_isbn13_key" ON "StoreBooks"("isbn13");

-- CreateIndex
CREATE UNIQUE INDEX "StoreBooks_id_key" ON "StoreBooks"("id");
