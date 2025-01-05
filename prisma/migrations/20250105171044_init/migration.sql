/*
  Warnings:

  - You are about to drop the column `sets` on the `Excersise` table. All the data in the column will be lost.
  - You are about to drop the column `client_id` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `trainer_id` on the `Plan` table. All the data in the column will be lost.
  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `duration` on the `Training` table. All the data in the column will be lost.
  - You are about to drop the column `excersise_id` on the `Training` table. All the data in the column will be lost.
  - You are about to drop the column `is_routine` on the `Training` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `Training` table. All the data in the column will be lost.
  - You are about to drop the `Membership` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rate` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amount` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `billing_interval` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Training` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_rate_id_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_client_id_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_trainer_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_role_id_fkey";

-- DropIndex
DROP INDEX "Day_schedule_id_key";

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "trainer_id" INTEGER;

-- AlterTable
ALTER TABLE "Day" ADD CONSTRAINT "Day_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Excersise" DROP COLUMN "sets",
ADD COLUMN     "series" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "repeats" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "client_id",
DROP COLUMN "trainer_id",
ADD COLUMN     "amount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "billing_interval" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Role" DROP CONSTRAINT "Role_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Role_id_seq";

-- AlterTable
ALTER TABLE "Training" DROP COLUMN "duration",
DROP COLUMN "excersise_id",
DROP COLUMN "is_routine",
DROP COLUMN "level",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role_id" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Membership";

-- DropTable
DROP TABLE "Rate";

-- CreateTable
CREATE TABLE "_ClientToPlan" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToPlan_AB_unique" ON "_ClientToPlan"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToPlan_B_index" ON "_ClientToPlan"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_trainer_id_fkey" FOREIGN KEY ("trainer_id") REFERENCES "Trainer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToPlan" ADD CONSTRAINT "_ClientToPlan_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToPlan" ADD CONSTRAINT "_ClientToPlan_B_fkey" FOREIGN KEY ("B") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
