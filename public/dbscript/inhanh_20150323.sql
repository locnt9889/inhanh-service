-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2015 at 07:48 PM
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `access_token`
--

INSERT INTO `access_token` (`id`, `user_id`, `device_token`, `access_token`, `login_time`, `logout_time`, `islogin`, `isactive`) VALUES
(1, 1, '', '79107c40-c806-11e4-8413-2f8026cfe2db', '2015-03-11 15:51:25', '0000-00-00 00:00:00', 1, 1),
(2, 5, '11-ww-ss-22-ss-ss', '5429ae90-cccc-11e4-93d4-f7db5a15e4cc', '2015-03-17 17:37:49', '0000-00-00 00:00:00', 1, 1),
(3, 6, '11-ww-ss-22-ss-ss', 'c4edad50-d0bb-11e4-a9ed-a1ea2ad327f3', '2015-03-22 17:49:21', '0000-00-00 00:00:00', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE IF NOT EXISTS `account` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `username` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `type` varchar(256) NOT NULL,
  `group_id` int(11) NOT NULL,
  `group_mode` varchar(1024) NOT NULL,
  `firstname` varchar(1024) NOT NULL,
  `lastname` varchar(1024) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `idcard` varchar(256) NOT NULL,
  `idcard_date` date NOT NULL,
  `idcard_address` varchar(1024) NOT NULL,
  `title` varchar(1024) NOT NULL,
  `desc` varchar(10000) NOT NULL,
  `address` varchar(1024) NOT NULL,
  `city_id` int(11) NOT NULL DEFAULT '0',
  `created_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modified_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `isreview` tinyint(1) NOT NULL,
  `isactive` tinyint(1) NOT NULL,
  `isupdate` tinyint(4) NOT NULL,
  `is_map_default` tinyint(4) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `avatar_url` varchar(1024) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `email`, `type`, `group_id`, `group_mode`, `firstname`, `lastname`, `phone`, `birthday`, `idcard`, `idcard_date`, `idcard_address`, `title`, `desc`, `address`, `city_id`, `created_time`, `modified_time`, `isreview`, `isactive`, `isupdate`, `is_map_default`, `latitude`, `longitude`, `avatar_url`) VALUES
(1, 'locnt1122', '25d55ad283aa400af464c76d713c07ad', '', 'SHIPPER', 0, '', '', '', '', '2015-03-11', '', '2015-03-11', '', '', '', '', 0, '2015-03-11 15:51:06', '2015-03-11 15:51:06', 0, 1, 0, 1, 0, 0, ''),
(2, 'shipperlocnt1', '25d55ad283aa400af464c76d713c07ad', '', 'SHIPPER', 0, '', 'nguyen', 'tien loc', '', '0000-00-00', '', '0000-00-00', '', '', '', '', 0, '0000-00-00 00:00:00', '2015-03-17 17:40:51', 0, 1, 0, 0, 0, 0, ''),
(3, 'shipperlocnt2', '25d55ad283aa400af464c76d713c07ad', 'shipperlocnt1@gmail.com', 'SHIPPER', 0, '', 'nguyen', 'van nam', '', '2015-03-18', '', '2015-03-18', '', '', '', '', 0, '2015-03-17 17:34:18', '2015-03-17 17:35:04', 0, 1, 0, 1, 0, 0, ''),
(4, 'shopperlocnt1', '25d55ad283aa400af464c76d713c07ad', 'shopperlocnt1@gmail.com', 'SHOPPER', 0, '', 'nguyen', 'manh hai', '', '2015-03-18', '', '2015-03-18', '', '', '', '', 0, '2015-03-17 17:35:30', '2015-03-17 17:36:01', 0, 1, 0, 1, 0, 0, ''),
(5, 'shopperlocnt2', '25d55ad283aa400af464c76d713c07ad', 'shopperlocnt2@gmail.com', 'SHOPPER', 0, '', 'tran', 'van long', '', '2015-03-18', '', '2015-03-18', '', '', '', '', 0, '2015-03-17 17:36:24', '2015-03-17 17:37:25', 0, 1, 0, 1, 0, 0, ''),
(6, 'nevergone', '25d55ad283aa400af464c76d713c07ad', 'nevergone9889@gnai.com', 'ADMIN', 0, '', '', '', '', '2015-03-23', '', '2015-03-23', '', '', '', '', 0, '2015-03-22 17:49:10', '2015-03-22 17:49:10', 0, 1, 0, 1, 0, 0, '');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`city_id`, `city_name`, `city_code`, `country_id`, `isactive`) VALUES
(1, 'Hà Nội', '4', 1, 1),
(2, 'Hồ Chí Minh', '8', 1, 1),
(3, 'Đà Nẵng', '511', 1, 1),
(4, 'Hải Phòng', '31', 1, 1),
(5, 'Hưng Yên', '321', 1, 1),
(6, 'Hải Dương', '320', 1, 1),
(7, 'Vĩnh Phúc', '211', 1, 1),
(8, 'Bắc Ninh', '241', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE IF NOT EXISTS `country` (
  `country_id` int(11) NOT NULL AUTO_INCREMENT,
  `country_name` varchar(1024) NOT NULL,
  `country_code` varchar(1024) NOT NULL,
  `currency` varchar(256) NOT NULL,
  `isactive` tinyint(1) NOT NULL,
  PRIMARY KEY (`country_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `country_name`, `country_code`, `currency`, `isactive`) VALUES
