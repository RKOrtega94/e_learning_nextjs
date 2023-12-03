-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ResourceType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME
);
INSERT INTO "new_ResourceType" ("createdAt", "deletedAt", "description", "icon", "id", "name", "state", "updatedAt") SELECT "createdAt", "deletedAt", "description", "icon", "id", "name", "state", "updatedAt" FROM "ResourceType";
DROP TABLE "ResourceType";
ALTER TABLE "new_ResourceType" RENAME TO "ResourceType";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
