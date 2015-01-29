-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2015 at 07:59 AM
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
-- Table structure for table `access_token`
--

CREATE TABLE IF NOT EXISTS `access_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `device_token` varchar(1024) NOT NULL,
  `access_token` varchar(1024) NOT NULL,
  `login_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `logout_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `islogin` tinyint(4) NOT NULL,
  `isactive` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `access_token`
--

INSERT INTO `access_token` (`id`, `user_id`, `device_token`, `access_token`, `login_time`, `logout_time`, `islogin`, `isactive`) VALUES
(1, 4, '0f400140-a57f-11e4-ba8d-6b1c5904905f', '', '2015-01-26 10:16:26', '0000-00-00 00:00:00', 1, 0),
(2, 4, 'nevergone9889', 'd1be3250-a57f-11e4-ab40-8f6673038479', '2015-01-26 10:21:53', '0000-00-00 00:00:00', 1, 0),
(3, 4, 'nevergone9889', 'd1447900-a580-11e4-9ad0-2fc6ce0708e8', '2015-01-26 10:29:01', '0000-00-00 00:00:00', 1, 0),
(4, 4, 'nevergone9889', '520f34d0-a581-11e4-918e-d170ad785a07', '2015-01-26 10:32:37', '0000-00-00 00:00:00', 0, 1),
(5, 4, 'nevergone9889789989', '5cb22320-a581-11e4-918e-d170ad785a07', '2015-01-26 10:32:55', '0000-00-00 00:00:00', 1, 0),
(6, 4, 'nevergone9889789989', 'ab1ac4e0-a581-11e4-8ea7-a73c2cac593a', '2015-01-26 10:35:07', '0000-00-00 00:00:00', 1, 1);

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
  `idcard_address` varchar(1024) NOT NULL,
  `type` varchar(256) NOT NULL,
  `address` varchar(1024) NOT NULL,
  `city_code` varchar(1024) NOT NULL,
  `group` varchar(1024) NOT NULL,
  `isreview` tinyint(1) NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isactive` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `email`, `phone`, `birthday`, `idcard`, `idcard_date`, `idcard_address`, `type`, `address`, `city_code`, `group`, `isreview`, `created_time`, `modified_time`, `isactive`) VALUES
(1, 'locnt', '12345678', 'locnt@gmail.com', '0963739889', '1989-08-09', '186757067', '2014-11-30', 'Nghệ An', 'ADMIN', 'Khương Trung - Thanh Xuân', 'HN', 'Administrator', 1, '2015-01-23 03:15:48', '2015-01-23 03:15:48', 1),
(2, 'locnt3', '123456789', 'never@gmail.com', '0987654321', '1989-11-12', '888888888', '2011-05-30', 'Nghệ An', 'SHOPPER', 'Vương Thừa Vũ - Thanh Xuân', 'HN', 'Shoppers', 1, '2015-01-23 04:07:24', '2015-01-27 06:14:25', 1),
(3, 'never1', '123456789', 'never1@gmail.com', '', '0000-00-00', '', '0000-00-00', '', 'SHOPPER', '', '', '', 0, '2015-01-26 04:07:32', '2015-01-26 04:07:32', 1),
(4, 'never2', 'qwertyuiop', 'nedasdver2@gmail.com', '0987654321', '1989-11-12', '888888888', '2011-05-30', 'Nghệ An', 'SHOPPER', 'Vương Thừa Vũ - Thanh Xuân', 'HN', 'Shoppers', 0, '2015-01-26 04:31:01', '2015-01-29 04:32:10', 1);

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