(1, 'Việt Nam', 'VN', 'VNĐ', 1),
(2, 'United Kingdom', 'GB', '', 1),
(3, 'United States', 'US', '', 1);

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `district`
--

INSERT INTO `district` (`district_id`, `district_name`, `city_id`, `isactive`) VALUES
(1, 'ww', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE IF NOT EXISTS `order_detail` (
  `order_id` int(8) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `title` varchar(1024) NOT NULL,
  `desc` varchar(10000) NOT NULL,
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
  `currency` varchar(55) NOT NULL DEFAULT 'VND',
  `shipper_id` int(11) NOT NULL DEFAULT '0',
  `status` varchar(255) NOT NULL DEFAULT 'NEW',
  `isactive` tinyint(4) NOT NULL,
  `isupdate` tinyint(1) NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modifed_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`order_id`, `user_id`, `title`, `desc`, `author_phone`, `author_address`, `author_ismap`, `author_map_latitude`, `author_map_longitude`, `city_code`, `order_date`, `order_date_expired`, `order_time_expect`, `type`, `transportation`, `weight`, `price`, `receiver_name`, `receiver_phone`, `receiver_address`, `receiver_ismap`, `receiver_map_latitude`, `receiver_map_logitude`, `currency`, `shipper_id`, `status`, `isactive`, `isupdate`, `created_time`, `modifed_time`) VALUES
(1, 1, 'order 1', 'description', '12345678', 'nghệ an', 1, 123.3, 2323.6, 'Vinh', '2015-03-10 17:00:00', '2015-03-17 17:00:00', '2 ngày', 'type', 'oto', '>10kg', 500, 'receiver_name', 'receiver_phone', 'receiver_address', 1, 123123000, 3232320, 'VND', 0, 'NEW', 1, -1, '2015-03-10 17:00:00', '2015-03-24 17:00:00'),
(2, 1, 'order 1111', 'description111', '12345678111', 'nghệ an111', 0, 123.311, 2323.61, 'Vinh1111', '2011-01-10 17:00:00', '2012-02-21 17:00:00', '3 ngày111', 'type1111', 'oto1111', '>110kg', 50011, 'receiver_name1111', 'receiver_phone1111', 'receiver_address1111', 0, 123123000000, 32323200000, 'VND', 2, 'SHIPPING', 1, 1, '2015-03-11 16:14:38', '2015-03-22 17:34:26'),
(3, 1, 'order 1', 'description', '12345678', 'nghệ an', 1, 123.3, 2323.6, 'Vinh', '2015-03-09 17:00:00', '2015-03-16 17:00:00', '2 ngày', 'type', 'oto', '>10kg', 500, 'receiver_name', 'receiver_phone', 'receiver_address', 1, 123123000, 3232320, 'VND', 0, 'NEW', 1, 0, '2015-03-11 16:55:15', '2015-03-11 16:55:15'),
(4, 5, 'order 1', '', '12345678', 'nghệ an', 1, 123.3, 2323.6, 'Vinh', '2015-03-09 17:00:00', '2015-03-16 17:00:00', '2 ngày', 'type', 'oto', '>10kg', 500, 'receiver_name', 'receiver_phone', 'receiver_address', 1, 123123000, 3232320, 'USD', 0, 'NEW', 1, 0, '2015-03-22 17:33:51', '2015-03-22 17:33:51');

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
  `created_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modified_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
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

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE IF NOT EXISTS `test` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(355) NOT NULL,
  `lastname` varchar(345) NOT NULL,
  `username` varchar(345) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `firstname`, `lastname`, `username`) VALUES
(1, 'Nguyễn', 'Tiến Lộc', 'locnt'),
(2, 'Nguyen', 'Thi Thu Trang', 'trangntt');

-- --------------------------------------------------------

--
-- Table structure for table `user_contact`
--

CREATE TABLE IF NOT EXISTS `user_contact` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `contact_id` int(11) NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `isactive` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `user_contact`
--

INSERT INTO `user_contact` (`id`, `user_id`, `contact_id`, `created_time`, `isactive`) VALUES
(7, 5, 1, '2015-03-17 19:47:20', 0),
(8, 5, 2, '2015-03-17 19:53:16', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
