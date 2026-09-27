/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.20-13.0.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: employee_management
-- ------------------------------------------------------
-- Server version	13.0.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Current Database: `employee_management`
--

DROP DATABASE IF EXISTS `employee_management`;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `employee_management` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;

USE `employee_management`;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `company` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'Aarav','Sharma','aarav.sharma@example.com','9876543210','TechNova'),
(2,'Emma','Johnson','emma.johnson@example.com','9876543211','Microsoft'),
(3,'Liam','Williams','liam.williams@example.com','9876543212','Google'),
(4,'Sophia','Brown','sophia.brown@example.com','9876543213','Amazon'),
(5,'Noah','Davis','noah.davis@example.com','9876543214','Meta'),
(6,'Olivia','Miller','olivia.miller@example.com','9876543215','Apple'),
(7,'Arjun','Patel','arjun.patel@example.com','9876543216','Infosys'),
(8,'Mia','Wilson','mia.wilson@example.com','9876543217','Accenture'),
(9,'Rohan','Mehta','rohan.mehta@example.com','9876543218','TCS'),
(10,'Isabella','Anderson','isabella.anderson@example.com','9876543219','Deloitte'),
(11,'Kabir','Kapoor','kabir.kapoor@example.com','9876543220','Wipro'),
(12,'Charlotte','Thomas','charlotte.thomas@example.com','9876543221','IBM'),
(13,'Aditya','Verma','aditya.verma@example.com','9876543222','Oracle'),
(14,'Amelia','Taylor','amelia.taylor@example.com','9876543223','Adobe'),
(15,'Vikram','Singh','vikram.singh@example.com','9876543224','Cognizant'),
(16,'James','Moore','james.moore@example.com','9876543225','Salesforce'),
(17,'Ananya','Rao','ananya.rao@example.com','9876543226','Flipkart'),
(18,'Benjamin','Martin','benjamin.martin@example.com','9876543227','Uber'),
(19,'Ishaan','Gupta','ishaan.gupta@example.com','9876543228','PayPal'),
(20,'Emily','Clark','emily.clark@example.com','9876543229','Netflix'),
(21,'John','Smith','john@example.com','9876543210','Aperture'),
(22,'Aaditya','Patil','ace787b@gmail.com','123412334','Some Company');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2026-09-27 11:18:34
