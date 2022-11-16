/*
  Warnings:

  - You are about to drop the `transations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "transations" DROP CONSTRAINT "transations_creditedAccountId_fkey";

-- DropForeignKey
ALTER TABLE "transations" DROP CONSTRAINT "transations_debitedAccountId_fkey";

-- DropTable
DROP TABLE "transations";

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "debitedAccountId" TEXT NOT NULL,
    "creditedAccountId" TEXT NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_debitedAccountId_fkey" FOREIGN KEY ("debitedAccountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_creditedAccountId_fkey" FOREIGN KEY ("creditedAccountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
