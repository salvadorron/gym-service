-- CreateTable
CREATE TABLE "Training" (
    "id" SERIAL NOT NULL,
    "excersise_id" INTEGER NOT NULL,
    "plan_id" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "is_routine" BOOLEAN NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
