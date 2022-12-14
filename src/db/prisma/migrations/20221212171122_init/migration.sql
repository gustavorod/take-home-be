/*
  Warnings:

  - A unique constraint covering the columns `[name,deletedAt]` on the table `Planet` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Planet_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Planet_name_deletedAt_key" ON "Planet"("name", "deletedAt");
