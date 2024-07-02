-- CreateTable
CREATE TABLE `Users` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255) NOT NULL,
    `Email` CHAR(255) NULL,
    `Password` CHAR(255) NOT NULL,
    `Admin` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `users_email_unique`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
