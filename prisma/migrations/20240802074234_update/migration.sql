/*
  Warnings:

  - You are about to drop the `BodyRecord` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `BodyRecord`;

-- CreateTable
CREATE TABLE `body_record` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `weight` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
