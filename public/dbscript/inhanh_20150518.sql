-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2015 at 06:35 PM
-- Server version: 5.6.24
-- PHP Version: 5.5.24

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
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_type` varchar(255) NOT NULL,
  `device_token` varchar(1024) NOT NULL,
  `access_token` varchar(1024) NOT NULL,
  `login_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `logout_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `islogin` tinyint(4) NOT NULL,
  `isactive` tinyint(4) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=856 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE IF NOT EXISTS `account` (
  `id` int(8) NOT NULL,
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
  `has_avatar` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `email`, `type`, `group_id`, `group_mode`, `firstname`, `lastname`, `phone`, `birthday`, `idcard`, `idcard_date`, `idcard_address`, `title`, `desc`, `address`, `city_id`, `created_time`, `modified_time`, `isreview`, `isactive`, `isupdate`, `is_map_default`, `latitude`, `longitude`, `has_avatar`) VALUES
(1, 'locnt', '25d55ad283aa400af464c76d713c07ad', '', 'SHIPPER', 0, '', '', '', '', '2015-03-11', '', '2015-03-11', '', '', '', '', 0, '2015-03-11 17:09:01', '2015-05-14 16:49:36', 0, 1, 0, 1, 0, 0, 1),
(5, 'thuannd', '14e1b600b1fd579f47433b88e8d85291', 'thuannd@gmail.com', '', 0, '', 'Nguyen', 'Duc Thuan', '0169 315 0513', '1990-10-05', '', '2015-02-10', '', 'áo dài xuân', 'Miêu tả', 'Cau Giay321', 1, '2015-02-11 04:22:38', '2015-04-07 09:43:47', 0, 1, 1, 0, 0, 0, 0),
(12, 'thuannd1', '14e1b600b1fd579f47433b88e8d85291', 'thuannd1@gmail.com', 'SHOPPER', 0, '', '', '', '', '2015-03-20', '', '2015-03-20', '', '', '', '', 0, '2015-03-20 04:03:37', '2015-03-20 04:03:37', 0, 1, 0, 1, 0, 0, 0),
(13, 'loczon1', '14e1b600b1fd579f47433b88e8d85291', 'zon1@gmail.com', 'SHOPPER', 0, '', '', '', '', '2015-04-01', '', '2015-04-01', '', '', '', '', 0, '2015-04-01 17:29:25', '2015-04-01 17:29:25', 0, 1, 0, 1, 0, 0, 0),
(14, 'thuannd2', 'd9b1d7db4cd6e70935368a1efb10e377', 'thuannd2@gmail.com', 'SHOPPER', 0, '', '', '', '', '2015-04-09', '', '2015-04-09', '', '', '', '', 0, '2015-04-09 16:28:35', '2015-04-09 16:28:35', 0, 1, 0, 1, 0, 0, 0),
(15, 'thuannd123', '14e1b600b1fd579f47433b88e8d85291', 'thuannd123@gmail.com', 'SHOPPER', 0, '', '', '', '', '2015-04-09', '', '2015-04-09', '', '', '', '', 0, '2015-04-09 16:32:30', '2015-04-09 16:47:54', 0, 1, 0, 1, 0, 0, 0),
(16, 'thuannd6528', '14e1b600b1fd579f47433b88e8d85291', 'thuannd6528@gmail.com', 'SHOPPER', 0, '', '', '', '', '2015-05-04', '', '2015-05-04', '', '', '', '', 0, '2015-05-04 16:32:22', '2015-05-04 16:32:22', 0, 1, 0, 1, 0, 0, 0),
(17, 'locnt9889', '25d55ad283aa400af464c76d713c07ad', '', 'SHOPPER', 0, '', '', '', '', '2015-03-11', '', '2015-03-11', '', '', '', '', 0, '2015-03-11 17:09:01', '2015-05-14 16:49:36', 0, 1, 0, 1, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE IF NOT EXISTS `city` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(1024) NOT NULL,
  `city_code` varchar(256) NOT NULL,
  `country_id` int(11) NOT NULL,
  `isactive` tinyint(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

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
  `country_id` int(11) NOT NULL,
  `country_name` varchar(1024) NOT NULL,
  `country_code` varchar(1024) NOT NULL,
  `currency` varchar(256) NOT NULL,
  `isactive` tinyint(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

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
  `district_id` int(11) NOT NULL,
  `district_name` varchar(1024) NOT NULL,
  `city_id` int(11) NOT NULL,
  `isactive` tinyint(4) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

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
  `order_id` int(8) NOT NULL,
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
  `modifed_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`order_id`, `user_id`, `title`, `desc`, `author_phone`, `author_address`, `author_ismap`, `author_map_latitude`, `author_map_longitude`, `city_code`, `order_date`, `order_date_expired`, `order_time_expect`, `type`, `transportation`, `weight`, `price`, `receiver_name`, `receiver_phone`, `receiver_address`, `receiver_ismap`, `receiver_map_latitude`, `receiver_map_logitude`, `currency`, `shipper_id`, `status`, `isactive`, `isupdate`, `created_time`, `modifed_time`) VALUES
