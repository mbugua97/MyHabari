/*
  Warnings:

  - Added the required column `content_title` to the `Publishedcontent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Publishedcontent` ADD COLUMN `content_title` VARCHAR(225) NOT NULL;
