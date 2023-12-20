-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Resource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "typeId" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "path" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "Resource_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ResourceType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Resource_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Resource" ("classroomId", "createdAt", "deletedAt", "description", "id", "name", "path", "status", "typeId", "updatedAt") SELECT "classroomId", "createdAt", "deletedAt", "description", "id", "name", "path", "status", "typeId", "updatedAt" FROM "Resource";
DROP TABLE "Resource";
ALTER TABLE "new_Resource" RENAME TO "Resource";
CREATE INDEX "typeId" ON "Resource"("typeId");
CREATE UNIQUE INDEX "Resource_typeId_classroomId_key" ON "Resource"("typeId", "classroomId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
