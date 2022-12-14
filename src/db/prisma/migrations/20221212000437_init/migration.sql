/*
  Warnings:

  - You are about to alter the column `deletedAt` on the `Planet` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Planet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "diameter" TEXT NOT NULL,
    "gravity" TEXT NOT NULL,
    "terrain" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME
);
INSERT INTO "new_Planet" ("createdAt", "deletedAt", "diameter", "gravity", "id", "name", "terrain", "updatedAt") SELECT "createdAt", "deletedAt", "diameter", "gravity", "id", "name", "terrain", "updatedAt" FROM "Planet";
DROP TABLE "Planet";
ALTER TABLE "new_Planet" RENAME TO "Planet";
CREATE UNIQUE INDEX "Planet_name_key" ON "Planet"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