(1, 17, 'order 1', 'description', '12345678', 'nghệ an', 0, 0, 0, '', '2015-04-10 08:00:00', '2015-04-18 04:00:00', '2 ngày', 'type', 'oto', '< 10 kg', 500, 'receiver_name', 'receiver_phone', 'receiver_address', 0, 0, 0, 'VND', 0, 'NEW', 1, 1, '2015-03-10 17:00:00', '2015-05-16 05:04:41'),
(2, 1, 'order 1111', 'décription111jjj', '12345678111', 'nghệ an111', 0, 0, 0, '', '2011-01-10 22:00:00', '2015-04-24 04:00:00', '3 ngày111', 'type1111', 'oto1111', '< 10 kg', 50011, 'receiver_name1111', 'receiver_phone1111', 'receiver_address1111', 0, 0, 0, 'VND', 2, 'SHIPPING', 1, 1, '2015-03-11 16:14:38', '2015-04-10 04:17:22'),
(3, 1, 'order 1', 'description', '12345678', 'nghệ an', 1, 123.3, 2323.6, 'Vinh', '2015-03-09 17:00:00', '2015-03-16 17:00:00', '2 ngày', 'type', 'oto', '>10kg', 500, 'receiver_name', 'receiver_phone', 'receiver_address', 1, 123123000, 3232320, 'VND', 0, 'NEW', 1, 0, '2015-03-11 16:55:15', '2015-03-11 16:55:15'),
(4, 5, 'order 1', '', '12345678', 'nghệ an', 1, 123.3, 2323.6, 'Vinh', '2015-03-09 17:00:00', '2015-03-16 17:00:00', '2 ngày', 'type', 'oto', '>10kg', 500, 'receiver_name', 'receiver_phone', 'receiver_address', 1, 123123000, 3232320, 'USD', 0, 'NEW', 1, 0, '2015-03-22 17:33:51', '2015-03-22 17:33:51'),
(5, 12, 'order 1', 'desc', '12345678', 'nghệ an', 1, 123.3, 2323.6, 'Vinh', '2015-03-10 04:00:00', '2015-03-17 04:00:00', '2 ngày', 'type', 'oto', '>10kg', 500, 'receiver_name', 'receiver_phone', 'receiver_address', 1, 123123000, 3232320, 'USD', 0, 'NEW', 1, 0, '2015-03-22 19:07:03', '2015-03-22 19:07:03'),
(6, 5, 'Tên cửa hàng', 'Miêu tả ngắn về cửa hàng', '0001199', 'Địa chỉ nhận hàng giao', 1, 0, 0, 'Ha Noi', '2015-03-29 04:00:00', '2015-03-29 04:00:00', '10:10:PM', 'Chuyen nha', 'CAR', '< 10 kg', 100000, 'Loc Zon', '0998776', 'Địa chỉ giao hàng', 1, 0, 0, 'VND', 0, 'NEW', 1, 0, '2015-03-29 09:29:06', '2015-03-29 09:29:06'),
(7, 5, 'Tên cửa hàng', 'Miêu tả ngắn về cửa hàng', '555', 'Địa chỉ nhận hàng giao', 1, 0, 0, 'Ha Noi', '2015-03-29 04:00:00', '2015-03-29 04:00:00', '10:10:PM', 'Chuyen nha', 'CAR', '< 10 kg', 100000, 'hhhh', '55', 'Địa chỉ giao hàng', 1, 0, 0, 'VND', 0, 'NEW', 1, 0, '2015-03-29 15:21:01', '2015-03-29 15:21:01'),
(8, 5, 'Tiêu đề vận chuyển', 'Miêu tả ngắn...', '444', 'Địa chỉ nhận hàng giao', 1, 0, 0, 'Ha Noi', '2015-03-29 04:00:00', '2015-03-29 04:00:00', '10:10:PM', 'Chuyen nha', 'CAR', '< 10 kg', 100000, 'đ', '44', 'Địa chỉ giao hàng', 1, 0, 0, 'VND', 0, 'NEW', 1, 0, '2015-03-29 15:29:55', '2015-03-29 15:29:55'),
(9, 5, 'Chuyển nhà ở Trần Cung', 'chuyển nhà', '01693150513', 'Địa chỉ nhận hàng giao', 0, 0, 0, '4', '2015-04-01 04:00:00', '2015-04-01 04:00:00', '10:10:PM', 'Chuyen nha', 'CAR', '10 -> 20kg', 100000, 'thuần', '5555555', 'Địa chỉ giao hàng', 0, 0, 0, 'VND', 0, 'NEW', 1, 0, '2015-03-31 18:30:52', '2015-03-31 18:30:52'),
(10, 5, '', '', '', '', 0, 0, 0, '', '2015-04-09 04:00:00', '2015-04-09 04:00:00', '10:10:PM', 'Chuyen nha', 'CAR', '< 10 kg', 100000, '111', '1111', '', 0, 0, 0, 'VND', 0, 'NEW', 1, 0, '2015-04-09 15:54:49', '2015-04-09 15:54:49'),
(11, 14, '', '', '', '', 0, 0, 0, '', '2015-04-09 04:00:00', '2015-04-09 04:00:00', '10:10:PM', 'Chuyen nha', 'CAR', '< 10 kg', 100000, 'new', '123', 'new', 0, 0, 0, 'VND', 0, 'NEW', 1, 0, '2015-04-09 16:29:55', '2015-04-09 16:29:55'),
(12, 15, 'newnew1', 'nenew1', '123', 'newnew1', 1, 0, 0, '31', '2015-04-09 04:00:00', '2015-04-09 04:00:00', '10:10:PM', 'Chuyen nha', 'CAR', '< 10 kg', 100000, 'neneww1', '123', 'newbw', 0, 0, 0, 'VND', 0, 'NEW', 1, 0, '2015-04-09 16:39:37', '2015-04-09 16:39:37'),
(13, 15, 'AAAAA', 'bbb......', '1111', '111', 1, 0, 0, '', '2015-04-10 12:00:00', '2015-04-25 04:00:00', '01:09 AM', 'Chuyen nha', 'CAR', '< 10 kg', 100000, '1111', '1111', '1111', 0, 0, 0, 'VND', 0, 'NEW', 1, 1, '2015-04-09 16:56:35', '2015-04-10 04:18:27');

