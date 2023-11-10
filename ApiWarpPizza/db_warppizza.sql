-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Out-2023 às 01:52
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_warppizza`
--
CREATE DATABASE IF NOT EXISTS `db_warppizza` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `db_warppizza`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_bebida`
--

CREATE TABLE `tb_bebida` (
  `cd_bebida` int(11) NOT NULL,
  `nm_bebida` varchar(50) NOT NULL,
  `ds_bebida` varchar(50) NOT NULL,
  `vl_bebida` decimal(5,2) NOT NULL,
  `img_bebida` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_bebida`
--

INSERT INTO `tb_bebida` (`cd_bebida`, `nm_bebida`, `ds_bebida`, `vl_bebida`, `img_bebida`) VALUES
(1, 'Copo Refrigerante', 'Um copo de 500ml de refrigerante.', '5.00', 'src/assets/images/bebidas/refrigerante.png'),
(2, 'Milkshake', 'Um copo de 500ml de milkshake.', '10.00', 'src/assets/images/bebidas/milkshake.png'),
(3, 'Suco', 'Um copo de 500ml de suco.', '3.00', 'src/assets/images/bebidas/suco.png'),
(4, 'Água', 'Uma garrafa de água de 500ml.', '20.00', 'src/assets/images/bebidas/agua.png'),
(5, 'Garrafa de Coca', 'Garrafa de 2 litros de Coca-Cola.', '15.00', 'src/assets/images/bebidas/cocaGarrafa.png'),
(6, 'Garrafa de Pepsi', 'Garrafa de 2 litros de Pepsi.', '15.00', 'src/assets/images/bebidas/pepsiGarrafa.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_bebida_menu`
--

CREATE TABLE `tb_bebida_menu` (
  `cd_bebida` int(11) NOT NULL,
  `nm_bebida` varchar(50) NOT NULL,
  `ds_bebida` varchar(50) NOT NULL,
  `vl_bebida` decimal(5,2) NOT NULL,
  `img_bebida` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_bebida_menu`
--

INSERT INTO `tb_bebida_menu` (`cd_bebida`, `nm_bebida`, `ds_bebida`, `vl_bebida`, `img_bebida`) VALUES
(1, 'Copo Refrigerante', 'Um copo de 500ml de refrigerante.', '5.00', 'src/assets/images/bebidas/refrigerante.png'),
(2, 'Milkshake', 'Um copo de 500ml de milkshake.', '10.00', 'src/assets/images/bebidas/milkshake.png'),
(3, 'Suco', 'Um copo de 500ml de suco.', '3.00', 'src/assets/images/bebidas/suco.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_combo`
--

CREATE TABLE `tb_combo` (
  `cd_combo` int(11) NOT NULL,
  `nm_combo` varchar(50) NOT NULL,
  `ds_combo` varchar(50) NOT NULL,
  `vl_combo` decimal(5,2) NOT NULL,
  `img_combo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_combo`
--

INSERT INTO `tb_combo` (`cd_combo`, `nm_combo`, `ds_combo`, `vl_combo`, `img_combo`) VALUES
(1, 'Combo Terra', 'Vem com as pizzas: Padrão, Frango com Catupiry e M', '100.00', 'src/assets/images/terra.png'),
(2, 'Combo Vulcano', 'Vem com as pizzas: Forja Vulcana, Portuguesa e Mar', '100.00', 'src/assets/images/vulcano.png'),
(3, 'Combo Andoriano', 'Vem com as pizzas: Zero Absoluto, Calabresa e Cala', '100.00', 'src/assets/images/andoria.png'),
(4, 'Combo Telarita', 'Vem com as pizzas: Guerra Eugênica, Camarão e Pres', '100.00', 'src/assets/images/tellar.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_entrada`
--

CREATE TABLE `tb_entrada` (
  `cd_entrada` int(11) NOT NULL,
  `nm_entrada` varchar(50) NOT NULL,
  `ds_entrada` varchar(50) NOT NULL,
  `vl_entrada` decimal(5,2) NOT NULL,
  `img_entrada` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_entrada`
--

INSERT INTO `tb_entrada` (`cd_entrada`, `nm_entrada`, `ds_entrada`, `vl_entrada`, `img_entrada`) VALUES
(1, 'Asinhas Fritas', 'Asas de frango frito.', '15.00', 'src/assets/images/entradinhas/asaFrangoFrito.png'),
(2, 'Batata Frita', 'Batata Frita', '20.00', 'src/assets/images/entradinhas/batataFrita.png'),
(3, 'Esfirra', 'Esfirra de todos os sabores', '5.00', 'src/assets/images/entradinhas/esfirras.png'),
(4, 'Graveto de Pão', 'Grafeto, feito de pão', '7.00', 'src/assets/images/entradinhas/gravetoPao.png'),
(5, 'Mini Pastel', 'Mini pasteis de todos os sabores', '3.00', 'src/assets/images/entradinhas/miniPastel.png'),
(6, 'Pão de Calabresa', 'Um pão que tem calabresa', '5.00', 'src/assets/images/entradinhas/paoCalabresa.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_entrada_menu`
--

CREATE TABLE `tb_entrada_menu` (
  `cd_entrada` int(11) NOT NULL,
  `nm_entrada` varchar(50) NOT NULL,
  `ds_entrada` varchar(50) NOT NULL,
  `vl_entrada` decimal(5,2) NOT NULL,
  `img_entrada` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_entrada_menu`
--

INSERT INTO `tb_entrada_menu` (`cd_entrada`, `nm_entrada`, `ds_entrada`, `vl_entrada`, `img_entrada`) VALUES
(1, 'Asinhas Fritas', 'Asas de frango frito.', '15.00', 'src/assets/images/entradinhas/asaFrangoFrito.png'),
(2, 'Batata Frita', 'Batata Frita', '20.00', 'src/assets/images/entradinhas/batataFrita.png'),
(3, 'Esfirra', 'Esfirra de todos os sabores', '5.00', 'src/assets/images/entradinhas/esfirras.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pizza`
--

CREATE TABLE `tb_pizza` (
  `cd_pizza` int(11) NOT NULL,
  `nm_pizza` varchar(50) NOT NULL,
  `ds_pizza` varchar(100) NOT NULL,
  `vl_pizza` decimal(5,2) NOT NULL,
  `img_pizza` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_pizza`
--

INSERT INTO `tb_pizza` (`cd_pizza`, `nm_pizza`, `ds_pizza`, `vl_pizza`, `img_pizza`) VALUES
(1, 'Padrão Federação', 'Pizza comum vista na Terra', '35.00', 'src/assets/images/pizzas/calabresa.png'),
(2, 'Forja Vulcana', 'Quatro queijos a moda da Forja Vulcana', '30.00', 'src/assets/images/pizzas/forjaVulcana.png'),
(3, 'Zero Absoluto', 'Chocolate com sorvete a moda andoriana de -50ºC', '15.00', 'src/assets/images/pizzas/zeroAbsoluto.png'),
(4, 'Guerra Eugênica', 'Uma triste lembrança da morte de 30% da população da Terra.', '5.00', 'src/assets/images/pizzas/guerraEugenica.png'),
(5, 'Camarão', 'Uma pizza feita com crustáceos encontrados nos oceanos da Terra.', '45.00', 'src/assets/images/pizzas/camarao.png'),
(6, 'Frango com Catupiry', 'Um clásico de uma nação estado da Terra, essa pizza é ótima em tudo.', '15.00', 'src/assets/images/pizzas/frangoCatupiry.png'),
(7, 'Margherita', 'Uma pizza feita em homenagem a rainha Margarida de Saboia.', '20.00', 'src/assets/images/pizzas/margherita.png'),
(8, 'Mussarela', 'Um clássico terrestre, essa pizza é feita com queijo.', '30.00', 'src/assets/images/pizzas/mussarela.png'),
(9, 'Portuguesa', 'Um clássico de um estado nação da Terra, tem vários ingredientes.', '35.00', 'src/assets/images/pizzas/portuguesa.png'),
(10, 'Presunto e Queijo', 'Uma combinação ótima de ingredientes.', '20.00', 'src/assets/images/pizzas/presuntoQueijo.png'),
(11, 'Calabresa', 'Feito obviamente com calabresa, é uma ótima pedida para toca ocasião.', '15.00', 'src/assets/images/pizzas/calabresa.png'),
(12, 'Calabresa com Catupiry', 'Uma das melhores pizzas ainda mais melhor.', '25.00', 'src/assets/images/pizzas/calabresaCatupiry.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pizza_menu`
--

CREATE TABLE `tb_pizza_menu` (
  `cd_pizza` int(11) NOT NULL,
  `nm_pizza` varchar(50) NOT NULL,
  `ds_pizza` varchar(100) NOT NULL,
  `vl_pizza` decimal(5,2) NOT NULL,
  `img_pizza` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tb_pizza_menu`
--

INSERT INTO `tb_pizza_menu` (`cd_pizza`, `nm_pizza`, `ds_pizza`, `vl_pizza`, `img_pizza`) VALUES
(1, 'Padrão Federação', 'Pizza comum vista na Terra', '35.00', 'src/assets/images/pizzas/calabresa.png'),
(2, 'Forja Vulcana', 'Quatro queijos a moda da Forja Vulcana', '30.00', 'src/assets/images/pizzas/forjaVulcana.png'),
(3, 'Zero Absoluto', 'Chocolate com sorvete a moda andoriana de -50ºC', '15.00', 'src/assets/images/pizzas/zeroAbsoluto.png');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_bebida`
--
ALTER TABLE `tb_bebida`
  ADD PRIMARY KEY (`cd_bebida`);

--
-- Índices para tabela `tb_bebida_menu`
--
ALTER TABLE `tb_bebida_menu`
  ADD PRIMARY KEY (`cd_bebida`);

--
-- Índices para tabela `tb_combo`
--
ALTER TABLE `tb_combo`
  ADD PRIMARY KEY (`cd_combo`);

--
-- Índices para tabela `tb_entrada`
--
ALTER TABLE `tb_entrada`
  ADD PRIMARY KEY (`cd_entrada`);

--
-- Índices para tabela `tb_entrada_menu`
--
ALTER TABLE `tb_entrada_menu`
  ADD PRIMARY KEY (`cd_entrada`);

--
-- Índices para tabela `tb_pizza`
--
ALTER TABLE `tb_pizza`
  ADD PRIMARY KEY (`cd_pizza`);

--
-- Índices para tabela `tb_pizza_menu`
--
ALTER TABLE `tb_pizza_menu`
  ADD PRIMARY KEY (`cd_pizza`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_bebida`
--
ALTER TABLE `tb_bebida`
  MODIFY `cd_bebida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `tb_bebida_menu`
--
ALTER TABLE `tb_bebida_menu`
  MODIFY `cd_bebida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `tb_combo`
--
ALTER TABLE `tb_combo`
  MODIFY `cd_combo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `tb_entrada`
--
ALTER TABLE `tb_entrada`
  MODIFY `cd_entrada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `tb_entrada_menu`
--
ALTER TABLE `tb_entrada_menu`
  MODIFY `cd_entrada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `tb_pizza`
--
ALTER TABLE `tb_pizza`
  MODIFY `cd_pizza` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `tb_pizza_menu`
--
ALTER TABLE `tb_pizza_menu`
  MODIFY `cd_pizza` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
