-- phpMyAdmin SQL Dump
-- version 4.3.3
-- http://www.phpmyadmin.net
--
-- Host: retrogradejusticiar.db
-- Generation Time: May 09, 2015 at 09:42 PM
-- Server version: 5.3.12-MariaDB
-- PHP Version: 5.6.4-nfsn1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `foolishness`
--

-- --------------------------------------------------------

--
-- Table structure for table `NUMERALS`
--

CREATE TABLE IF NOT EXISTS `NUMERALS` (
  `ID` int(11) NOT NULL,
  `DATE` date NOT NULL,
  `NUMBER` decimal(8,2) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=122 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `NUMERALS`
--

INSERT INTO `NUMERALS` (`ID`, `DATE`, `NUMBER`) VALUES
(1, '2014-09-15', '-121.69'),
(2, '2014-09-16', '-123.04'),
(3, '2014-09-17', '-123.04'),
(4, '2014-09-18', '-123.04'),
(5, '2014-09-19', '597.52'),
(6, '2014-09-20', '597.52'),
(7, '2014-09-21', '597.52'),
(8, '2014-09-22', '-420.49'),
(9, '2014-09-23', '-443.41'),
(10, '2014-09-24', '-443.41'),
(11, '2014-09-25', '-467.21'),
(12, '2014-09-26', '-309.93'),
(13, '2014-09-27', '-309.93'),
(14, '2014-09-28', '-309.93'),
(15, '2014-09-29', '-413.54'),
(16, '2014-09-30', '-413.53'),
(17, '2014-10-01', '-547.28'),
(18, '2014-10-02', '-568.63'),
(19, '2014-10-03', '830.29'),
(20, '2014-10-04', '830.29'),
(21, '2014-10-05', '830.29'),
(22, '2014-10-06', '645.41'),
(23, '2014-10-07', '633.96'),
(24, '2014-10-08', '632.61'),
(25, '2014-10-09', '592.61'),
(26, '2014-10-10', '592.61'),
(27, '2014-10-11', '592.61'),
(28, '2014-10-12', '592.61'),
(29, '2014-10-13', '592.61'),
(30, '2014-10-14', '563.40'),
(31, '2014-10-15', '563.40'),
(32, '2014-10-16', '275.73'),
(33, '2014-10-17', '1607.65'),
(34, '2014-10-18', '1607.65'),
(35, '2014-10-19', '1607.65'),
(36, '2014-10-20', '757.49'),
(37, '2014-10-21', '740.49'),
(38, '2014-10-22', '592.97'),
(39, '2014-10-23', '592.97'),
(40, '2014-10-24', '570.94'),
(41, '2014-10-25', '570.94'),
(42, '2014-10-26', '570.94'),
(43, '2014-10-27', '564.79'),
(44, '2014-10-28', '564.79'),
(45, '2014-10-29', '524.79'),
(46, '2014-10-30', '524.79'),
(47, '2014-10-31', '1856.77'),
(48, '2014-11-01', '1856.77'),
(49, '2014-11-02', '1856.77'),
(50, '2014-11-03', '1620.25'),
(51, '2014-11-04', '1620.25'),
(52, '2014-11-05', '1620.25'),
(53, '2014-11-06', '1620.25'),
(54, '2014-11-07', '1620.25'),
(55, '2014-11-08', '1620.25'),
(56, '2014-11-09', '1620.25'),
(57, '2014-11-10', '1620.25'),
(58, '2014-11-11', '1620.25'),
(59, '2014-11-12', '877.36'),
(60, '2014-11-13', '877.36'),
(61, '2014-11-14', '2164.07'),
(62, '2014-11-15', '2164.07'),
(63, '2014-11-16', '2164.07'),
(64, '2014-11-17', '1449.43'),
(65, '2014-11-18', '1423.45'),
(66, '2014-11-19', '1423.45'),
(67, '2014-11-20', '1423.45'),
(68, '2014-11-21', '1416.68'),
(69, '2014-11-22', '1416.68'),
(70, '2014-11-23', '1416.68'),
(71, '2014-11-24', '1416.68'),
(72, '2014-11-25', '1322.32'),
(73, '2014-11-26', '1322.32'),
(74, '2014-11-27', '1022.32'),
(75, '2014-11-28', '2354.37'),
(76, '2014-11-29', '2354.37'),
(77, '2014-11-30', '2354.37'),
(78, '2014-12-01', '2115.40'),
(79, '2014-12-02', '2028.83'),
(80, '2014-12-03', '2028.83'),
(81, '2014-12-04', '2028.83'),
(82, '2014-12-05', '2649.74'),
(83, '2014-12-06', '2649.74'),
(84, '2014-12-07', '2649.74'),
(85, '2014-12-08', '2569.74'),
(86, '2014-12-09', '2569.74'),
(87, '2014-12-10', '2569.74'),
(88, '2014-12-11', '2569.74'),
(89, '2014-12-12', '3818.70'),
(90, '2014-12-13', '3818.70'),
(91, '2014-12-14', '3818.70'),
(92, '2014-12-15', '3383.31'),
(93, '2014-12-16', '3383.31'),
(94, '2014-12-17', '3383.31'),
(95, '2014-12-18', '3383.31'),
(96, '2014-12-19', '3383.31'),
(97, '2014-12-20', '3383.31'),
(98, '2014-12-21', '3383.31'),
(99, '2014-12-22', '3135.18'),
(100, '2014-12-23', '3121.87'),
(101, '2014-12-24', '4153.79'),
(102, '2014-12-25', '4153.79'),
(103, '2014-12-26', '4153.79'),
(104, '2014-12-27', '4153.79'),
(105, '2014-12-28', '4153.79'),
(106, '2014-12-29', '3770.04'),
(107, '2014-12-30', '3764.82'),
(108, '2014-12-31', '3765.09'),
(109, '2015-01-01', '3765.09'),
(110, '2015-01-02', '3678.52'),
(111, '2015-01-03', '3678.52'),
(112, '2015-01-04', '3678.52'),
(113, '2015-01-05', '3745.52'),
(114, '2015-01-06', '3745.52'),
(115, '2015-01-07', '3745.52'),
(116, '2015-01-08', '3745.52'),
(117, '2015-01-09', '5053.55'),
(118, '2015-01-10', '5053.55'),
(119, '2015-01-11', '5053.55'),
(120, '2015-01-12', '4860.55'),
(121, '2015-01-13', '4098.57');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE IF NOT EXISTS `quiz` (
  `quiz_id` int(11) NOT NULL,
  `quiz_type_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `extra_data` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `quiz_item`
--

CREATE TABLE IF NOT EXISTS `quiz_item` (
  `quiz_item_id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `question` varchar(50) NOT NULL,
  `answer` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `quiz_type`
--

CREATE TABLE IF NOT EXISTS `quiz_type` (
  `quiz_type_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quiz_type`
--

INSERT INTO `quiz_type` (`quiz_type_id`, `name`, `description`) VALUES
(1, 'multiple_choice', 'Multiple Choice'),
(2, 'text', 'Simple text answer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `NUMERALS`
--
ALTER TABLE `NUMERALS`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`quiz_id`), ADD KEY `quiz_type_id` (`quiz_type_id`);

--
-- Indexes for table `quiz_item`
--
ALTER TABLE `quiz_item`
  ADD PRIMARY KEY (`quiz_item_id`), ADD KEY `quiz_id` (`quiz_id`);

--
-- Indexes for table `quiz_type`
--
ALTER TABLE `quiz_type`
  ADD PRIMARY KEY (`quiz_type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `NUMERALS`
--
ALTER TABLE `NUMERALS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=122;
--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `quiz_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `quiz_item`
--
ALTER TABLE `quiz_item`
  MODIFY `quiz_item_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `quiz_type`
--
ALTER TABLE `quiz_type`
  MODIFY `quiz_type_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
