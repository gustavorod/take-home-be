-- CreateTable
CREATE TABLE "Planet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "diameter" TEXT NOT NULL,
    "gravity" TEXT NOT NULL,
    "terrain" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Planet_name_key" ON "Planet"("name");
