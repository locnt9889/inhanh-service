-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2015 at 06:38 PM
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
(1, 4, '0f400140-a57f-11e4-ba8d-6b1c5904905f', '', '2015-01-26 17:16:26', '0000-00-00 00:00:00', 1, 0),
(2, 4, 'nevergone9889', 'd1be3250-a57f-11e4-ab40-8f6673038479', '2015-01-26 17:21:53', '0000-00-00 00:00:00', 1, 0),
(3, 4, 'nevergone9889', 'd1447900-a580-11e4-9ad0-2fc6ce0708e8', '2015-01-26 17:29:01', '0000-00-00 00:00:00', 1, 0),
(4, 4, 'nevergone9889', '520f34d0-a581-11e4-918e-d170ad785a07', '2015-01-26 17:32:37', '0000-00-00 00:00:00', 1, 1),
(5, 4, 'nevergone9889789989', '5cb22320-a581-11e4-918e-d170ad785a07', '2015-01-26 17:32:55', '0000-00-00 00:00:00', 1, 0),
(6, 4, 'nevergone9889789989', 'ab1ac4e0-a581-11e4-8ea7-a73c2cac593a', '2015-01-26 17:35:07', '0000-00-00 00:00:00', 1, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
