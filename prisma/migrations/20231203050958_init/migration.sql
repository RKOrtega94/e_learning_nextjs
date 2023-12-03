/*
  Warnings:

  - A unique constraint covering the columns `[classroomId,typeId]` on the table `Resource` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Resource_classroomId_typeId_key" ON "Resource"("classroomId", "typeId");
