/*
  Warnings:

  - Added the required column `weight` to the `BodyRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BodyRecord` ADD COLUMN `weight` DOUBLE NOT NULL;
