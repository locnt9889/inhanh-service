-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2015 at 05:19 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `inhanh`
--

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE IF NOT EXISTS `order_detail` (
  `order_id` int(8) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `title` varchar(1024) NOT NULL,
  `description` varchar(10000) NOT NULL,
  `author_phone` varchar(255) NOT NULL,
  `author_address` varchar(1024) NOT NULL,
  `author_ismap` tinyint(1) NOT NULL,
  `author_map_latitude` float NOT NULL,
  `author_map_longitude` float NOT NULL,
  `city_code` varchar(255) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `order_date_expired` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `order_time_expect` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `transportation` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `receiver_name` varchar(1024) NOT NULL,
  `receiver_phone` varchar(255) NOT NULL,
  `receiver_address` varchar(1024) NOT NULL,
  `receiver_ismap` tinyint(1) NOT NULL,
  `receiver_map_latitude` float NOT NULL,
  `receiver_map_logitude` float NOT NULL,
  `isactive` tinyint(4) NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modifed_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
