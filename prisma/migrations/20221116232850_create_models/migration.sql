-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" INTEGER NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transations" (
    "id" TEXT NOT NULL,
    "debitedAccountId" TEXT NOT NULL,
    "creditedAccountId" TEXT NOT NULL,

    CONSTRAINT "transations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_accountId_key" ON "users"("accountId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transations" ADD CONSTRAINT "transations_debitedAccountId_fkey" FOREIGN KEY ("debitedAccountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transations" ADD CONSTRAINT "transations_creditedAccountId_fkey" FOREIGN KEY ("creditedAccountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
