-- CreateTable
CREATE TABLE "Access" (
    "id" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "access" TEXT NOT NULL,

    CONSTRAINT "Access_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Access_language_key" ON "Access"("language");
