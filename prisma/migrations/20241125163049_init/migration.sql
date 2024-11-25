-- CreateTable
CREATE TABLE "Certificate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CertificateToTrainer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CertificateToTrainer_AB_unique" ON "_CertificateToTrainer"("A", "B");

-- CreateIndex
CREATE INDEX "_CertificateToTrainer_B_index" ON "_CertificateToTrainer"("B");

-- AddForeignKey
ALTER TABLE "_CertificateToTrainer" ADD CONSTRAINT "_CertificateToTrainer_A_fkey" FOREIGN KEY ("A") REFERENCES "Certificate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CertificateToTrainer" ADD CONSTRAINT "_CertificateToTrainer_B_fkey" FOREIGN KEY ("B") REFERENCES "Trainer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
