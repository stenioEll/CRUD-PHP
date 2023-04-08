-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07-Abr-2023 às 03:07
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `medicos`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastro_medico`
--

CREATE TABLE `cadastro_medico` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `crm` varchar(8) NOT NULL,
  `telefone` bigint(15) NOT NULL,
  `especialidade1` varchar(50) NOT NULL,
  `especialidade2` varchar(50) NOT NULL,
  `cep` varchar(10) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `rua` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `cadastro_medico`
--

INSERT INTO `cadastro_medico` (`id`, `nome`, `crm`, `telefone`, `especialidade1`, `especialidade2`, `cep`, `estado`, `cidade`, `rua`, `created_at`, `updated_at`) VALUES
(1, 'stenio pereira', '121', 12345, 'Cardiologia Clínica', 'Cirurgia Cardíaca', '12121', 'ce', 'jp', 'dwdsdsd', '2023-04-06 17:49:19', '2023-04-07 03:00:00'),
(3, 'hanna', '212121', 4545454, 'Cirurgia Torácida', 'Buco Maxilo', '4545', 'pb', 'ce', 'dfdsgsgs', '2023-04-06 20:28:56', '2023-04-06 20:28:56'),
(7, 'Felipe Amorim Pereira', '52555g', 32333434344, 'Cirurgia Cabeça e Pescoço', 'Buco Maxilo', '34334', 'Pernambuco', 'Recife', 'alguma rua', '2023-04-07 00:34:22', '2023-04-07 03:00:00');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cadastro_medico`
--
ALTER TABLE `cadastro_medico`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cadastro_medico`
--
ALTER TABLE `cadastro_medico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
