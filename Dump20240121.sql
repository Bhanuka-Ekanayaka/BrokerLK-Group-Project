-- MySQL dump 10.13  Distrib 8.2.0, for Win64 (x86_64)
--
-- Host: localhost    Database: brokerlk_complete
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accommodationtb`
--

DROP TABLE IF EXISTS `accommodationtb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accommodationtb` (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `district` varchar(25) NOT NULL,
  `house_no` varchar(25) NOT NULL,
  `address_line1` varchar(100) NOT NULL,
  `address_line2` varchar(100) NOT NULL,
  `postal_code` int NOT NULL,
  `owner_id` int DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `owner_accomadation_idx` (`owner_id`),
  CONSTRAINT `owner_accomadation` FOREIGN KEY (`owner_id`) REFERENCES `usertb` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accommodationtb`
--

LOCK TABLES `accommodationtb` WRITE;
/*!40000 ALTER TABLE `accommodationtb` DISABLE KEYS */;
INSERT INTO `accommodationtb` VALUES (1,'matara','282/A','address01','address02',25251,2);
/*!40000 ALTER TABLE `accommodationtb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boarding_buildingtb`
--

DROP TABLE IF EXISTS `boarding_buildingtb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boarding_buildingtb` (
  `no_rooms` int NOT NULL,
  `description` varchar(1000) NOT NULL,
  `post_id` int NOT NULL,
  PRIMARY KEY (`post_id`),
  CONSTRAINT `bulilding_id` FOREIGN KEY (`post_id`) REFERENCES `accommodationtb` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boarding_buildingtb`
--

LOCK TABLES `boarding_buildingtb` WRITE;
/*!40000 ALTER TABLE `boarding_buildingtb` DISABLE KEYS */;
/*!40000 ALTER TABLE `boarding_buildingtb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boarding_room_imgtb`
--

DROP TABLE IF EXISTS `boarding_room_imgtb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boarding_room_imgtb` (
  `img_id` int NOT NULL,
  `room_inside_img1` varchar(500) NOT NULL,
  `washroom_img` varchar(500) NOT NULL,
  `kitchen_img` varchar(500) DEFAULT NULL,
  `room_inside_img2` varchar(500) NOT NULL,
  `room_outside_img1` varchar(500) NOT NULL,
  `room_outside_img2` varchar(500) NOT NULL,
  `room_id` int NOT NULL,
  PRIMARY KEY (`img_id`,`room_id`),
  KEY `bodim_room_id_idx` (`room_id`),
  CONSTRAINT `bodim_room_id` FOREIGN KEY (`room_id`) REFERENCES `boarding_roomstb` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boarding_room_imgtb`
--

LOCK TABLES `boarding_room_imgtb` WRITE;
/*!40000 ALTER TABLE `boarding_room_imgtb` DISABLE KEYS */;
/*!40000 ALTER TABLE `boarding_room_imgtb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boarding_roomstb`
--

DROP TABLE IF EXISTS `boarding_roomstb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boarding_roomstb` (
  `no_bed` int DEFAULT NULL,
  `building_room_no` int DEFAULT NULL,
  `description` varchar(1000) NOT NULL,
  `no_tenants` int NOT NULL,
  `is_boarding_building` binary(5) DEFAULT NULL,
  `post_id` int NOT NULL,
  `building_room_id` int DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `building_room_id_idx` (`building_room_id`),
  CONSTRAINT `building_room_id` FOREIGN KEY (`building_room_id`) REFERENCES `boarding_roomstb` (`post_id`),
  CONSTRAINT `post_id_rooms` FOREIGN KEY (`post_id`) REFERENCES `accommodationtb` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boarding_roomstb`
--

LOCK TABLES `boarding_roomstb` WRITE;
/*!40000 ALTER TABLE `boarding_roomstb` DISABLE KEYS */;
INSERT INTO `boarding_roomstb` VALUES (2,NULL,'specially for university students',2,_binary '0\0\0\0\0',1,NULL);
/*!40000 ALTER TABLE `boarding_roomstb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `building_imagetb`
--

DROP TABLE IF EXISTS `building_imagetb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `building_imagetb` (
  `img_id` int NOT NULL AUTO_INCREMENT,
  `gate_img` varchar(500) NOT NULL,
  `outdoor_img1` varchar(500) NOT NULL,
  `outdoor_img2` varchar(500) NOT NULL,
  `inside_img1` varchar(500) NOT NULL,
  `inside_img2` varchar(500) NOT NULL,
  `building_id` int NOT NULL,
  PRIMARY KEY (`img_id`,`building_id`),
  KEY `building_id_idx` (`building_id`),
  CONSTRAINT `building_id` FOREIGN KEY (`building_id`) REFERENCES `boarding_buildingtb` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `building_imagetb`
--

LOCK TABLES `building_imagetb` WRITE;
/*!40000 ALTER TABLE `building_imagetb` DISABLE KEYS */;
/*!40000 ALTER TABLE `building_imagetb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compartmenttb`
--

DROP TABLE IF EXISTS `compartmenttb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compartmenttb` (
  `size_ft` int NOT NULL,
  `status` varchar(50) NOT NULL,
  `room_id` int NOT NULL,
  `post_id` int DEFAULT NULL,
  PRIMARY KEY (`room_id`),
  KEY `post_id_fk_idx` (`post_id`),
  CONSTRAINT `post_id_fk` FOREIGN KEY (`post_id`) REFERENCES `rental_housetb` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compartmenttb`
--

LOCK TABLES `compartmenttb` WRITE;
/*!40000 ALTER TABLE `compartmenttb` DISABLE KEYS */;
/*!40000 ALTER TABLE `compartmenttb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `house_room_imgtb`
--

DROP TABLE IF EXISTS `house_room_imgtb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `house_room_imgtb` (
  `img_id` int NOT NULL,
  `room_img1` varchar(500) DEFAULT NULL,
  `room_img2` varchar(500) DEFAULT NULL,
  `room_img3` varchar(500) DEFAULT NULL,
  `washroom_img` varchar(500) DEFAULT NULL,
  `kitchen_img` varchar(500) DEFAULT NULL,
  `room_id` int NOT NULL,
  PRIMARY KEY (`img_id`,`room_id`),
  KEY `room_img_idx` (`room_id`),
  CONSTRAINT `room_img` FOREIGN KEY (`room_id`) REFERENCES `compartmenttb` (`room_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `house_room_imgtb`
--

LOCK TABLES `house_room_imgtb` WRITE;
/*!40000 ALTER TABLE `house_room_imgtb` DISABLE KEYS */;
/*!40000 ALTER TABLE `house_room_imgtb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymenttb`
--

DROP TABLE IF EXISTS `paymenttb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymenttb` (
  `bill_id` int NOT NULL AUTO_INCREMENT,
  `amount` decimal(10,2) NOT NULL,
  `type` varchar(45) NOT NULL,
  `paid_bill_img` varchar(500) DEFAULT NULL,
  `owner_id` int NOT NULL,
  `post_id` int NOT NULL,
  `tenants_id` int NOT NULL,
  PRIMARY KEY (`bill_id`,`owner_id`,`post_id`,`tenants_id`),
  KEY `user_id_idx` (`owner_id`),
  KEY `post_id_payment_idx` (`post_id`),
  KEY `tenants_id_payment_idx` (`tenants_id`),
  CONSTRAINT `owener` FOREIGN KEY (`owner_id`) REFERENCES `usertb` (`user_id`),
  CONSTRAINT `post_id_payment` FOREIGN KEY (`post_id`) REFERENCES `accommodationtb` (`post_id`),
  CONSTRAINT `tenants_id_payment` FOREIGN KEY (`tenants_id`) REFERENCES `usertb` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymenttb`
--

LOCK TABLES `paymenttb` WRITE;
/*!40000 ALTER TABLE `paymenttb` DISABLE KEYS */;
INSERT INTO `paymenttb` VALUES (1,5000.00,'bank','image01',2,1,1);
/*!40000 ALTER TABLE `paymenttb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `price_detailstb`
--

DROP TABLE IF EXISTS `price_detailstb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `price_detailstb` (
  `detail_id` int NOT NULL AUTO_INCREMENT,
  `agreed_price` decimal(10,2) NOT NULL,
  `advertised_price` decimal(10,2) NOT NULL,
  `agreed_date` date NOT NULL,
  `incremental_amount` decimal(10,2) NOT NULL,
  `incremental_date` decimal(10,2) NOT NULL,
  `post_id` int NOT NULL,
  PRIMARY KEY (`detail_id`,`post_id`),
  KEY `price_post_idx` (`post_id`),
  CONSTRAINT `price_post` FOREIGN KEY (`post_id`) REFERENCES `accommodationtb` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `price_detailstb`
--

LOCK TABLES `price_detailstb` WRITE;
/*!40000 ALTER TABLE `price_detailstb` DISABLE KEYS */;
/*!40000 ALTER TABLE `price_detailstb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registrationtb`
--

DROP TABLE IF EXISTS `registrationtb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registrationtb` (
  `user_name` varchar(100) NOT NULL,
  `password` varchar(15) NOT NULL,
  `Role` varchar(10) NOT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrationtb`
--

LOCK TABLES `registrationtb` WRITE;
/*!40000 ALTER TABLE `registrationtb` DISABLE KEYS */;
INSERT INTO `registrationtb` VALUES ('ashan@email.com','11684','tenant'),('banuka@email.com','11114','owner'),('sadun@email.com','11114','admin');
/*!40000 ALTER TABLE `registrationtb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rental_house_imgtb`
--

DROP TABLE IF EXISTS `rental_house_imgtb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental_house_imgtb` (
  `img_jd` int NOT NULL AUTO_INCREMENT,
  `gate_img` varchar(500) NOT NULL,
  `outdoor_img1` varchar(500) NOT NULL,
  `outdoor_img2` varchar(500) NOT NULL,
  `house_front_img` varchar(500) NOT NULL,
  `house_back_img` varchar(500) NOT NULL,
  `reantal_id` int NOT NULL,
  PRIMARY KEY (`img_jd`,`reantal_id`),
  KEY `rentalhouse_idx` (`reantal_id`),
  CONSTRAINT `rentalhouse` FOREIGN KEY (`reantal_id`) REFERENCES `rental_housetb` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_house_imgtb`
--

LOCK TABLES `rental_house_imgtb` WRITE;
/*!40000 ALTER TABLE `rental_house_imgtb` DISABLE KEYS */;
/*!40000 ALTER TABLE `rental_house_imgtb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rental_housetb`
--

DROP TABLE IF EXISTS `rental_housetb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental_housetb` (
  `furniture_status` varchar(45) NOT NULL,
  `no_living_rooms` int NOT NULL,
  `no_kitchens` int DEFAULT NULL,
  `no_washrooms` int DEFAULT NULL,
  `post_id` int NOT NULL,
  PRIMARY KEY (`post_id`),
  KEY `post_house_id_idx` (`post_id`),
  CONSTRAINT `post_house_id` FOREIGN KEY (`post_id`) REFERENCES `accommodationtb` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_housetb`
--

LOCK TABLES `rental_housetb` WRITE;
/*!40000 ALTER TABLE `rental_housetb` DISABLE KEYS */;
/*!40000 ALTER TABLE `rental_housetb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reporttb`
--

DROP TABLE IF EXISTS `reporttb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reporttb` (
  `rep_id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(150) DEFAULT NULL,
  `not_related` binary(5) DEFAULT NULL,
  `spamming` binary(5) DEFAULT NULL,
  `other` binary(5) DEFAULT NULL,
  `fake_account` binary(5) DEFAULT NULL,
  `post_id` int NOT NULL,
  `admin_id` int NOT NULL,
  PRIMARY KEY (`rep_id`,`post_id`,`admin_id`),
  KEY `post_reports_idx` (`post_id`),
  KEY `admin_reports_idx` (`admin_id`),
  CONSTRAINT `admin_reports` FOREIGN KEY (`admin_id`) REFERENCES `usertb` (`user_id`),
  CONSTRAINT `post_reports` FOREIGN KEY (`post_id`) REFERENCES `accommodationtb` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reporttb`
--

LOCK TABLES `reporttb` WRITE;
/*!40000 ALTER TABLE `reporttb` DISABLE KEYS */;
/*!40000 ALTER TABLE `reporttb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviewstb`
--

DROP TABLE IF EXISTS `reviewstb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviewstb` (
  `rev_id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(250) NOT NULL,
  `rating` float NOT NULL,
  `user_id` int DEFAULT NULL,
  `post_id` int DEFAULT NULL,
  PRIMARY KEY (`rev_id`),
  KEY `user_id_idx` (`user_id`),
  KEY `post_id_review_idx` (`post_id`),
  CONSTRAINT `post_id_review` FOREIGN KEY (`post_id`) REFERENCES `accommodationtb` (`post_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `usertb` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviewstb`
--

LOCK TABLES `reviewstb` WRITE;
/*!40000 ALTER TABLE `reviewstb` DISABLE KEYS */;
INSERT INTO `reviewstb` VALUES (1,'good place',4.5,1,1);
/*!40000 ALTER TABLE `reviewstb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertb`
--

DROP TABLE IF EXISTS `usertb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertb` (
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `contact_number` varchar(15) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `streetnum` varchar(15) DEFAULT NULL,
  `address_line1` varchar(50) DEFAULT NULL,
  `address_line2` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `user_id` int NOT NULL,
  `tenantFlag` tinyint NOT NULL DEFAULT '0',
  `ownerFlag` tinyint NOT NULL DEFAULT '0',
  `advertiserFlag` tinyint NOT NULL DEFAULT '0',
  `adminFlag` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`),
  KEY `email_idx` (`email`),
  CONSTRAINT `email` FOREIGN KEY (`email`) REFERENCES `registrationtb` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertb`
--

LOCK TABLES `usertb` WRITE;
/*!40000 ALTER TABLE `usertb` DISABLE KEYS */;
INSERT INTO `usertb` VALUES ('ashan','jayasinghe','0123456789','ashan@email.com','street01','address01','address02','matara',1,1,0,0,0),('bhanuka','surname','0123456789','banuka@email.com','street01','address01','address02','matara',2,0,1,0,0),('sadun','surname','0123456789','sadun@email.com','street03','address01','address02','matara',3,0,0,0,1);
/*!40000 ALTER TABLE `usertb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-21 14:45:12
