/*
  Warnings:

  - Added the required column `ingredients` to the `recipes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `recipes` ADD COLUMN `ingredients` LONGTEXT NOT NULL;
