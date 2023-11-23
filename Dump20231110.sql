CREATE DATABASE  IF NOT EXISTS `movie_database` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `movie_database`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: movie_database
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `actors`
--

DROP TABLE IF EXISTS `actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actors` (
  `actor_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `date_of_birth` date NOT NULL,
  `awards` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `movie_id` int NOT NULL,
  PRIMARY KEY (`actor_id`),
  KEY `movie_id` (`movie_id`),
  CONSTRAINT `actors_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors`
--

LOCK TABLES `actors` WRITE;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
INSERT INTO `actors` VALUES (1,'Sam Neill','1947-09-14','0 Academy Awards','Male','New Zealander',1),(2,'John Travolta','1954-02-18','0 Academy Awards','Male','American',2),(3,'Leonardo DiCaprio','1974-11-11','1 Academy Award','Male','American',3),(4,'Saoirse Ronan','1994-04-12','0 Academy Awards','Female','Irish',4),(5,'Song Kang-ho','1967-01-17','0 Academy Awards','Male','South Korean',5),(6,'David Oyelowo','1976-04-01','0 Academy Awards','Male','British',6),(7,'Robert De Niro','1943-08-17','2 Academy Awards','Male','American',7),(8,'Yalitza Aparicio','1993-12-11','0 Academy Awards','Female','Mexican',8),(9,'Matt Damon','1970-10-08','1 Academy Award','Male','American',9),(10,'Jeremy Renner','1971-01-07','0 Academy Awards','Male','American',10),(11,'Edward Norton','1969-08-18','0 Academy Awards','Male','American',11),(12,'Scarlett Johansson','1984-11-22','0 Academy Awards','Female','American',12),(13,'Whoopi Goldberg','1955-11-13','1 Academy Award','Female','American',13),(14,'Suraj Sharma','1993-03-21','0 Academy Awards','Male','Indian',14),(15,'Spike Lee','1957-03-20','1 Academy Award','Male','American',15),(16,'Russell Crowe','1964-04-07','1 Academy Award','Male','New Zealander',16),(17,'Mahershala Ali','1974-02-16','2 Academy Awards','Male','American',17),(18,'Holly Hunter','1958-03-20','1 Academy Award','Female','American',18),(19,'Josh Brolin','1968-02-12','0 Academy Awards','Male','American',19),(20,'Frances McDormand','1957-06-23','2 Academy Awards','Female','American',20);
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crew`
--

DROP TABLE IF EXISTS `crew`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crew` (
  `crew_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `awards` varchar(255) DEFAULT NULL,
  `movie_id` int NOT NULL,
  PRIMARY KEY (`crew_id`),
  KEY `movie_id` (`movie_id`),
  CONSTRAINT `crew_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crew`
--

LOCK TABLES `crew` WRITE;
/*!40000 ALTER TABLE `crew` DISABLE KEYS */;
INSERT INTO `crew` VALUES (1,'Ang Lee','2 Academy Awards',13),(2,'Spike Lee','1 Academy Award',14),(3,'John Seale','1 Academy Award',15),(4,'James Laxton','0 Academy Awards',16),(5,'Janusz Kami?ski','2 Academy Awards',17),(6,'Jan Chapman','0 Academy Awards',18),(7,'Ethan Coen','4 Academy Awards',19),(8,'Joel Coen','4 Academy Awards',20);
/*!40000 ALTER TABLE `crew` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dir_acts`
--

DROP TABLE IF EXISTS `dir_acts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dir_acts` (
  `director_id` int NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`director_id`,`role`),
  CONSTRAINT `dir_acts_ibfk_1` FOREIGN KEY (`director_id`) REFERENCES `directors` (`director_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dir_acts`
--

LOCK TABLES `dir_acts` WRITE;
/*!40000 ALTER TABLE `dir_acts` DISABLE KEYS */;
INSERT INTO `dir_acts` VALUES (1,'Director'),(2,'Director'),(3,'Director'),(4,'Director'),(5,'Director'),(6,'Director'),(7,'Director'),(8,'Director'),(9,'Director'),(10,'Director'),(11,'Director'),(12,'Director'),(13,'Director'),(14,'Director'),(15,'Director'),(16,'Director'),(17,'Director'),(18,'Director'),(19,'Director'),(20,'Director');
/*!40000 ALTER TABLE `dir_acts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `directors`
--

DROP TABLE IF EXISTS `directors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `directors` (
  `director_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `date_of_birth` date NOT NULL,
  `awards` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`director_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `directors`
--

LOCK TABLES `directors` WRITE;
/*!40000 ALTER TABLE `directors` DISABLE KEYS */;
INSERT INTO `directors` VALUES (1,'Steven Spielberg','1946-12-18','3 Academy Awards','Male','American'),(2,'Quentin Tarantino','1963-03-27','2 Academy Awards','Male','American'),(3,'Christopher Nolan','1970-07-30','1 Academy Award','Male','British'),(4,'Greta Gerwig','1983-08-04','1 Academy Award','Female','American'),(5,'Bong Joon-ho','1969-09-14','4 Academy Awards','Male','South Korean'),(6,'Ava DuVernay','1972-08-24','1 Academy Award','Female','American'),(7,'Martin Scorsese','1942-11-17','1 Academy Award','Male','American'),(8,'Alfonso Cuarón','1961-11-28','2 Academy Awards','Male','Mexican'),(9,'Gus Van Sant','1952-07-24','1 Academy Award','Male','American'),(10,'Kathryn Bigelow','1951-11-27','2 Academy Awards','Female','American'),(11,'David Fincher','1962-08-28','0 Academy Awards','Male','American'),(12,'Sofia Coppola','1971-05-14','1 Academy Award','Female','American'),(13,'Quincy Jones','1933-03-14','1 Academy Award','Male','American'),(14,'Ang Lee','1954-10-23','2 Academy Awards','Male','Taiwanese'),(15,'Spike Lee','1957-03-20','1 Academy Award','Male','American'),(16,'Ridley Scott','1937-11-30','1 Academy Award','Male','British'),(17,'Barry Jenkins','1979-11-19','1 Academy Award','Male','American'),(18,'Jane Campion','1954-04-30','1 Academy Award','Female','New Zealander'),(19,'Joel Coen','1954-11-29','4 Academy Awards','Male','American'),(20,'Ethan Coen','1957-09-21','4 Academy Awards','Male','American');
/*!40000 ALTER TABLE `directors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `movie_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `release_date` date NOT NULL,
  `runtime` int NOT NULL,
  `genre` varchar(255) NOT NULL,
  `budget` int DEFAULT NULL,
  `revenue` int DEFAULT NULL,
  `rating` float NOT NULL,
  `director_id` int NOT NULL,
  PRIMARY KEY (`movie_id`),
  KEY `director_id` (`director_id`),
  CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`director_id`) REFERENCES `directors` (`director_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Jurassic Park','1993-06-11',127,'Science Fiction',63000000,1049723641,8.1,1),(2,'Pulp Fiction','1994-10-14',154,'Crime',8000000,214179088,8.9,2),(3,'Inception','2010-07-16',148,'Science Fiction',160000000,829895144,8.8,3),(4,'Lady Bird','2017-11-03',94,'Drama',10000000,79180947,7.4,4),(5,'Parasite','2019-10-11',132,'Thriller',11400000,258817992,8.6,5),(6,'Selma','2014-12-25',128,'Drama',20000000,66821036,7.5,6),(7,'The Irishman','2019-11-01',209,'Crime',159000000,113188378,7.8,7),(8,'Roma','2018-12-21',135,'Drama',15000000,20493409,7.7,8),(9,'Good Will Hunting','1997-01-09',126,'Drama',10000000,225933435,8.3,9),(10,'The Hurt Locker','2008-09-04',131,'War',15000000,49623450,7.5,10),(11,'Fight Club','1999-10-15',139,'Drama',63000000,100853753,8.8,11),(12,'Lost in Translation','2003-09-12',102,'Drama',4000000,119723856,7.7,12),(13,'The Color Purple','1985-02-07',154,'Drama',15000000,14629229,7.8,13),(14,'Life of Pi','2012-11-21',127,'Adventure',120000000,609016565,7.9,14),(15,'Do the Right Thing','1989-06-30',120,'Drama',6000000,37536959,7.9,15),(16,'Gladiator','2000-05-05',155,'Action',103000000,457640427,8.5,16),(17,'Moonlight','2016-10-21',111,'Drama',1500000,65245512,7.4,17),(18,'The Piano','1993-05-15',121,'Drama',7000000,14009306,7.6,18),(19,'No Country for Old Men','2007-11-21',122,'Crime',25000000,171627166,8.1,19),(20,'Fargo','1996-03-08',98,'Crime',7000000,60586611,8.1,20);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producers`
--

DROP TABLE IF EXISTS `producers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producers` (
  `producer_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `date_of_birth` date NOT NULL,
  `awards` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `movie_id` int NOT NULL,
  PRIMARY KEY (`producer_id`),
  KEY `movie_id` (`movie_id`),
  CONSTRAINT `producers_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producers`
--

LOCK TABLES `producers` WRITE;
/*!40000 ALTER TABLE `producers` DISABLE KEYS */;
INSERT INTO `producers` VALUES (1,'Kathleen Kennedy','1953-06-05','2 Academy Awards','Female','American',1),(2,'Lawrence Bender','1957-10-17','0 Academy Awards','Male','American',2),(3,'Emma Thomas','1971-12-14','1 Academy Award','Female','British',3),(4,'Eli Bush','1984-06-02','0 Academy Awards','Male','American',4),(5,'Bong Joon-ho','1969-09-14','4 Academy Awards','Male','South Korean',5),(6,'Ava DuVernay','1972-08-24','1 Academy Award','Female','American',6),(7,'Martin Scorsese','1942-11-17','1 Academy Award','Male','American',7),(8,'Alfonso Cuarón','1961-11-28','2 Academy Awards','Male','Mexican',8),(9,'Gus Van Sant','1952-07-24','1 Academy Award','Male','American',9),(10,'Kathryn Bigelow','1951-11-27','2 Academy Awards','Female','American',10),(11,'David Fincher','1962-08-28','0 Academy Awards','Male','American',11),(12,'Sofia Coppola','1971-05-14','1 Academy Award','Female','American',12),(13,'Quincy Jones','1933-03-14','1 Academy Award','Male','American',13),(14,'Ang Lee','1954-10-23','2 Academy Awards','Male','Taiwanese',14),(15,'Spike Lee','1957-03-20','1 Academy Award','Male','American',15),(16,'Ridley Scott','1937-11-30','1 Academy Award','Male','British',16),(17,'Barry Jenkins','1979-11-19','1 Academy Award','Male','American',17),(18,'Jane Campion','1954-04-30','1 Academy Award','Female','New Zealander',18),(19,'Joel Coen','1954-11-29','4 Academy Awards','Male','American',19),(20,'Ethan Coen','1957-09-21','4 Academy Awards','Male','American',20);
/*!40000 ALTER TABLE `producers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int NOT NULL,
  `user_id` int NOT NULL,
  `rating` float NOT NULL,
  `review_text` text,
  `date_of_review` date NOT NULL,
  PRIMARY KEY (`review_id`),
  KEY `movie_id` (`movie_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (21,1,1,9,'Classic Spielberg film!','2023-10-15'),(22,2,2,8.5,'Tarantino is a masterpiece!','2023-10-20'),(23,3,3,9.2,'Mind bending Nolan flick!','2023-10-25'),(24,4,4,7.8,'Touching coming of age story.','2023-10-30'),(25,5,5,8.6,'Parasite is a must watch ','2023-11-05'),(26,6,1,7.4,'Powerful civil rights drama.','2023-11-10'),(27,7,2,7.8,'Epic mobster saga','2023-11-15'),(28,8,3,7.7,'Roma is a visual beauty!','2023-11-20'),(29,9,4,8.3,'A math genius story.','2023-11-25'),(30,10,5,7.5,'Intense war drama.','2023-11-30'),(31,11,1,8.8,'Fight Club is mind-blowing!','2023-12-05'),(32,12,2,7.7,'Lost in Translation','2023-12-10'),(33,13,3,7.8,'The Color Purple','2023-12-15'),(34,14,4,7.9,'Life of Pi adventure!','2023-12-20'),(35,15,5,7.9,'Do the Right Thing','2023-12-25'),(36,16,1,8.5,'Gladiator is epic!','2023-12-30'),(37,17,2,7.4,'Moonlight is powerful.','2024-01-05'),(38,18,3,7.6,'The Piano is a classic.','2024-01-10'),(39,19,4,8.1,'No Country for Old Men','2024-01-15'),(40,20,5,8.1,'Fargo is a dark gem.','2024-01-20');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'User1','user1password'),(2,'User2','user2password'),(3,'User3','user3password'),(4,'User4','user4password'),(5,'User5','user5password');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-10 12:26:42
