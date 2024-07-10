/*
  Warnings:

  - Made the column `Email` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `profilePic` VARCHAR(255) NULL,
    MODIFY `Email` CHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `ContentCategory` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Publishedcontent` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `content` LONGTEXT NOT NULL,
    `owner_id` INTEGER UNSIGNED NOT NULL,
    `category` INTEGER UNSIGNED NOT NULL,

    INDEX `publishedcontent_category_foreign`(`category`),
    INDEX `publishedcontent_owner_id_foreign`(`owner_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Publishedcontent` ADD CONSTRAINT `publishedcontent_category_foreign` FOREIGN KEY (`category`) REFERENCES `ContentCategory`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Publishedcontent` ADD CONSTRAINT `publishedcontent_owner_id_foreign` FOREIGN KEY (`owner_id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
