-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2023 at 01:13 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejsdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart_master`
--

CREATE TABLE `cart_master` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` float NOT NULL,
  `shopingDate` date NOT NULL DEFAULT current_timestamp(),
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cart_master`
--

INSERT INTO `cart_master` (`id`, `userId`, `productId`, `quantity`, `shopingDate`, `status`, `created_at`, `updated_at`) VALUES
(62, 9, 2, 1, '2023-04-13', 1, '2023-04-13 00:11:25', '2023-04-13 00:11:25'),
(63, 9, 1, 1, '2023-04-14', 1, '2023-04-14 10:35:24', '2023-04-14 10:35:24'),
(64, 9, 4, 1, '2023-04-14', 1, '2023-04-14 10:35:36', '2023-04-14 10:35:36');

-- --------------------------------------------------------

--
-- Table structure for table `categories_master`
--

CREATE TABLE `categories_master` (
  `id` int(11) NOT NULL,
  `cateName` varchar(225) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `categories_master`
--

INSERT INTO `categories_master` (`id`, `cateName`, `status`) VALUES
(60, 'Men\'s', 1),
(63, 'Home', 1),
(64, 'WOMEN', 1),
(65, 'Kid\'s', 1),
(67, 'test', 1);

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `first_name` varchar(222) NOT NULL,
  `last_name` varchar(222) NOT NULL,
  `email` varchar(222) NOT NULL,
  `phone` int(11) NOT NULL,
  `organization` text NOT NULL,
  `designation` int(11) NOT NULL,
  `salary` float NOT NULL,
  `status` int(1) NOT NULL,
  `is_deleted` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 'Manjesh', 'kumar', 'manjesh@gov.in', 2147483647, 'HCL', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Manjesh', 'kumar', 'manjesh@gov.in', 2147483647, 'HCL', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'nidssddddddsdsds', 'kumar', 'manjesh@gov.in', 2147483647, 'HCL', 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `order_history`
--

CREATE TABLE `order_history` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `userId` int(20) NOT NULL,
  `quantity` float NOT NULL,
  `shopingDate` date NOT NULL,
  `status` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `order_history`
--

INSERT INTO `order_history` (`id`, `orderId`, `productId`, `userId`, `quantity`, `shopingDate`, `status`, `updated_at`, `created_at`) VALUES
(4, 833829930, 4, 9, 89, '2023-04-02', 1, 0, '2023-04-07 17:30:55'),
(5, 833829930, 5, 9, 1, '2023-04-02', 1, 0, '2023-04-07 17:30:55'),
(6, 833829930, 1, 9, 10, '2023-04-04', 1, 0, '2023-04-07 17:30:55'),
(7, 858515061, 2, 9, 11, '2023-04-07', 1, 0, '2023-04-07 18:10:00'),
(8, 858515061, 3, 9, 16, '2023-04-07', 1, 0, '2023-04-07 18:10:00'),
(9, 858515061, 4, 9, 1, '2023-04-07', 1, 0, '2023-04-07 18:10:00'),
(10, 858515061, 1, 9, 1, '2023-04-07', 1, 0, '2023-04-07 18:10:00'),
(11, 569140857, 3, 9, 1, '2023-04-07', 1, 0, '2023-04-09 11:45:11'),
(12, 569140857, 4, 9, 1, '2023-04-07', 1, 0, '2023-04-09 11:45:11'),
(13, 569140857, 2, 9, 1, '2023-04-07', 1, 0, '2023-04-09 11:45:11'),
(14, 569140857, 1, 9, 1, '2023-04-07', 1, 0, '2023-04-09 11:45:11'),
(15, 142612167, 1, 9, 1, '2023-04-09', 1, 0, '2023-04-09 13:01:17'),
(16, 142612167, 2, 9, 1, '2023-04-09', 1, 0, '2023-04-09 13:01:17'),
(17, 142612167, 3, 9, 1, '2023-04-09', 1, 0, '2023-04-09 13:01:17'),
(18, 142612167, 4, 9, 1, '2023-04-09', 1, 0, '2023-04-09 13:01:17'),
(19, 245908588, 1, 9, 1, '2023-04-09', 1, 0, '2023-04-09 14:31:37'),
(20, 245908588, 2, 9, 1, '2023-04-09', 1, 0, '2023-04-09 14:31:37'),
(21, 245908588, 3, 9, 1, '2023-04-09', 1, 0, '2023-04-09 14:31:37'),
(22, 245908588, 4, 9, 1, '2023-04-09', 1, 0, '2023-04-09 14:31:37'),
(23, 34941263, 1, 9, 1, '2023-04-09', 1, 0, '2023-04-09 14:37:26'),
(24, 34941263, 4, 9, 1, '2023-04-09', 1, 0, '2023-04-09 14:37:26'),
(25, 34941263, 3, 9, 1, '2023-04-09', 1, 0, '2023-04-09 14:37:26'),
(26, 1041909741, 1, 9, 1, '2023-04-09', 1, 0, '2023-04-09 14:39:40'),
(27, 951975072, 2, 9, 1, '2023-04-09', 1, 0, '2023-04-09 14:43:01'),
(28, 1076421827, 3, 9, 2, '2023-04-09', 1, 0, '2023-04-09 14:44:49'),
(29, 546330128, 3, 9, 1, '2023-04-09', 1, 0, '2023-04-09 14:45:14'),
(30, 379624048, 1, 9, 1, '2023-04-09', 1, 0, '2023-04-09 16:42:47'),
(31, 379624048, 2, 9, 1, '2023-04-09', 1, 0, '2023-04-09 16:42:47'),
(32, 379624048, 3, 9, 1, '2023-04-09', 1, 0, '2023-04-09 16:42:47'),
(33, 379624048, 4, 9, 1, '2023-04-09', 1, 0, '2023-04-09 16:42:47'),
(34, 1074733877, 2, 9, 1, '2023-04-09', 1, 0, '2023-04-09 17:03:37'),
(35, 1074733877, 3, 9, 10, '2023-04-09', 1, 0, '2023-04-09 17:03:37'),
(36, 1074733877, 1, 9, 1, '2023-04-09', 1, 0, '2023-04-09 17:03:37'),
(37, 1074733877, 4, 9, 1, '2023-04-09', 1, 0, '2023-04-09 17:03:37'),
(38, 1037107262, 2, 9, 1, '2023-04-09', 1, 0, '2023-04-09 17:05:17'),
(39, 150432703, 1, 9, 1, '2023-04-12', 1, 0, '2023-04-12 17:40:24'),
(40, 150432703, 3, 9, 1, '2023-04-12', 1, 0, '2023-04-12 17:40:24'),
(41, 150432703, 4, 9, 1, '2023-04-12', 1, 0, '2023-04-12 17:40:24'),
(42, 605455196, 2, 9, 1, '2023-04-12', 1, 0, '2023-04-12 18:22:05');

-- --------------------------------------------------------

--
-- Table structure for table `order_master`
--

CREATE TABLE `order_master` (
  `orderId` int(11) NOT NULL,
  `orderNumber` varchar(225) NOT NULL,
  `userId` int(11) NOT NULL,
  `total` varchar(225) NOT NULL,
  `grandTotal` bigint(225) NOT NULL,
  `deliverType` varchar(225) NOT NULL,
  `paymentStatus` varchar(225) NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `order_master`
--

INSERT INTO `order_master` (`orderId`, `orderNumber`, `userId`, `total`, `grandTotal`, `deliverType`, `paymentStatus`, `updated_at`, `created_at`) VALUES
(2, '833829930', 9, '97511', 97511, 'cash on delivery', '1', '2023-04-07 23:00:55', '2023-04-07 23:00:55'),
(3, '858515061', 9, '18467', 18467, 'cash on delivery', '1', '2023-04-07 23:40:00', '2023-04-07 23:40:00'),
(4, '569140857', 9, '2992', 2992, 'cash on delivery', '1', '2023-04-09 17:15:11', '2023-04-09 17:15:11'),
(5, '142612167', 9, '2992', 2992, 'cash on delivery', '1', '2023-04-09 18:31:17', '2023-04-09 18:31:17'),
(6, '245908588', 9, '2992', 2992, 'cash on delivery', '1', '2023-04-09 20:01:37', '2023-04-09 20:01:37'),
(7, '34941263', 9, '2493', 2493, 'cash on delivery', '1', '2023-04-09 20:07:26', '2023-04-09 20:07:26'),
(8, '1041909741', 9, '795', 795, 'cash on delivery', '1', '2023-04-09 20:09:40', '2023-04-09 20:09:40'),
(9, '951975072', 9, '499', 499, 'cash on delivery', '1', '2023-04-09 20:13:01', '2023-04-09 20:13:01'),
(10, '1076421827', 9, '1398', 1398, 'cash on delivery', '1', '2023-04-09 20:14:49', '2023-04-09 20:14:49'),
(11, '546330128', 9, '699', 699, 'cash on delivery', '1', '2023-04-09 20:15:14', '2023-04-09 20:15:14'),
(12, '379624048', 9, '2992', 2992, 'cash on delivery', '1', '2023-04-09 22:12:46', '2023-04-09 22:12:46'),
(13, '1074733877', 9, '9283', 9283, 'cash on delivery', '1', '2023-04-09 22:33:37', '2023-04-09 22:33:37'),
(14, '1037107262', 9, '499', 499, 'cash on delivery', '1', '2023-04-09 22:35:17', '2023-04-09 22:35:17'),
(15, '150432703', 9, '2493', 2493, 'cash on delivery', '1', '2023-04-12 23:10:24', '2023-04-12 23:10:24'),
(16, '884382799', 9, '0', 0, 'cash on delivery', '1', '2023-04-12 23:10:43', '2023-04-12 23:10:43'),
(17, '89372186', 9, '97511', 97511, 'cash on delivery', '1', '2023-04-12 23:43:29', '2023-04-12 23:43:29'),
(18, '605455196', 9, '499', 499, 'cash on delivery', '1', '2023-04-12 23:52:05', '2023-04-12 23:52:05');

-- --------------------------------------------------------

--
-- Table structure for table `product_master`
--

CREATE TABLE `product_master` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `catId` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `picure` varchar(225) NOT NULL,
  `quantity` int(22) NOT NULL,
  `price` float NOT NULL,
  `offersPrice` float NOT NULL,
  `status` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `product_master`
--

INSERT INTO `product_master` (`id`, `user_id`, `catId`, `name`, `picure`, `quantity`, `price`, `offersPrice`, `status`) VALUES
(1, 9, 64, 'Tux Shirt in Navy', 'product-image28-1111.jpg', 150, 795, 0, 1),
(2, 9, 64, 'Tux Shirt in Navy-white', 'product-image29-1222.jpg', 150, 499, 0, 1),
(3, 9, 64, 'Tux Shirt in Navy-black', 'product-image30-133333.jpg', 150, 699, 0, 1),
(4, 9, 64, 'Tux Shirt in Navy-white', 'product-image31-1444.jpg', 150, 999, 0, 1),
(5, 9, 60, 'Men Slim Fit Striped Slim Collar Casual Shirt', '143684385-97047943-1619538229.jpg', 400, 650, 0, 1),
(6, 9, 60, 'Men Slim Fit Striped ', '22222222222.jpg', 400, 850, 0, 1),
(7, 9, 60, 'Men Slim Fit Striped black', '33333333333.jpg', 400, 433, 0, 1),
(8, 9, 60, 'Men Slim Fit Striped white', '44444444444.jpg', 400, 1900, 0, 1),
(9, 9, 60, 'Men Slim Fit Striped white', '44444444444.jpg', 400, 1900, 0, 1),
(10, 9, 60, 'Men Slim Fit Striped white', '44444444444.jpg', 400, 1900, 0, 1),
(11, 9, 65, 'kids shorts', 'kids2.PNG', 500, 299, 0, 1),
(12, 9, 65, 'kids T-shorts', 'kids3.PNG', 400, 199, 0, 1),
(13, 9, 65, 'kids shorts', 'kids4.PNG', 400, 899, 0, 1),
(14, 9, 65, 'kids long', 'kids5.PNG', 400, 599, 0, 1),
(15, 9, 65, 'kids shilm', 'kids6.PNG', 400, 799, 0, 1),
(16, 9, 63, 'Home 1', 'home1.PNG', 400, 99, 0, 1),
(17, 9, 63, 'Home 2', 'home2.PNG', 400, 199, 0, 1),
(18, 9, 63, 'Home 2', 'home3.PNG', 400, 299, 0, 1),
(19, 9, 63, 'Home 2', 'home4.PNG', 400, 399, 0, 1),
(20, 9, 63, 'Home 2', 'home5.PNG', 400, 178, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role_code` int(11) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` varchar(2048) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role_code`, `two_factor_secret`, `two_factor_recovery_codes`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
(9, 'IT', 'it@gmail.com', NULL, '$2a$10$9uco9vMTUdf.bitdPGUE5uF4XVobt.b4dLvTtA1Kn41bjoUT2d55q', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(27, 'NIC', 'nic@gmail.com', NULL, '$2a$10$BAkLDgJWiTdcdPlDD9dkzO4u5YJSUKnelQwi6PTR/gGAyzHSVDUFq', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart_master`
--
ALTER TABLE `cart_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories_master`
--
ALTER TABLE `categories_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_history`
--
ALTER TABLE `order_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_master`
--
ALTER TABLE `order_master`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `product_master`
--
ALTER TABLE `product_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart_master`
--
ALTER TABLE `cart_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `categories_master`
--
ALTER TABLE `categories_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `order_history`
--
ALTER TABLE `order_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `order_master`
--
ALTER TABLE `order_master`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `product_master`
--
ALTER TABLE `product_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
