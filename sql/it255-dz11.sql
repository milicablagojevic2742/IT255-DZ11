-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2017 at 11:37 AM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 7.0.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `it255-dz11`
--

-- --------------------------------------------------------

--
-- Table structure for table `delovi`
--

CREATE TABLE `delovi` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `price` int(11) NOT NULL,
  `manufacturer` text NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `delovi`
--

INSERT INTO `delovi` (`id`, `name`, `price`, `manufacturer`, `type`) VALUES
(1, 'Prednji kocioni diskovi', 6946, 'ICER', 'Audi'),
(2, 'EGR ventil', 11070, 'Polcar', 'Audi'),
(3, 'Alternator', 21200, 'PowerMax', 'Hyundai'),
(4, 'ABS senzor', 6295, 'Bosch', 'BMW'),
(5, 'Akumulator', 12418, 'Bosch', 'Svi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `delovi`
--
ALTER TABLE `delovi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `delovi`
--
ALTER TABLE `delovi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
