-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: broker
-- ------------------------------------------------------
-- Server version	8.0.35

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
  `house_no` varchar(25) DEFAULT NULL,
  `address_line1` varchar(100) NOT NULL,
  `address_line2` varchar(100) NOT NULL,
  `postal_code` int DEFAULT NULL,
  `owner_id` int DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `owner_accomadation_idx` (`owner_id`),
  CONSTRAINT `owner_accomadation` FOREIGN KEY (`owner_id`) REFERENCES `usertb` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accommodationtb`
--

LOCK TABLES `accommodationtb` WRITE;
/*!40000 ALTER TABLE `accommodationtb` DISABLE KEYS */;
INSERT INTO `accommodationtb` VALUES (1,'matara','282/A','address01','address02',25251,2),(2,'Colombo',NULL,'123 Bokkawala Road','Pussegoda,Ambaruppa,Harankahawa',NULL,3),(3,'Kandy',NULL,'38 Bokkawala Road','Pussegoda,Ambaruppa,Harankahawa',NULL,3),(4,'Kandy',NULL,'38 Bokkawala Road','Pussegoda,Ambaruppa,Harankahawa',NULL,3),(5,'Kandy',NULL,'38 Bokkawala Road','Pussegoda,Ambaruppa,Harankahawa',NULL,3),(6,'Kandy',NULL,'38 Bokkawala Road','Pussegoda,Ambaruppa,Harankahawa',NULL,3),(7,'Kandy',NULL,'38 Bokkawala Road','Pussegoda,Ambaruppa,Harankahawa',NULL,3),(8,'Kandy',NULL,'38 Bokkawala Road','Pussegoda,Ambaruppa,Harankahawa',NULL,3),(9,'Kandy',NULL,'38 Bokkawala Road','Pussegoda,Ambaruppa,Harankahawa',NULL,3),(10,'Kandy',NULL,'38 Bokkawala Road','Pussegoda,Ambaruppa,Harankahawa',NULL,3),(11,'Colombo',NULL,'sd','asdas',NULL,3),(12,'Colombo',NULL,'cxvcxvx','zxvcvczv',NULL,3),(13,'Colombo',NULL,'cxvcxvx','zxvcvczv',NULL,3),(14,'Colombo',NULL,'cxvcxvx','zxvcvczv',NULL,3),(15,'Ampara',NULL,'232','sdfdsfd',NULL,3),(16,'Ampara',NULL,'232','sdfdsfd',NULL,3),(17,'Ampara',NULL,'232','sdfdsfd',NULL,3),(18,'Ampara',NULL,'232','sdfdsfd',NULL,3),(19,'Nuwara Eliya',NULL,'48 hatton','NuwaraEliya',NULL,3),(20,'Nuwara Eliya',NULL,'48 hatton','NuwaraEliya',NULL,3),(21,'Nuwara Eliya',NULL,'48 hatton','NuwaraEliya',NULL,3),(22,'Nuwara Eliya',NULL,'48 hatton','NuwaraEliya',NULL,3),(23,'Nuwara Eliya',NULL,'48 hatton','NuwaraEliya',NULL,3),(24,'Colombo',NULL,'jahsdj','jasdhj',NULL,3),(25,'Colombo',NULL,'sadfasd','asdasd',NULL,3),(26,'Colombo',NULL,'sadfasd','asdasd',NULL,3),(27,'Colombo',NULL,'sadfasd','asdasd',NULL,3),(28,'Colombo',NULL,'hhg','vhg',NULL,3),(29,'Colombo',NULL,'sfs','dsfdsf',NULL,3),(30,'Colombo',NULL,'sfs','dsfdsf',NULL,3),(31,'Colombo',NULL,'sfs','dsfdsf',NULL,3),(32,'Colombo',NULL,'sfs','dsfdsf',NULL,3),(33,'Colombo',NULL,'sfs','dsfdsf',NULL,3),(34,'Colombo',NULL,'sfs','dsfdsf',NULL,3),(35,'Colombo',NULL,'sfs','dsfdsf',NULL,3),(36,'Colombo',NULL,'sfs','dsfdsf',NULL,3),(37,'Gampaha',NULL,'hghfhfhg','hgvhgch',NULL,3),(38,'Gampaha',NULL,'hghfhfhg','hgvhgch',NULL,3),(39,'Gampaha',NULL,'hghfhfhg','hgvhgch',NULL,3),(40,'Gampaha',NULL,'hghfhfhg','hgvhgch',NULL,3),(41,'Gampaha',NULL,'hghfhfhg','hgvhgch',NULL,3),(42,'Gampaha',NULL,'hghfhfhg','hgvhgch',NULL,3),(43,'Gampaha',NULL,'hghfhfhg','hgvhgch',NULL,3),(44,'Colombo',NULL,'dsgds','sdfds',NULL,3),(45,'Colombo',NULL,'dsgds','sdfds',NULL,3),(46,'Colombo',NULL,'dsgds','sdfds',NULL,3),(47,'Colombo',NULL,'dsgds','sdfds',NULL,3),(48,'Colombo',NULL,'dsgds','sdfds',NULL,3),(49,'Kurunegala',NULL,'45 Matara Road','wellewatta,eliyakanda,maddawatta',NULL,3),(50,'Kalutara',NULL,'46','Aluthgama,Kaluthara',NULL,3),(51,'Kalutara',NULL,'46','Aluthgama,Kaluthara',NULL,3),(52,'Kalutara',NULL,'46','Aluthgama,Kaluthara',NULL,3),(53,'Kalutara',NULL,'46','Aluthgama,Kaluthara',NULL,3),(54,'Colombo',NULL,'ff','jhgj',NULL,3),(55,'Colombo',NULL,'ff','jhgj',NULL,3),(56,'Colombo',NULL,'ff','jhgj',NULL,3),(57,'Colombo',NULL,'ff','jhgj',NULL,3),(58,'Colombo',NULL,'ff','jhgj',NULL,3),(59,'Colombo',NULL,'ff','jhgj',NULL,3),(60,'Colombo',NULL,'ff','jhgj',NULL,3),(61,'Colombo',NULL,'ff','jhgj',NULL,3),(62,'Colombo',NULL,'ff','jhgj',NULL,3),(63,'Colombo',NULL,'ff','jhgj',NULL,3),(64,'Colombo',NULL,'ff','jhgj',NULL,3),(65,'Colombo',NULL,'ff','jhgj',NULL,3),(66,'Colombo',NULL,'ff','jhgj',NULL,3),(67,'Colombo',NULL,'ff','jhgj',NULL,3),(68,'Colombo',NULL,'ff','jhgj',NULL,3),(69,'Colombo',NULL,'sdfdsfsdfdsf','skfjdsf,slfljsdif',NULL,3),(70,'Colombo',NULL,'sdfdsfsdfdsf','skfjdsf,slfljsdif',NULL,3),(71,'Colombo',NULL,'asdjhjs','jagsdh',NULL,3),(72,'Colombo',NULL,'asdjhjs','jagsdh',NULL,3),(73,'Colombo',NULL,'wfeesdfds','sdfdsf',NULL,3),(74,'Matara',NULL,'ajdhs','ajsbd',NULL,3),(75,'Kandy',NULL,'71276','Pussegoda,Ambaruppa,Harankahawa',NULL,3),(76,'Ampara',NULL,'zsd','asd',NULL,3),(77,'Puttalam',NULL,'21w','asdsadsa',NULL,3),(78,'Hambantota',NULL,'jhj','jhj',NULL,3),(79,'Colombo',NULL,'jqbw','kadk',NULL,3),(80,'Kandy',NULL,'45/2,Peradeniya Road','Suduhumpala, Kandy',NULL,3),(81,'Matara',NULL,'40/1,Matara Road','Nilwala,Matara',NULL,3),(82,'Ratnapura',NULL,'93/2,Matara Road','Demuwatta,Rathnapura',NULL,3),(83,'Kurunegala',NULL,'13/2,Kandy Road','Mallwapitiya,Kurunagala',NULL,3),(84,'Galle',NULL,'33/4,Matara Road','Unawatuna,Galle',NULL,3),(88,'Anuradhapura',NULL,'67/1','Mihintale,Anuradapura',NULL,3),(89,'Trincomalee',NULL,'56/2','Nilaweli Road,Trincomalee',NULL,3),(90,'Batticaloa',NULL,'67/2','Oluwil, Batticaloa',NULL,3),(91,'Jaffna',NULL,'123/5','Nallur,Jaffna',NULL,3),(92,'Monaragala',NULL,'55','Yudhaganawa,Monaragala',NULL,3),(93,'Colombo',NULL,'45','Kelaniya, Colombo',NULL,3),(94,'Colombo',NULL,'45','Kelaniya, Colombo',NULL,3),(95,'Jaffna',NULL,'45','Nallur,Jaffna',NULL,3),(96,'Anuradhapura',NULL,'54/2','Rambewa,Anuaradapuara',NULL,3),(97,'Badulla',NULL,'78/2','Nuvara,Badulla',NULL,3),(98,'Hambantota',NULL,'54/2','Bus stand Road, Hambantota',NULL,3),(99,'Kandy',NULL,'54','Henegama,Harankahawa',NULL,3);
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
  `img_id` int NOT NULL AUTO_INCREMENT,
  `room_inside_img1` varchar(500) DEFAULT NULL,
  `washroom_img` varchar(500) DEFAULT NULL,
  `kitchen_img` varchar(500) DEFAULT NULL,
  `room_inside_img2` varchar(500) DEFAULT NULL,
  `room_outside_img1` varchar(500) DEFAULT NULL,
  `room_outside_img2` varchar(500) DEFAULT NULL,
  `room_id` int NOT NULL,
  PRIMARY KEY (`img_id`,`room_id`),
  KEY `bodim_room_id_idx` (`room_id`),
  CONSTRAINT `bodim_room_id` FOREIGN KEY (`room_id`) REFERENCES `boarding_roomstb` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boarding_room_imgtb`
