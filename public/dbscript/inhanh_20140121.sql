-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2015 at 12:02 PM
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
-- Table structure for table `account`
--

CREATE TABLE IF NOT EXISTS `account` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `username` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `idcard` varchar(256) NOT NULL,
  `idcard_date` date NOT NULL,
  `type` varchar(256) NOT NULL,
  `address` varchar(1024) NOT NULL,
  `city_code` varchar(1024) NOT NULL,
  `group` varchar(1024) NOT NULL,
  `isreview` tinyint(1) NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isactive` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE IF NOT EXISTS `city` (
  `city_id` int(11) NOT NULL AUTO_INCREMENT,
  `city_name` varchar(1024) NOT NULL,
  `city_code` varchar(256) NOT NULL,
  `country_id` int(11) NOT NULL,
  `isactive` tinyint(1) NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE IF NOT EXISTS `country` (
  `country_id` int(11) NOT NULL AUTO_INCREMENT,
  `country_name` varchar(1024) NOT NULL,
  `currency` varchar(256) NOT NULL,
  `isactive` tinyint(1) NOT NULL,
  PRIMARY KEY (`country_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

CREATE TABLE IF NOT EXISTS `district` (
  `district_id` int(11) NOT NULL AUTO_INCREMENT,
  `district_name` varchar(1024) NOT NULL,
  `city_id` int(11) NOT NULL,
  `isactive` tinyint(4) NOT NULL,
  PRIMARY KEY (`district_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE IF NOT EXISTS `order_detail` (
  `order_id` int(8) NOT NULL AUTO_INCREMENT,
  `order_code` varchar(255) NOT NULL,
  `address_sender` varchar(1024) NOT NULL,
  `phone_sender` varchar(256) NOT NULL,
  `address_receiver` varchar(1024) NOT NULL,
  `phone_receiver` varchar(256) NOT NULL,
  `name_reciever` varchar(1024) NOT NULL,
  `ship_cost` double NOT NULL,
  `currency_code` int(255) DEFAULT '0',
  `ship_dealline` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isactive` tinyint(4) NOT NULL,
  `status` int(11) NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modifed_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `order_value` varchar(1024) NOT NULL,
  `shoper_id` int(8) NOT NULL,
  `order_description` varchar(1024) NOT NULL,
  `order_note` varchar(1024) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `order_ship`
--

CREATE TABLE IF NOT EXISTS `order_ship` (
  `order_ship_id` int(8) NOT NULL AUTO_INCREMENT,
  `order_id` int(8) NOT NULL,
  `shiper_id` int(8) NOT NULL,
  `ship_cost` double NOT NULL,
  `order_type` varchar(256) NOT NULL,
  `status` int(8) NOT NULL,
  `rate` int(11) NOT NULL,
  `isactive` tinyint(1) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `comment` varchar(10000) NOT NULL,
  PRIMARY KEY (`order_ship_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `order_status`
--

CREATE TABLE IF NOT EXISTS `order_status` (
  `status_id` int(8) NOT NULL AUTO_INCREMENT,
  `status_name` varchar(256) NOT NULL,
  `isactive` tinyint(1) NOT NULL,
  `status_type` varchar(256) NOT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE IF NOT EXISTS `person` (
  `person_id` int(11) NOT NULL AUTO_INCREMENT,
  `person_name` varchar(1024) NOT NULL,
  `email` varchar(256) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isactive` tinyint(4) NOT NULL,
  PRIMARY KEY (`person_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`person_id`, `person_name`, `email`, `created_date`, `isactive`) VALUES
(1, 'locnt81111119', 'locnt891@gmail.com', '2015-01-21 10:35:10', 1),
(13, 'hello', 'sdas@gmail.com', '2015-01-21 08:32:13', 1),
(14, 'locnt81111119', 'locnt891@gmail.com', '2015-01-21 08:35:05', 1),
(15, 'locnt81111119', 'locnt891@gmail.com', '2015-01-21 09:23:31', 0),
(16, 'locnt81111119', 'locnt891@gmail.com', '2015-01-21 09:24:08', 0),
(17, 'locnt81111119', 'locnt891@gmail.com', '2015-01-21 09:16:04', 0),
(18, 'sdasdasd', 'dasdasdsadsadasdas', '2015-01-21 10:20:18', 0),
(19, 'dasd', 'adsadasdsa', '2015-01-21 10:20:35', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
