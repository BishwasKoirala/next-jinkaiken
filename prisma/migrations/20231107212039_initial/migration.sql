-- CreateTable
CREATE TABLE "ClubMember" (
    "id" SERIAL NOT NULL,
    "gakuseki" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "SchoolYear" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "ClubMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClubMember_gakuseki_key" ON "ClubMember"("gakuseki");