--

LOCK TABLES `boarding_room_imgtb` WRITE;
/*!40000 ALTER TABLE `boarding_room_imgtb` DISABLE KEYS */;
INSERT INTO `boarding_room_imgtb` VALUES (1,NULL,NULL,NULL,NULL,NULL,NULL,32),(2,'1708095794561-36-1.jpg','1708095794574-36-1.jpg','1708095794578-36-2885865.jpg','1708095794566-36-2885865.jpg','1708095794555-36-2.jpg','1708095794591-36-1.jpg',36),(3,'1708097066982-39-2.jpg',NULL,NULL,NULL,NULL,NULL,39),(4,'1708097082704-40-2.jpg',NULL,NULL,NULL,NULL,NULL,40),(5,'1708097093416-41-2.jpg',NULL,NULL,NULL,NULL,NULL,41),(6,'1708097104403-42-2.jpg',NULL,NULL,NULL,NULL,NULL,42),(7,'1708097123008-43-2.jpg',NULL,NULL,NULL,NULL,NULL,43),(8,'1708097241654-44-pngtree-real-estate-building-logo-image_501124-removebg-preview.png',NULL,NULL,NULL,NULL,NULL,44),(10,'1708098175854-48-pngtree-real-estate-building-logo-image_501124-removebg-preview.png','1708098175855-48-2885865.jpg',NULL,NULL,NULL,NULL,48),(11,'1708101964672-49-unnamed.png','1708101964683-49-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,'1708101964669-49-download.jpeg','1708101966299-49-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',49),(12,'1708103788777-50-HD-wallpaper-beautiful-house-architecture-beautiful-house-houses.jpg',NULL,NULL,NULL,NULL,NULL,50),(13,'1708103965550-51-HD-wallpaper-beautiful-house-architecture-beautiful-house-houses.jpg',NULL,NULL,NULL,NULL,NULL,51),(14,'1708103973564-52-HD-wallpaper-beautiful-house-architecture-beautiful-house-houses.jpg',NULL,NULL,NULL,NULL,NULL,52),(15,'1708103981425-53-HD-wallpaper-beautiful-house-architecture-beautiful-house-houses.jpg',NULL,NULL,NULL,NULL,NULL,53),(16,'1708104168874-54-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,54),(17,'1708104175996-55-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,55),(18,'1708104280324-56-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,56),(19,'1708104476267-57-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,57),(20,'1708104516488-58-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,58),(21,'1708104575716-59-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,59),(22,'1708104584249-60-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,60),(23,'1708104590234-61-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,61),(24,'1708104658559-62-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,62),(25,'1708104737991-63-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,63),(26,'1708104745912-64-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,64),(27,'1708104750480-65-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,65),(28,'1708104753737-66-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,66),(29,'1708104769545-67-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,67),(30,'1708105683911-69-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,69),(31,'1708105751832-70-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,70),(32,'1708106128050-71-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,71),(33,'1708106225087-72-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,72),(34,'1708106310486-73-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,73),(35,'1708237172317-74-Profile.png',NULL,NULL,NULL,NULL,NULL,74),(36,'1708237714998-75-rsz_luxury-house-design-top-10-tips-to-add-luxury-to-your-house-feature-compressed.jpg',NULL,NULL,NULL,NULL,NULL,75),(37,'1708238181663-76-house2.jpeg',NULL,NULL,NULL,NULL,NULL,76),(38,'1708250503760-77-night-architecture-outdoors-dusk-building-exterior-tree-grass-illuminated-generative-ai.jpg',NULL,NULL,NULL,NULL,NULL,77),(39,'1708325650551-78-101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg',NULL,NULL,NULL,NULL,NULL,78),(40,'1708409517197-79-ahsdga.png',NULL,NULL,NULL,NULL,NULL,79),(41,'1708838952887-80-istockphoto-1312439845-612x612.jpg',NULL,NULL,NULL,NULL,NULL,80),(42,'1708865926876-81-Boarding-House-interiors-013_UPStairs.jpg',NULL,NULL,NULL,NULL,NULL,81),(43,'1708866602442-82-ocs-res-life-dorm-room-california-boarding-high-school-with-modern-design-and-high-tech-accommodations-small.jpg',NULL,NULL,NULL,NULL,NULL,82),(44,'1708866897905-83-HLCResidential021-680x340.jpg',NULL,NULL,NULL,NULL,NULL,83),(45,'1708868670525-84-59726-cropped-w763-h500-of-1-FFFFFF-tam-boarding-room-1.jpg',NULL,NULL,NULL,NULL,NULL,84),(46,'1709047055812-88-HLCResidential034-680x340.jpg',NULL,NULL,NULL,NULL,NULL,88),(47,'1709137941750-89-images.jpg',NULL,NULL,NULL,NULL,NULL,89),(48,'1709138664168-90--EOSR6545-HDR.jpg',NULL,NULL,NULL,NULL,NULL,90),(49,'1709139094602-91-images (1).jpg',NULL,NULL,NULL,NULL,NULL,91),(50,'1709139765521-92-images (2).jpg',NULL,NULL,NULL,NULL,NULL,92),(51,'1709140268091-93-Chilton-Cantelo-School_008.jpg',NULL,NULL,NULL,NULL,NULL,93),(52,'1709140268097-94-Chilton-Cantelo-School_008.jpg',NULL,NULL,NULL,NULL,NULL,94),(53,'1709140790844-95-download.jpg',NULL,NULL,NULL,NULL,NULL,95),(54,'1709141491509-96-download (1).jpg',NULL,NULL,NULL,NULL,NULL,96),(55,'1709184704345-97-Hereford-Cathedral-School-dormroom-accomodation-furniture-scaled.jpg',NULL,NULL,NULL,NULL,NULL,97),(56,'1709186931734-98-Bauer-Building-2.jpg',NULL,NULL,NULL,NULL,NULL,98),(57,'1709198481074-99-download (2).jpg',NULL,NULL,NULL,NULL,NULL,99);
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
  `room_size` int DEFAULT NULL,
  `is_kitchen` tinyint DEFAULT '0',
  `available_tenants` int DEFAULT '0',
  `bath_rooms` int DEFAULT '0',
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
INSERT INTO `boarding_roomstb` VALUES (2,NULL,'specially for university students',2,_binary '0\0\0\0\0',1,NULL,NULL,0,0,0),(3,NULL,'Only For the Girls',10,NULL,2,NULL,100,1,0,2),(5,NULL,'Only For the University Boys in Science Faculty',8,NULL,3,NULL,150,1,0,5),(5,NULL,'Only For the University Boys in Science Faculty',10,NULL,4,NULL,100,1,0,5),(5,NULL,'Only For the University Boys in Science Faculty',10,NULL,5,NULL,100,1,0,5),(5,NULL,'Only For the University Boys in Science Faculty',10,NULL,6,NULL,100,1,0,5),(5,NULL,'Only For the University Boys in Science Faculty',10,NULL,7,NULL,100,1,0,5),(5,NULL,'Only For the University Boys in Science Faculty',10,NULL,8,NULL,100,1,0,5),(5,NULL,'Only For the University Boys in Science Faculty',10,NULL,9,NULL,100,1,0,5),(5,NULL,'Only For the University Boys in Science Faculty',10,NULL,10,NULL,497,1,0,5),(0,NULL,'Only the for university collage students',1,NULL,11,NULL,100,0,0,1),(0,NULL,'sdfdsgdfgf',1,NULL,12,NULL,87,0,0,1),(0,NULL,'sdfdsgdfgf',1,NULL,13,NULL,87,0,0,1),(0,NULL,'sdfdsgdfgf',1,NULL,14,NULL,87,0,0,1),(6,NULL,'Only The SCHOOL studentds',15,NULL,15,NULL,150,1,0,5),(6,NULL,'Only The SCHOOL studentds',15,NULL,16,NULL,150,1,0,5),(6,NULL,'Only The SCHOOL studentds',15,NULL,17,NULL,150,1,0,5),(6,NULL,'Only The SCHOOL studentds',15,NULL,18,NULL,150,1,0,5),(4,NULL,'We are given complete freedom for you',10,NULL,19,NULL,50,1,0,5),(4,NULL,'We are given complete freedom for you',10,NULL,20,NULL,50,1,0,5),(4,NULL,'We are given complete freedom for you',10,NULL,21,NULL,50,1,0,5),(4,NULL,'We are given complete freedom for you',10,NULL,22,NULL,50,1,0,5),(4,NULL,'We are given complete freedom for you',10,NULL,23,NULL,50,1,0,5),(0,NULL,'jshfs',1,NULL,24,NULL,100,0,0,1),(0,NULL,'sfsdf',1,NULL,25,NULL,100,0,0,1),(0,NULL,'sfsdf',1,NULL,26,NULL,100,0,0,1),(0,NULL,'sfsdf',1,NULL,27,NULL,100,0,0,1),(0,NULL,'hcgff',1,NULL,28,NULL,654,0,0,1),(0,NULL,'sfsdf',1,NULL,29,NULL,546,0,0,1),(0,NULL,'sfsdf',1,NULL,30,NULL,546,0,0,1),(0,NULL,'sfsdf',1,NULL,31,NULL,546,0,0,1),(0,NULL,'sfsdf',1,NULL,32,NULL,546,0,0,1),(0,NULL,'sfsdf',1,NULL,33,NULL,546,0,0,1),(0,NULL,'sfsdf',1,NULL,34,NULL,546,0,0,1),(0,NULL,'sfsdf',1,NULL,35,NULL,546,0,0,1),(0,NULL,'sfsdf',1,NULL,36,NULL,546,0,0,1),(3,NULL,'Completely given fully freedom to our customers',10,NULL,37,NULL,80,1,0,2),(3,NULL,'Completely given fully freedom to our customers',10,NULL,38,NULL,80,1,0,2),(3,NULL,'Completely given fully freedom to our customers',10,NULL,39,NULL,80,1,0,2),(3,NULL,'Completely given fully freedom to our customers',10,NULL,40,NULL,80,1,0,2),(3,NULL,'Completely given fully freedom to our customers',10,NULL,41,NULL,80,1,0,2),(3,NULL,'Completely given fully freedom to our customers',10,NULL,42,NULL,80,1,0,2),(3,NULL,'Completely given fully freedom to our customers',10,NULL,43,NULL,80,1,0,2),(0,NULL,'asjdvhhsad',154,NULL,44,NULL,64565,0,0,1),(0,NULL,'asjdvhhsad',154,NULL,45,NULL,64565,0,0,1),(0,NULL,'asjdvhhsad',154,NULL,46,NULL,64565,0,0,1),(0,NULL,'asjdvhhsad',154,NULL,47,NULL,64565,0,0,1),(0,NULL,'asjdvhhsad',154,NULL,48,NULL,64565,0,0,1),(3,NULL,'Specially considering the request of university student around Matara. Only for the Girls',5,NULL,49,NULL,45,1,0,2),(3,NULL,'Only  the function Boys',10,NULL,50,NULL,50,1,0,15),(3,NULL,'Only  the function Boys',10,NULL,51,NULL,50,1,0,15),(3,NULL,'Only  the function Boys',10,NULL,52,NULL,50,1,0,15),(3,NULL,'Only  the function Boys',10,NULL,53,NULL,50,1,0,15),(0,NULL,'sfdf',1,NULL,54,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,55,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,56,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,57,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,58,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,59,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,60,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,61,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,62,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,63,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,64,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,65,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,66,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,67,NULL,456,0,0,1),(0,NULL,'sfdf',1,NULL,68,NULL,456,0,0,1),(0,NULL,'dsf',1,NULL,69,NULL,438910,0,0,1),(0,NULL,'dsf',1,NULL,70,NULL,92387,0,0,1),(0,NULL,'kjfhskhsj',1,NULL,71,NULL,3235,0,0,1),(0,NULL,'kjfhskhsj',1,NULL,72,NULL,3235,0,0,1),(0,NULL,'jgug',1,NULL,73,NULL,456,0,0,1),(0,NULL,'Only For the University Boys',10,NULL,74,NULL,150,1,0,20),(5,NULL,'Only For The University Girls',10,NULL,75,NULL,75,1,0,3),(3,NULL,'Only For The University Lecturres',6,NULL,76,NULL,200,1,0,2),(2,NULL,'Only For the Tourism',6,NULL,77,NULL,150,1,0,3),(0,NULL,'jhgjgh',1,NULL,78,NULL,54,0,0,1),(0,NULL,'Only For the School Students\nOkay',5,NULL,79,NULL,100,0,0,2),(2,NULL,'We are mainly focus for the university students or school students. In here You have fully freedom. Also this is nearest place to the Kandy town.',3,NULL,80,NULL,75,1,0,1),(2,NULL,'This Boarding Room is specially for the School Students. It\'s located  nearest in the Rahula Collage Matara. This is 2nd flour of the our living house. In here we can give you fully freedom and protection.',4,NULL,81,NULL,80,1,0,2),(1,NULL,'We are Mainly focus to the University Students. We will given this room to the single student. In here He or She has fully freedom for the education. Also we can provide  food for the dinner and Lunch. For that we charged additional rupees.  ',1,NULL,82,NULL,100,0,0,1),(2,NULL,'This Boarding is Located near the Kurunagala town. In you have fully freedom and protection. We provide this room only for the two members. Please call us for the additional Deatails.',2,NULL,83,NULL,55,1,0,1),(2,NULL,'This Boarding Room is mainly focus to the university students. This one is specially for the Girls. In here we completely provided protection and freedom. Please call to us for the additional deatails.',4,NULL,84,NULL,85,1,0,2),(2,NULL,'This Boarding Room is located near the Rajarata University. We mainly focus to the Rajarata University Students. Please call us to more details.',4,NULL,88,NULL,76,1,0,1),(1,NULL,'This Boarding Room is located near the Trincomalee Mandapaya. Here we mainly focus to the university students. They have fully freedom here. Please call for the additional Deatails.',1,NULL,89,NULL,50,1,0,1),(2,NULL,'This Boarding Room is located near the South Eastern University. So we mainly focus to the university students. Please Call us to the additional Details. ',2,NULL,90,NULL,45,0,0,1),(1,NULL,'This Boarding Room is located near the Jaffna University. We mainly focus to the Jaffna University Students. Please call us to more details.',3,NULL,91,NULL,78,1,0,1),(1,NULL,'This Boarding Room is located near the Dutugamunu College Monaragala. Here we mainly focus the school students. Here we supply fully protection to them. Please call us to additional Deatails.',1,NULL,92,NULL,45,1,0,1),(2,NULL,'This Boarding Room is located near the University of Kelaniya. So here we mainly focus to university students. Please call for get the additional Deatails',2,NULL,93,NULL,50,0,0,1),(2,NULL,'This Boarding Room is located near the University of Kelaniya. So here we mainly focus to university students. Please call for get the additional Deatails',2,NULL,94,NULL,50,0,0,1),(3,NULL,'This Boarding Room is located near the Jaffna University. We mainly focus to the Jaffna University Students. Please call us to more details.',5,NULL,95,NULL,5,1,0,2),(3,NULL,'This Boarding Room is located near the Rajarata University. We mainly focus to the Rajarata University Students. Please call us to more details.\n\n',6,NULL,96,NULL,50,1,0,3),(2,NULL,'This Boarding Room is located near the Uwa wellassa University. So in here we mostly focus the university students and lectures. Please call for the additional Deatails.',2,NULL,97,NULL,80,1,0,1),(2,NULL,'This Boarding Room is located near Hambantota bus stand. We mainly given this boarding room to the school students. we can provided fully protection for them. Please call us to the additional details.',2,NULL,98,NULL,80,1,0,1),(2,NULL,'This is boarding room located near the Harankahawa Maha Viddiyalaya. So in here we mainly focus to the school students. Please call us to get more details.',3,NULL,99,NULL,85,1,0,1);
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
-- Table structure for table `notification_tb`
--

