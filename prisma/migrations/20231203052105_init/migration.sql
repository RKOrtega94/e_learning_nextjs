/*
  Warnings:

  - A unique constraint covering the columns `[typeId,classroomId]` on the table `Resource` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Resource_classroomId_typeId_key";

-- CreateIndex
CREATE INDEX "typeId" ON "Resource"("typeId");

-- CreateIndex
CREATE INDEX "classroomId" ON "Resource"("classroomId");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_typeId_classroomId_key" ON "Resource"("typeId", "classroomId");
