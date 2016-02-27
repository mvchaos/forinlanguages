-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;
CREATE DATABASE IF NOT EXISTS fileData;

USE fileData;

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` INTEGER AUTO_INCREMENT,
  `username` VARCHAR(20) NULL DEFAULT NULL,
  `password` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'file'
--
-- ---

DROP TABLE IF EXISTS `file`;

CREATE TABLE `file` (
  `id` INTEGER AUTO_INCREMENT,
  `filename` VARCHAR(45) NULL DEFAULT NULL,
  `filesize` INT(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'transfers'
--
-- ---

DROP TABLE IF EXISTS `transfers`;

CREATE TABLE `transfers` (
  `id` INTEGER AUTO_INCREMENT,
  `receiver` INTEGER NULL DEFAULT NULL,
  `sender` INTEGER NULL DEFAULT NULL,
  `file` INTEGER NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `transfers` ADD FOREIGN KEY (receiver) REFERENCES `Users` (`id`);
ALTER TABLE `transfers` ADD FOREIGN KEY (sender) REFERENCES `Users` (`id`);
ALTER TABLE `transfers` ADD FOREIGN KEY (file) REFERENCES `file` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `file` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `transfers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `Users` (`id`,`username`,`password`) VALUES ('dnovograd', 'testtest');
-- INSERT INTO `file` (`id`,`filename`,`filesize`) VALUES
-- ('','','');
-- INSERT INTO `transfers` (`id`,`receiver`,`sender`,`file`,`date`) VALUES
-- ('','','','','');