-- --------------------------------------------------------

--
-- Table structure for table `order_ship`
--

CREATE TABLE IF NOT EXISTS `order_ship` (
  `order_ship_id` int(8) NOT NULL,
  `order_id` int(8) NOT NULL,
  `shipper_id` int(8) NOT NULL,
  `shipper_cost` double NOT NULL,
  `shopper_cost` double NOT NULL,
  `ship_status` varchar(255) NOT NULL,
  `isactive` tinyint(1) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modified_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_ship`
--

INSERT INTO `order_ship` (`order_ship_id`, `order_id`, `shipper_id`, `shipper_cost`, `shopper_cost`, `ship_status`, `isactive`, `created_date`, `modified_date`) VALUES
(1, 1, 1, 1111, 3333, 'SHIPPER_ESTIMATE', 1, '2015-05-14 18:10:35', '2015-05-16 09:29:28');

-- --------------------------------------------------------

--
-- Table structure for table `order_ship_detail`
--

CREATE TABLE IF NOT EXISTS `order_ship_detail` (
  `id` int(11) NOT NULL,
  `order_ship_id` int(11) NOT NULL,
  `action_of` varchar(255) NOT NULL,
  `comment` varchar(1024) NOT NULL,
  `cost` double NOT NULL,
  `ship_status` varchar(255) NOT NULL,
  `isactive` tinyint(1) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_ship_detail`
--

INSERT INTO `order_ship_detail` (`id`, `order_ship_id`, `action_of`, `comment`, `cost`, `ship_status`, `isactive`, `created_date`) VALUES
(0, 1, 'SHIPPER', 'thue toi di', 1111, 'SHIPPER_CREATE', 1, '2015-05-14 18:10:35'),
(0, 1, 'SHOPPER', 'reject', 0, 'SHOPPER_ACCEPT', 1, '2015-05-16 09:27:34'),
(0, 1, 'SHOPPER', 'reject', 0, 'SHOPPER_REJECT', 1, '2015-05-16 09:28:04'),
(0, 1, 'SHOPPER', 'reject', 3333, 'SHOPPER_ESTIMATE', 1, '2015-05-16 09:28:32'),
(0, 1, 'SHIPPER', 'reject', 1111, 'SHIPPER_ESTIMATE', 1, '2015-05-16 09:29:28');

-- --------------------------------------------------------

--
-- Table structure for table `order_status`
--

CREATE TABLE IF NOT EXISTS `order_status` (
  `status_id` int(8) NOT NULL,
  `status_name` varchar(256) NOT NULL,
  `isactive` tinyint(1) NOT NULL,
  `status_type` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE IF NOT EXISTS `person` (
  `person_id` int(11) NOT NULL,
  `person_name` varchar(1024) NOT NULL,
  `email` varchar(256) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isactive` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user_contact`
--

CREATE TABLE IF NOT EXISTS `user_contact` (
  `id` int(8) NOT NULL,
  `user_id` int(11) NOT NULL,
  `contact_id` int(11) NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `isactive` tinyint(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_contact`
--

INSERT INTO `user_contact` (`id`, `user_id`, `contact_id`, `created_time`, `isactive`) VALUES
(7, 11, 10, '2015-03-17 20:04:19', 0),
(8, 5, 13, '2015-04-09 04:16:54', 1),
(9, 5, 13, '2015-04-09 04:16:57', 1),
(10, 5, 13, '2015-04-09 04:17:03', 1),
(11, 5, 1, '2015-04-09 04:33:49', 1),
(12, 5, 13, '2015-04-09 04:33:50', 1),
(13, 15, 5, '2015-04-09 17:21:26', 1),
(14, 15, 12, '2015-04-09 17:21:26', 1),
(15, 15, 14, '2015-04-09 17:21:27', 1),
(16, 15, 15, '2015-04-09 17:21:28', 1),
(17, 15, 1, '2015-04-09 17:21:34', 1),
(18, 15, 13, '2015-04-09 17:21:35', 1),
(19, 5, 5, '2015-04-09 18:07:42', 1),
(20, 5, 12, '2015-04-09 18:07:44', 1),
(21, 5, 14, '2015-04-09 18:07:45', 1),
(22, 5, 15, '2015-04-09 18:07:46', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access_token`
--
ALTER TABLE `access_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `district`
--
ALTER TABLE `district`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `order_ship`
--
ALTER TABLE `order_ship`
  ADD PRIMARY KEY (`order_ship_id`);

--
-- Indexes for table `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`person_id`);

--
-- Indexes for table `user_contact`
--
ALTER TABLE `user_contact`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `access_token`
--
ALTER TABLE `access_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=856;
--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `district`
--
ALTER TABLE `district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `order_id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `order_ship`
--
ALTER TABLE `order_ship`
  MODIFY `order_ship_id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `order_status`
--
ALTER TABLE `order_status`
  MODIFY `status_id` int(8) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `person`
--
ALTER TABLE `person`
  MODIFY `person_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user_contact`
--
ALTER TABLE `user_contact`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
