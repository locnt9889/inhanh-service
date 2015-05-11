-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2015 at 06:18 PM
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order_ship`
--
ALTER TABLE `order_ship`
  ADD PRIMARY KEY (`order_ship_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order_ship`
--
ALTER TABLE `order_ship`
  MODIFY `order_ship_id` int(8) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
