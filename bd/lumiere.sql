-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24-Nov-2025 às 12:41
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `lumiere`
--
CREATE DATABASE IF NOT EXISTS `lumiere` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `lumiere`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_detalhada`
--

CREATE TABLE `avaliacao_detalhada` (
  `id_avaliacao_det` int(11) NOT NULL,
  `nota` int(11) NOT NULL,
  `comentario` varchar(500) DEFAULT NULL,
  `opiniao` enum('Sim','Não','Mais ou menos') NOT NULL,
  `data_avaliacao_det` datetime DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_obras` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `avaliacao_detalhada`
--

INSERT INTO `avaliacao_detalhada` (`id_avaliacao_det`, `nota`, `comentario`, `opiniao`, `data_avaliacao_det`, `id_usuario`, `id_obras`) VALUES
(2, 7, 'Gostei, mas esperava mais do final.', 'Mais ou menos', '2025-10-30 12:04:39', 3, 2),
(3, 10, 'Um clássico, simplesmente perfeito.', 'Sim', '2025-10-30 12:04:39', 4, 1),
(4, 8, 'História envolvente e emocionante.', 'Sim', '2025-10-30 12:04:39', 2, 4),
(5, 6, 'Legal, mas algumas partes foram confusas.', 'Mais ou menos', '2025-10-30 12:04:39', 5, 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_rapida`
--

CREATE TABLE `avaliacao_rapida` (
  `id_avaliacao_rap` int(11) NOT NULL,
  `nota` int(11) NOT NULL,
  `comentario` varchar(500) DEFAULT NULL,
  `opiniao` enum('Sim','Não','Mais ou menos') NOT NULL,
  `data_avaliacao_rap` datetime DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_obras` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `avaliacao_rapida`
--

INSERT INTO `avaliacao_rapida` (`id_avaliacao_rap`, `nota`, `comentario`, `opiniao`, `data_avaliacao_rap`, `id_usuario`, `id_obras`) VALUES
(1, 10, 'Maravilhoso!', 'Sim', '2025-10-30 12:05:12', 1, 1),
(2, 5, 'Não gostei muito.', 'Não', '2025-10-30 12:05:12', 2, 2),
(4, 9, 'Excelente produção.', 'Sim', '2025-10-30 12:05:12', 4, 4),
(5, 7, 'Bom, mas um pouco longo.', 'Mais ou menos', '2025-10-30 12:05:12', 5, 5),
(6, 4, 'AME=EEEEEEI EU SOU A GLINDA', 'Sim', '2025-11-24 08:06:02', 7, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `criterios`
--

CREATE TABLE `criterios` (
  `id_criterios` int(11) NOT NULL,
  `originalidade` int(11) NOT NULL,
  `personagens` int(11) NOT NULL,
  `enredo` int(11) DEFAULT NULL,
  `fluidez_leitura` int(11) DEFAULT NULL,
  `ambientacao` int(11) DEFAULT NULL,
  `roteiro` int(11) DEFAULT NULL,
  `atuacao` int(11) DEFAULT NULL,
  `trilha_sonora` int(11) DEFAULT NULL,
  `fotografia` int(11) DEFAULT NULL,
  `id_avaliacao_det` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `estantes`
--

CREATE TABLE `estantes` (
  `id_estantes` int(11) NOT NULL,
  `nome_estante` varchar(255) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `estantes`
--

INSERT INTO `estantes` (`id_estantes`, `nome_estante`, `descricao`, `id_usuario`) VALUES
(1, 'Favoritos', 'Obras que mais gostei.', 1),
(2, 'Me Identifico', 'Filmes que são a minha cara.', 2),
(3, 'Animação', 'Obras antigas e marcantes.s', 3),
(27, 'Musicais', 'musicais amo', 6);

-- --------------------------------------------------------

--
-- Estrutura da tabela `estante_obras`
--

CREATE TABLE `estante_obras` (
  `id` int(11) NOT NULL,
  `id_estantes` int(11) NOT NULL,
  `id_obras` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `estante_obras`
--

INSERT INTO `estante_obras` (`id`, `id_estantes`, `id_obras`) VALUES
(73, 1, 1),
(74, 1, 5),
(75, 1, 39),
(76, 1, 37),
(77, 2, 4),
(78, 2, 28),
(79, 2, 30),
(80, 3, 28),
(81, 3, 30),
(82, 3, 37),
(83, 3, 40),
(89, 27, 5),
(90, 27, 4),
(91, 27, 41);

-- --------------------------------------------------------

--
-- Estrutura da tabela `obras`
--

CREATE TABLE `obras` (
  `id_obras` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `tipo` enum('Livro','Série','Filme') NOT NULL,
  `descricao` varchar(500) NOT NULL,
  `ano_lancamento` datetime NOT NULL,
  `autor` varchar(255) NOT NULL,
  `capa` varchar(300) DEFAULT NULL,
  `editora` varchar(255) DEFAULT NULL,
  `data_cadastro` datetime DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `obras`
--

INSERT INTO `obras` (`id_obras`, `titulo`, `tipo`, `descricao`, `ano_lancamento`, `autor`, `capa`, `editora`, `data_cadastro`, `id_usuario`) VALUES
(1, 'Jantar secreto', 'Livro', 'Pobres que precisam de dinheiro fazem jantares canibais.', '2015-07-29 00:00:00', 'Raphael Montes', 'senhor.jpg', 'Companhia das Letras', '2025-10-30 12:03:50', 1),
(2, 'Stranger Things', 'Série', 'Crianças enfrentam mistérios sobrenaturais em Hawkins.', '2016-07-15 00:00:00', 'Irmãos Duffer', 'stranger.jpg', NULL, '2025-10-30 12:03:50', 2),
(4, 'Wicked', 'Filme', 'Bruxa verde e rosa sendo amigas.', '2024-11-22 00:00:00', 'Jon M. Chu', '6924434b56bbe_obra.png', '', '2025-10-30 12:03:50', 3),
(5, 'La La Land', 'Filme', 'Um pianista e uma atriz vivem um romance em Los Angeles.', '2016-12-09 00:00:00', 'Damien Chazelle', 'lalaland.png', NULL, '2025-10-30 12:03:50', 4),
(28, 'She-Ra e as Princesas do Poder', 'Série', 'A soldado Adora encontra uma espada mágica e se torna a heroína She-Ra. A jovem se junta à Rebelião, mas sua melhor amiga fica do lado da Horda do Mal.', '2018-11-13 00:00:00', 'ND Stevenson', '69223b9471dca_shera.jpg', '', '2025-11-22 19:39:16', 1),
(30, 'Miraculous: As Aventuras de Ladybug', 'Série', 'A super-heroína Marinette, mais conhecida como Ladybug, e seu parceiro Adrien, famoso pelo nome de Cat Noir, têm a missão de salvar a cidade de Paris de um misterioso vilão, mantendo sigilo sobre suas identidades secretas.', '2015-09-01 00:00:00', ' Thomas Astruc', '69223d68eaf35_miraculous.jpg', '', '2025-11-22 19:47:04', 1),
(32, 'Pantera Negra ', 'Filme', 'A história de T\'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, a inteligência e os sentidos apurados.', '2018-02-15 00:00:00', 'Ryan Coogler', '69243bd4ea1bd_Black_Panther_2018.jpg', '', '2025-11-24 08:04:52', 1),
(33, 'Dom Casmurro', 'Livro', 'Usuários do Google\r\nDom Casmurro é um romance escrito por Machado de Assis, publicado em 1899 pela Livraria Garnier. Escrito para publicação em livro, o que ocorreu em 1900 – embora com data do ano anterior', '1899-01-01 00:00:00', 'Machado de Assis', '69243cb60409e_domcasmurro.jpg', 'Principia', '2025-11-24 08:08:38', 1),
(34, 'O Cortiço', 'Livro', 'O Cortiço é um romance naturalista do brasileiro Aluísio Azevedo, publicado em 1890, que denuncia a exploração e as péssimas condições de vida dos moradores das estalagens ou dos cortiços cariocas do final do século XIX e posto a denunciar o capitalismo selvagem. ', '1890-01-01 00:00:00', 'Aluísio Azevedo', '69243d15c2b2c_61hI7QLrTkL.jpg', 'Principia', '2025-11-24 08:10:13', 1),
(35, 'La Casa de Papel', 'Série', 'Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu líder manipula a polícia para realizar um plano que pode ser o maior roubo da história ou uma missão em vão.', '2017-05-02 00:00:00', 'Álex Pina', '69243d7ba16b9_66484465_925583554458779_7770430943315099648_o.jpg', '', '2025-11-24 08:11:55', 1),
(36, 'Bridgerton', 'Série', 'Oito irmãos inseparáveis buscam amor e felicidade na alta sociedade de Londres.', '2020-12-25 00:00:00', 'Chris Van Dusen, Julia Quinn', '69243e06ec532_814C3lt4bkL.jpg', '', '2025-11-24 08:14:14', 1),
(37, 'Homem-Aranha: Através do Aranhaverso', 'Filme', 'Depois de se reunir com Gwen Stacy, Homem-Aranha é jogado no multiverso. Lá, o super-herói aracnídeo encontra uma numerosa equipe encarregada de proteger sua própria existência.', '2023-06-01 00:00:00', 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson', '69243ecc71477_homem-aranha-atraves-do-aranhaverso_31-05-23_03-53-46_max.jpg', '', '2025-11-24 08:17:32', 1),
(38, ' É Assim Que Acaba', 'Filme', 'Lily Bloom decide começar uma nova vida em Boston e tentar abrir o seu próprio negócio. Como consequência de sua mudança de vida, Lily acredita que encontrou o amor verdadeiro com Ryle, um charmoso neurocirurgião. No entanto, as coisas se complicam quando um incidente doloroso desencadeia um trauma do passado e também, quando seu primeiro amor reaparece.', '2024-08-09 00:00:00', 'Justin Baldoni', '6924410ce7746_eassim.png', '', '2025-11-24 08:27:08', 1),
(39, 'Breaking Bad', 'Série', 'Walter White é um modesto professor de química do ensino médio. Quando descobre que tem câncer terminal, ele precisa encontrar uma maneira de garantir o bem-estar da família e toma uma decisão drástica: produzir e comercializar metanfetamina.', '2008-01-20 00:00:00', 'Vince Gilligan', '6924417f83702_breaking-bad.jpg', '', '2025-11-24 08:29:03', 1),
(40, 'O Pequeno Príncipe', 'Livro', 'Le Petit Prince é uma novela do escritor, aviador aristocrata francês Antoine de Saint-Exupéry, originalmente publicada em inglês e francês em abril de 1943 nos Estados Unidos. Durante a Segunda Guerra Mundial, Saint-Exupéry foi exilado para a América do Norte', '1943-04-01 00:00:00', 'Antoine de Saint-Exupéry', '692441f3353f5_capa-pequeno-principe.jpg', 'Companhia das Letrinhas', '2025-11-24 08:30:59', 1),
(41, 'Mamma Mia!', 'Filme', 'Donna, a proprietária de um hotel nas ilhas gregas, está preparando o casamento de sua filha com a ajuda de duas amigas. Enquanto isso, a noiva Sophie convida três ex-namorados de sua mãe na esperança de conhecer seu verdadeiro pai.', '2008-09-12 00:00:00', 'Phyllida Lloyd', '692444633c9c2_obra.jpg', '', '2025-11-24 08:38:45', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `temporadas`
--

CREATE TABLE `temporadas` (
  `id_temporadas` int(11) NOT NULL,
  `numero_temp` int(11) DEFAULT NULL,
  `numero_eps` int(11) DEFAULT NULL,
  `id_obras` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `temporadas`
--

INSERT INTO `temporadas` (`id_temporadas`, `numero_temp`, `numero_eps`, `id_obras`) VALUES
(1, 1, 8, 2),
(2, 2, 9, 2),
(3, 3, 8, 2),
(4, 4, 9, 2),
(5, 5, 8, 2),
(12, 5, 53, 28),
(13, 5, 130, 30),
(14, 5, 47, 35),
(15, 4, 24, 36),
(16, 5, 67, 39);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data_cadastro` datetime DEFAULT NULL,
  `tipo_usuario` enum('Administrador','Avaliador') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nome`, `email`, `senha`, `data_cadastro`, `tipo_usuario`) VALUES
(1, 'Ana Clara', 'ana.clara@example.com', 'senha123', '2025-10-30 11:58:04', 'Avaliador'),
(2, 'Carlos Souza', 'carlos.souza@example.com', '123456', '2025-10-30 11:58:04', 'Administrador'),
(3, 'Maria Oliveira', 'maria.oliveira@example.com', 'senha789', '2025-10-30 11:58:04', 'Avaliador'),
(4, 'João Pereira', 'joao.pereira@example.com', 'abc123', '2025-10-30 11:58:04', 'Avaliador'),
(5, 'Beatriz Krisan', 'beatriz.krisan@example.com', 'teste2025', '2025-10-30 11:58:04', 'Administrador'),
(6, 'Ana Clara Rivas', 'anaclararivasbronzeri@gmail.com', '123456', '2025-11-21 19:02:23', 'Avaliador'),
(7, 'Ana ADM', 'abronzeririvas@gmail.com', '1234567', '2025-11-22 23:14:10', 'Administrador'),
(8, 'Hulks', 'hulksouza@gmail.com', '123', '2025-11-24 07:56:12', 'Avaliador');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `avaliacao_detalhada`
--
ALTER TABLE `avaliacao_detalhada`
  ADD PRIMARY KEY (`id_avaliacao_det`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_obras` (`id_obras`);

--
-- Índices para tabela `avaliacao_rapida`
--
ALTER TABLE `avaliacao_rapida`
  ADD PRIMARY KEY (`id_avaliacao_rap`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_obras` (`id_obras`);

--
-- Índices para tabela `criterios`
--
ALTER TABLE `criterios`
  ADD PRIMARY KEY (`id_criterios`),
  ADD KEY `id_avaliacao_det` (`id_avaliacao_det`);

--
-- Índices para tabela `estantes`
--
ALTER TABLE `estantes`
  ADD PRIMARY KEY (`id_estantes`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices para tabela `estante_obras`
--
ALTER TABLE `estante_obras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_estantes` (`id_estantes`),
  ADD KEY `id_obras` (`id_obras`);

--
-- Índices para tabela `obras`
--
ALTER TABLE `obras`
  ADD PRIMARY KEY (`id_obras`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices para tabela `temporadas`
--
ALTER TABLE `temporadas`
  ADD PRIMARY KEY (`id_temporadas`),
  ADD KEY `id_obras` (`id_obras`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `avaliacao_detalhada`
--
ALTER TABLE `avaliacao_detalhada`
  MODIFY `id_avaliacao_det` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `avaliacao_rapida`
--
ALTER TABLE `avaliacao_rapida`
  MODIFY `id_avaliacao_rap` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `criterios`
--
ALTER TABLE `criterios`
  MODIFY `id_criterios` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `estantes`
--
ALTER TABLE `estantes`
  MODIFY `id_estantes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de tabela `estante_obras`
--
ALTER TABLE `estante_obras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT de tabela `obras`
--
ALTER TABLE `obras`
  MODIFY `id_obras` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de tabela `temporadas`
--
ALTER TABLE `temporadas`
  MODIFY `id_temporadas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `avaliacao_detalhada`
--
ALTER TABLE `avaliacao_detalhada`
  ADD CONSTRAINT `avaliacao_detalhada_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `avaliacao_detalhada_ibfk_2` FOREIGN KEY (`id_obras`) REFERENCES `obras` (`id_obras`);

--
-- Limitadores para a tabela `avaliacao_rapida`
--
ALTER TABLE `avaliacao_rapida`
  ADD CONSTRAINT `avaliacao_rapida_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `avaliacao_rapida_ibfk_2` FOREIGN KEY (`id_obras`) REFERENCES `obras` (`id_obras`);

--
-- Limitadores para a tabela `criterios`
--
ALTER TABLE `criterios`
  ADD CONSTRAINT `criterios_ibfk_1` FOREIGN KEY (`id_avaliacao_det`) REFERENCES `avaliacao_detalhada` (`id_avaliacao_det`);

--
-- Limitadores para a tabela `estantes`
--
ALTER TABLE `estantes`
  ADD CONSTRAINT `estantes_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Limitadores para a tabela `estante_obras`
--
ALTER TABLE `estante_obras`
  ADD CONSTRAINT `estante_obras_ibfk_1` FOREIGN KEY (`id_estantes`) REFERENCES `estantes` (`id_estantes`),
  ADD CONSTRAINT `estante_obras_ibfk_2` FOREIGN KEY (`id_obras`) REFERENCES `obras` (`id_obras`);

--
-- Limitadores para a tabela `obras`
--
ALTER TABLE `obras`
  ADD CONSTRAINT `obras_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Limitadores para a tabela `temporadas`
--
ALTER TABLE `temporadas`
  ADD CONSTRAINT `temporadas_ibfk_1` FOREIGN KEY (`id_obras`) REFERENCES `obras` (`id_obras`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
