/*
  Warnings:

  - You are about to drop the column `repeats` on the `Excersise` table. All the data in the column will be lost.
  - You are about to drop the column `series` on the `Excersise` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `billing_interval` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `time_end` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `time_start` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the `_ClientToPlan` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `shift` to the `Day` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `features` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `municipality_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parrish_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip_code` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('BEGGINER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "Intencity" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "GENDER" AS ENUM ('MALE', 'FEMALE');

-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_client_id_fkey";

-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_schedule_id_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_trainer_id_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Day" DROP CONSTRAINT "Day_schedule_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_client_id_fkey";

-- DropForeignKey
ALTER TABLE "Trainer" DROP CONSTRAINT "Trainer_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Training" DROP CONSTRAINT "Training_plan_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_role_id_fkey";

-- DropForeignKey
ALTER TABLE "_ClientToPlan" DROP CONSTRAINT "_ClientToPlan_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClientToPlan" DROP CONSTRAINT "_ClientToPlan_B_fkey";

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "plan_id" INTEGER;

-- AlterTable
ALTER TABLE "Day" ADD COLUMN     "shift" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Excersise" DROP COLUMN "repeats",
DROP COLUMN "series",
ADD COLUMN     "difficulty" "Difficulty" NOT NULL DEFAULT 'BEGGINER',
ADD COLUMN     "distance" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "duration" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "equipment" TEXT NOT NULL DEFAULT 'dumbbells',
ADD COLUMN     "intensity" "Intencity",
ADD COLUMN     "muscleGroup" TEXT NOT NULL DEFAULT 'legs',
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "reps" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "sets" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'repetitions',
ADD COLUMN     "weight" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "endDate" DATE NOT NULL,
ADD COLUMN     "startDate" DATE NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "amount",
DROP COLUMN "billing_interval",
DROP COLUMN "description",
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "features" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "duration",
DROP COLUMN "time_end",
DROP COLUMN "time_start";

-- AlterTable
ALTER TABLE "Training" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "shedule_id" INTEGER,
ALTER COLUMN "plan_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "gender" "GENDER" NOT NULL DEFAULT 'MALE',
ADD COLUMN     "height" INTEGER NOT NULL,
ADD COLUMN     "medical_conditions" TEXT,
ADD COLUMN     "municipality_id" INTEGER NOT NULL,
ADD COLUMN     "nutritional_plan_id" INTEGER,
ADD COLUMN     "parrish_id" INTEGER NOT NULL,
ADD COLUMN     "state_id" INTEGER NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL,
ADD COLUMN     "zip_code" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ClientToPlan";

-- CreateTable
CREATE TABLE "Municipality" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state_id" INTEGER NOT NULL,

    CONSTRAINT "Municipality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parrish" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "municipality_id" INTEGER NOT NULL,

    CONSTRAINT "Parrish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NutritionalPlan" (
    "id" SERIAL NOT NULL,
    "planName" TEXT NOT NULL,
    "planType" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "breakfast" TEXT NOT NULL,
    "lunch" TEXT NOT NULL,
    "dinner" TEXT NOT NULL,
    "snacks" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "NutritionalPlan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_municipality_id_fkey" FOREIGN KEY ("municipality_id") REFERENCES "Municipality"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_parrish_id_fkey" FOREIGN KEY ("parrish_id") REFERENCES "Parrish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_nutritional_plan_id_fkey" FOREIGN KEY ("nutritional_plan_id") REFERENCES "NutritionalPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_trainer_id_fkey" FOREIGN KEY ("trainer_id") REFERENCES "Trainer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trainer" ADD CONSTRAINT "Trainer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_shedule_id_fkey" FOREIGN KEY ("shedule_id") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Day" ADD CONSTRAINT "Day_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Municipality" ADD CONSTRAINT "Municipality_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parrish" ADD CONSTRAINT "Parrish_municipality_id_fkey" FOREIGN KEY ("municipality_id") REFERENCES "Municipality"("id") ON DELETE CASCADE ON UPDATE CASCADE;