DROP TABLE IF EXISTS `notification_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification_tb` (
  `notify_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` varchar(45) NOT NULL,
  `time` varchar(45) NOT NULL,
  `mark_as_read` tinyint DEFAULT '0',
  PRIMARY KEY (`notify_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification_tb`
--

LOCK TABLES `notification_tb` WRITE;
/*!40000 ALTER TABLE `notification_tb` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification_tb` ENABLE KEYS */;
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
  `agreed_price` decimal(10,2) DEFAULT NULL,
  `advertised_price` decimal(10,2) NOT NULL,
  `agreed_date` date DEFAULT NULL,
  `incremental_amount` decimal(10,2) DEFAULT '0.00',
  `incremental_date` decimal(10,2) DEFAULT NULL,
  `post_id` int NOT NULL,
  PRIMARY KEY (`detail_id`,`post_id`),
  KEY `price_post_idx` (`post_id`),
  CONSTRAINT `price_post` FOREIGN KEY (`post_id`) REFERENCES `accommodationtb` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `price_detailstb`
--

LOCK TABLES `price_detailstb` WRITE;
/*!40000 ALTER TABLE `price_detailstb` DISABLE KEYS */;
INSERT INTO `price_detailstb` VALUES (4,NULL,5000.00,NULL,0.00,NULL,2),(5,NULL,5000.00,NULL,0.00,NULL,3),(6,NULL,5000.00,NULL,0.00,NULL,4),(7,NULL,6000.00,NULL,0.00,NULL,5),(8,NULL,6000.00,NULL,0.00,NULL,6),(9,NULL,6000.00,NULL,0.00,NULL,7),(10,NULL,6000.00,NULL,0.00,NULL,8),(11,NULL,6000.00,NULL,0.00,NULL,9),(12,NULL,6000.00,NULL,0.00,NULL,10),(13,NULL,4000.00,NULL,0.00,NULL,11),(14,NULL,234234.00,NULL,0.00,NULL,12),(15,NULL,234234.00,NULL,0.00,NULL,13),(16,NULL,234234.00,NULL,0.00,NULL,14),(17,NULL,4000.00,NULL,0.00,NULL,15),(18,NULL,4000.00,NULL,0.00,NULL,16),(19,NULL,4000.00,NULL,0.00,NULL,17),(20,NULL,4000.00,NULL,0.00,NULL,18),(21,NULL,6000.00,NULL,0.00,NULL,19),(22,NULL,6000.00,NULL,0.00,NULL,20),(23,NULL,6000.00,NULL,0.00,NULL,21),(24,NULL,6000.00,NULL,0.00,NULL,22),(25,NULL,6000.00,NULL,0.00,NULL,23),(26,NULL,499.00,NULL,0.00,NULL,24),(27,NULL,5000.00,NULL,0.00,NULL,25),(28,NULL,5000.00,NULL,0.00,NULL,26),(29,NULL,5000.00,NULL,0.00,NULL,27),(30,NULL,4545.00,NULL,0.00,NULL,28),(31,NULL,555.00,NULL,0.00,NULL,29),(32,NULL,555.00,NULL,0.00,NULL,30),(33,NULL,555.00,NULL,0.00,NULL,31),(34,NULL,555.00,NULL,0.00,NULL,32),(35,NULL,555.00,NULL,0.00,NULL,33),(36,NULL,555.00,NULL,0.00,NULL,34),(37,NULL,555.00,NULL,0.00,NULL,35),(38,NULL,555.00,NULL,0.00,NULL,36),(39,NULL,3000.00,NULL,0.00,NULL,37),(40,NULL,3000.00,NULL,0.00,NULL,38),(41,NULL,3000.00,NULL,0.00,NULL,39),(42,NULL,3000.00,NULL,0.00,NULL,40),(43,NULL,3000.00,NULL,0.00,NULL,41),(44,NULL,3000.00,NULL,0.00,NULL,42),(45,NULL,3000.00,NULL,0.00,NULL,43),(46,NULL,654653.00,NULL,0.00,NULL,44),(47,NULL,654653.00,NULL,0.00,NULL,45),(48,NULL,654653.00,NULL,0.00,NULL,46),(49,NULL,654653.00,NULL,0.00,NULL,47),(50,NULL,654653.00,NULL,0.00,NULL,48),(51,NULL,3000.00,NULL,0.00,NULL,49),(52,NULL,7000.00,NULL,0.00,NULL,50),(53,NULL,7000.00,NULL,0.00,NULL,51),(54,NULL,7000.00,NULL,0.00,NULL,52),(55,NULL,7000.00,NULL,0.00,NULL,53),(56,NULL,545.00,NULL,0.00,NULL,54),(57,NULL,545.00,NULL,0.00,NULL,55),(58,NULL,545.00,NULL,0.00,NULL,56),(59,NULL,545.00,NULL,0.00,NULL,57),(60,NULL,545.00,NULL,0.00,NULL,58),(61,NULL,545.00,NULL,0.00,NULL,59),(62,NULL,545.00,NULL,0.00,NULL,60),(63,NULL,545.00,NULL,0.00,NULL,61),(64,NULL,545.00,NULL,0.00,NULL,62),(65,NULL,545.00,NULL,0.00,NULL,63),(66,NULL,545.00,NULL,0.00,NULL,64),(67,NULL,545.00,NULL,0.00,NULL,65),(68,NULL,545.00,NULL,0.00,NULL,66),(69,NULL,545.00,NULL,0.00,NULL,67),(70,NULL,545.00,NULL,0.00,NULL,68),(71,NULL,24.00,NULL,0.00,NULL,69),(72,NULL,24.00,NULL,0.00,NULL,70),(73,NULL,23423.00,NULL,0.00,NULL,71),(74,NULL,23423.00,NULL,0.00,NULL,72),(75,NULL,44.00,NULL,0.00,NULL,73),(76,NULL,500.00,NULL,0.00,NULL,74),(77,NULL,5000.00,NULL,0.00,NULL,75),(78,NULL,10000.00,NULL,0.00,NULL,76),(79,NULL,10000.00,NULL,0.00,NULL,77),(80,NULL,76575.00,NULL,0.00,NULL,78),(81,NULL,5000.00,NULL,0.00,NULL,79),(82,NULL,6000.00,NULL,0.00,NULL,80),(83,NULL,4500.00,NULL,0.00,NULL,81),(84,NULL,10000.00,NULL,0.00,NULL,82),(85,NULL,7500.00,NULL,0.00,NULL,83),(86,NULL,5500.00,NULL,0.00,NULL,84),(90,NULL,4500.00,NULL,0.00,NULL,88),(91,NULL,7500.00,NULL,0.00,NULL,89),(92,NULL,5000.00,NULL,0.00,NULL,90),(93,NULL,6000.00,NULL,0.00,NULL,91),(94,NULL,6000.00,NULL,0.00,NULL,92),(95,NULL,8000.00,NULL,0.00,NULL,93),(96,NULL,8000.00,NULL,0.00,NULL,94),(97,NULL,5000.00,NULL,0.00,NULL,95),(98,NULL,5000.00,NULL,0.00,NULL,96),(99,NULL,9000.00,NULL,0.00,NULL,97),(100,NULL,9000.00,NULL,0.00,NULL,98),(101,NULL,6499.00,NULL,0.00,NULL,99);
/*!40000 ALTER TABLE `price_detailstb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registrationtb`
--

DROP TABLE IF EXISTS `registrationtb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registrationtb` (
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `Role` varchar(10) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrationtb`
--

LOCK TABLES `registrationtb` WRITE;
/*!40000 ALTER TABLE `registrationtb` DISABLE KEYS */;
INSERT INTO `registrationtb` VALUES ('abcd@gmail.com','$2b$10$xtNDXRp.ht4qbA33jqu33uzB83qMtuhBP.A9hpD/Wlkxwu44XrSM2','tenant'),('admin5@gmail.com','$2b$10$Zlw1g4raaZlEFXYr/6hmA.Kfl/QnkSwlPGqWot4kxfCJm7MlhUyJW','admin'),('ashan@email.com','11684','tenant'),('ashan99@gmail.com','$2b$10$VWUbCY7dBL.fhl9kcLe2IueQ7uFbnS.g1PZouMLLRmWtvfcXKOMl6',''),('banuka@email.com','11114','owner'),('bhanuka98@gmail.com','$2b$10$Co4s6pZ.srM698gqQjqkBuIaZHqy2exq8bGlv8c.oAYjzf5nR6wE.','owner'),('epashan98@gmail.com','$2b$10$r9I/MTYclK5Zar2duMabH.cBNp2x2sImr1ild02DaZiLmVyKAUphe','owner'),('epbhanuka98@gmail.com','$2b$10$KVSvv2ilsgTx/aAtjeG8ROHJxP/3jQW/dNYN.yq5XEqnN8qIY7v/a','tenant'),('sadun@email.com','11114','admin'),('test@gmail.com','$2b$10$aZ2zgUxU/sGfqXVItHKcM.XbSrsWxBePzOz5sqEV3/RsmyCe9QzJO','tenant');
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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) NOT NULL,
  `Status` int DEFAULT '1',
  `Loginflag` int DEFAULT '0',
  `Password` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Bhanuka',1,0,'$2a$10$KTtoAQxK30Aw06TUwCC/N.p4.jmBy4W70gIb2GiGkQU85QEjdVsSi','epbhanuka98@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
  PRIMARY KEY (`user_id`)
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

-- Dump completed on 2024-03-01 17:07:15
