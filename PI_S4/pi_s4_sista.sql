-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 15 juin 2024 à 20:13
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pi_s4_sista`
--

-- --------------------------------------------------------

--
-- Structure de la table `activiteseconomiques`
--

DROP TABLE IF EXISTS `activiteseconomiques`;
CREATE TABLE IF NOT EXISTS `activiteseconomiques` (
  `ID_ActiviteEco` int NOT NULL,
  `NumeroVillage` int DEFAULT NULL,
  `TypeActivite` varchar(255) DEFAULT NULL,
  `AutresDetailsActivite` text,
  PRIMARY KEY (`ID_ActiviteEco`),
  KEY `NuméroVillage` (`NumeroVillage`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE IF NOT EXISTS `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE IF NOT EXISTS `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissions_group_id_b120cbf9` (`group_id`),
  KEY `auth_group_permissions_permission_id_84c5c92e` (`permission_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE IF NOT EXISTS `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  KEY `auth_permission_content_type_id_2f476e4b` (`content_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add commune', 7, 'add_commune'),
(26, 'Can change commune', 7, 'change_commune'),
(27, 'Can delete commune', 7, 'delete_commune'),
(28, 'Can view commune', 7, 'view_commune'),
(29, 'Can add wilaya', 8, 'add_wilaya'),
(30, 'Can change wilaya', 8, 'change_wilaya'),
(31, 'Can delete wilaya', 8, 'delete_wilaya'),
(32, 'Can view wilaya', 8, 'view_wilaya'),
(33, 'Can add village', 9, 'add_village'),
(34, 'Can change village', 9, 'change_village'),
(35, 'Can delete village', 9, 'delete_village'),
(36, 'Can view village', 9, 'view_village'),
(37, 'Can add maghataa', 10, 'add_maghataa'),
(38, 'Can change maghataa', 10, 'change_maghataa'),
(39, 'Can delete maghataa', 10, 'delete_maghataa'),
(40, 'Can view maghataa', 10, 'view_maghataa'),
(41, 'Can add users', 11, 'add_users'),
(42, 'Can change users', 11, 'change_users'),
(43, 'Can delete users', 11, 'delete_users'),
(44, 'Can view users', 11, 'view_users'),
(45, 'Can add uses', 11, 'add_uses'),
(46, 'Can change uses', 11, 'change_uses'),
(47, 'Can delete uses', 11, 'delete_uses'),
(48, 'Can view uses', 11, 'view_uses'),
(49, 'Can add user', 12, 'add_user'),
(50, 'Can change user', 12, 'change_user'),
(51, 'Can delete user', 12, 'delete_user'),
(52, 'Can view user', 12, 'view_user'),
(53, 'Can add formilair', 13, 'add_formilair'),
(54, 'Can change formilair', 13, 'change_formilair'),
(55, 'Can delete formilair', 13, 'delete_formilair'),
(56, 'Can view formilair', 13, 'view_formilair'),
(57, 'Can add moughata', 14, 'add_moughata'),
(58, 'Can change moughata', 14, 'change_moughata'),
(59, 'Can delete moughata', 14, 'delete_moughata'),
(60, 'Can view moughata', 14, 'view_moughata'),
(61, 'Can add question', 15, 'add_question'),
(62, 'Can change question', 15, 'change_question'),
(63, 'Can delete question', 15, 'delete_question'),
(64, 'Can view question', 15, 'view_question'),
(65, 'Can add reponse', 16, 'add_reponse'),
(66, 'Can change reponse', 16, 'change_reponse'),
(67, 'Can delete reponse', 16, 'delete_reponse'),
(68, 'Can view reponse', 16, 'view_reponse'),
(69, 'Can add infrastructures village', 17, 'add_infrastructuresvillage'),
(70, 'Can change infrastructures village', 17, 'change_infrastructuresvillage'),
(71, 'Can delete infrastructures village', 17, 'delete_infrastructuresvillage'),
(72, 'Can view infrastructures village', 17, 'view_infrastructuresvillage'),
(73, 'Can add estimation ressources', 18, 'add_estimationressources'),
(74, 'Can change estimation ressources', 18, 'change_estimationressources'),
(75, 'Can delete estimation ressources', 18, 'delete_estimationressources'),
(76, 'Can view estimation ressources', 18, 'view_estimationressources'),
(77, 'Can add demographie', 19, 'add_demographie'),
(78, 'Can change demographie', 19, 'change_demographie'),
(79, 'Can delete demographie', 19, 'delete_demographie'),
(80, 'Can view demographie', 19, 'view_demographie'),
(81, 'Can add coordonnees gps', 20, 'add_coordonneesgps'),
(82, 'Can change coordonnees gps', 20, 'change_coordonneesgps'),
(83, 'Can delete coordonnees gps', 20, 'delete_coordonneesgps'),
(84, 'Can view coordonnees gps', 20, 'view_coordonneesgps'),
(85, 'Can add activites economiques', 21, 'add_activiteseconomiques'),
(86, 'Can change activites economiques', 21, 'change_activiteseconomiques'),
(87, 'Can delete activites economiques', 21, 'delete_activiteseconomiques'),
(88, 'Can view activites economiques', 21, 'view_activiteseconomiques');

-- --------------------------------------------------------

--
-- Structure de la table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE IF NOT EXISTS `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$600000$cVeQ6kXrpEJNWnWO8974hA$WR1IiOgEwYtngOZfq2cgQEV+Khz8UxMG3uORf2uiDBw=', '2024-03-01 06:59:23.844844', 1, 'admin', '', '', '', 1, 1, '2024-03-01 06:59:02.857790'),
(2, 'pbkdf2_sha256$600000$xZEnGMyFxJck8em6mkdIBy$oSv4ZKuVwBJCGuBxe9Dr0V3vkYniYXc3OisIPXBvmp0=', NULL, 1, 'hp_laptop', '', '', '', 1, 1, '2024-03-01 07:19:43.210163');

-- --------------------------------------------------------

--
-- Structure de la table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
CREATE TABLE IF NOT EXISTS `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_user_id_6a12ed8b` (`user_id`),
  KEY `auth_user_groups_group_id_97559544` (`group_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
CREATE TABLE IF NOT EXISTS `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permissions_user_id_a95ead1b` (`user_id`),
  KEY `auth_user_user_permissions_permission_id_1fbb5f2c` (`permission_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commune`
--

DROP TABLE IF EXISTS `commune`;
CREATE TABLE IF NOT EXISTS `commune` (
  `ID_commune` int NOT NULL AUTO_INCREMENT,
  `Nom_commune` varchar(100) NOT NULL,
  `ID_maghataa_id` int NOT NULL,
  PRIMARY KEY (`ID_commune`),
  KEY `myapp_commune_ID_maghataa_id_41ba4f42` (`ID_maghataa_id`)
) ENGINE=MyISAM AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `commune`
--

INSERT INTO `commune` (`ID_commune`, `Nom_commune`, `ID_maghataa_id`) VALUES
(53, 'meghtaa lehjar', 53),
(35, 'commune2', 4),
(14, 'commune1', 9),
(13, 'commune4', 8),
(12, 'commune3', 8),
(11, 'commune2', 8),
(10, 'commune1', 8),
(9, 'commune4', 7),
(8, 'commune3', 7),
(7, 'commune2', 7),
(5, 'commune4', 6),
(6, 'commune1', 7),
(28, 'commune3', 2),
(29, 'commune4', 2),
(30, 'test ajou5', 47),
(31, 'commune2', 3),
(32, 'commune3', 3),
(27, 'commune2', 2),
(26, 'commune1', 2),
(25, 'male', 53),
(24, 'commune3', 1),
(23, 'commune2', 1),
(22, 'commune1', 1),
(21, 'commune4', 10),
(20, 'commune3', 10),
(19, 'commune2', 10),
(18, 'commune1', 10),
(17, 'commune4', 9),
(16, 'commune3', 9),
(15, 'commune2', 9),
(4, 'commune3', 6),
(3, 'commune2', 6),
(2, 'commune1', 6),
(1, 'commune1', 6),
(33, 'commune4', 3),
(36, 'commune3', 4),
(37, 'commune4', 4),
(38, 'commune1', 15),
(39, 'commune2', 15),
(40, 'commune3', 15),
(55, 'supnum', 17);

-- --------------------------------------------------------

--
-- Structure de la table `coordonneesgps`
--

DROP TABLE IF EXISTS `coordonneesgps`;
CREATE TABLE IF NOT EXISTS `coordonneesgps` (
  `ID_CoordonneesGPS` int NOT NULL,
  `NumeroVillage` int DEFAULT NULL,
  `Longitude` float DEFAULT NULL,
  `Latitude` float DEFAULT NULL,
  `TypeLocalite` varchar(255) DEFAULT NULL,
  `StructureHabitat` varchar(255) DEFAULT NULL,
  `ObservationsAccesLocalite` text,
  PRIMARY KEY (`ID_CoordonneesGPS`),
  KEY `NuméroVillage` (`NumeroVillage`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `demographie`
--

DROP TABLE IF EXISTS `demographie`;
CREATE TABLE IF NOT EXISTS `demographie` (
  `ID_Demographie` int NOT NULL,
  `NumeroVillage` int DEFAULT NULL,
  `PopulationFixe` int DEFAULT NULL,
  `NombreMenages` int DEFAULT NULL,
  `AutresInfosDemographie` text,
  PRIMARY KEY (`ID_Demographie`),
  KEY `NuméroVillage` (`NumeroVillage`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE IF NOT EXISTS `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE IF NOT EXISTS `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(2, 'auth', 'permission'),
(3, 'auth', 'group'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session'),
(7, 'myapp', 'commune'),
(8, 'myapp', 'wilaya'),
(9, 'myapp', 'village'),
(10, 'myapp', 'maghataa'),
(11, 'myapp', 'users'),
(12, 'myapp', 'user'),
(13, 'myapp', 'formilair'),
(14, 'myapp', 'moughata'),
(15, 'myapp', 'question'),
(16, 'myapp', 'reponse'),
(17, 'myapp', 'infrastructuresvillage'),
(18, 'myapp', 'estimationressources'),
(19, 'myapp', 'demographie'),
(20, 'myapp', 'coordonneesgps'),
(21, 'myapp', 'activiteseconomiques');

-- --------------------------------------------------------

--
-- Structure de la table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE IF NOT EXISTS `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2024-03-01 06:11:00.418731'),
(2, 'auth', '0001_initial', '2024-03-01 06:11:01.067084'),
(3, 'admin', '0001_initial', '2024-03-01 06:11:01.249758'),
(4, 'admin', '0002_logentry_remove_auto_add', '2024-03-01 06:11:01.254826'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2024-03-01 06:11:01.261754'),
(6, 'contenttypes', '0002_remove_content_type_name', '2024-03-01 06:11:01.330179'),
(7, 'auth', '0002_alter_permission_name_max_length', '2024-03-01 06:11:01.362505'),
(8, 'auth', '0003_alter_user_email_max_length', '2024-03-01 06:11:01.396023'),
(9, 'auth', '0004_alter_user_username_opts', '2024-03-01 06:11:01.402983'),
(10, 'auth', '0005_alter_user_last_login_null', '2024-03-01 06:11:01.443996'),
(11, 'auth', '0006_require_contenttypes_0002', '2024-03-01 06:11:01.445939'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2024-03-01 06:11:01.453454'),
(13, 'auth', '0008_alter_user_username_max_length', '2024-03-01 06:11:01.484697'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2024-03-01 06:11:01.519305'),
(15, 'auth', '0010_alter_group_name_max_length', '2024-03-01 06:11:01.551497'),
(16, 'auth', '0011_update_proxy_permissions', '2024-03-01 06:11:01.558861'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2024-03-01 06:11:01.593968'),
(18, 'myapp', '0001_initial', '2024-03-01 06:45:09.664523'),
(19, 'myapp', '0002_user_role_user_tel', '2024-03-01 06:45:09.753375'),
(20, 'myapp', '0003_alter_user_tel', '2024-03-01 06:45:09.756383'),
(37, 'myapp', '0004_commune_wilaya_village_maghataa_commune_id_maghataa', '2024-03-11 01:47:46.994191'),
(38, 'myapp', '0005_rename_user_users', '2024-03-11 01:47:46.997184'),
(29, 'sessions', '0001_initial', '2024-03-01 06:45:10.337350');

-- --------------------------------------------------------

--
-- Structure de la table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
CREATE TABLE IF NOT EXISTS `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `estimationressources`
--

DROP TABLE IF EXISTS `estimationressources`;
CREATE TABLE IF NOT EXISTS `estimationressources` (
  `ID_EstimationRessources` int NOT NULL,
  `NumeroVillage` int DEFAULT NULL,
  `NombreFamillesEstime` int DEFAULT NULL,
  `PopulationEstimee` int DEFAULT NULL,
  `EstimationBetail` int DEFAULT NULL,
  `AnneeEstimation` int DEFAULT NULL,
  PRIMARY KEY (`ID_EstimationRessources`),
  KEY `NuméroVillage` (`NumeroVillage`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `formilair`
--

DROP TABLE IF EXISTS `formilair`;
CREATE TABLE IF NOT EXISTS `formilair` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(100) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `formilair`
--

INSERT INTO `formilair` (`id`, `titre`, `description`) VALUES
(1, 'FICHE VILLAGE', 'description du formulaire'),
(2, 'promotion data', 'desc');

-- --------------------------------------------------------

--
-- Structure de la table `infrastructur`
--

DROP TABLE IF EXISTS `infrastructur`;
CREATE TABLE IF NOT EXISTS `infrastructur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(128) NOT NULL,
  `description` varchar(128) NOT NULL,
  `type` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_village` (`type`)
) ENGINE=MyISAM AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `infrastructur`
--

INSERT INTO `infrastructur` (`id`, `nom`, `description`, `type`) VALUES
(4, 'Unité de santé de base', ' ', 1),
(5, 'Unité de santé de base', ' ', 1),
(6, 'Poste de santé', ' ', 1),
(7, 'Centre de santé', ' ', 1),
(8, 'Salle d’alphabétisation', ' ', 7),
(9, 'Mahadra', ' ', 7),
(10, 'Lycée', ' ', 7),
(11, 'Collège', ' ', 7),
(12, 'Ecole primaire', ' ', 7),
(13, 'Puits moderne', ' ', 6),
(14, 'Puits traditionnel ', ' ', 6),
(15, 'Contre-puits', ' ', 6),
(16, 'Forage', ' ', 6),
(17, 'Pompe équipée d’éolienne', ' ', 6),
(18, 'Pompe équipée de solaire', ' ', 6),
(19, 'Pompe thermique', ' ', 6),
(20, 'Puits ou Forage à motricité humaine', ' ', 6),
(21, 'Piézomètre', ' ', 6),
(22, 'Sondage', ' ', 6),
(23, 'Source', ' ', 6),
(24, 'Tamourt ou Mare', ' ', 6),
(25, 'Réseau de distribution d’eau  ', ' ', 6),
(26, 'Barrage', ' ', 6),
(27, 'Digue ou diguette', ' ', 6),
(28, 'Cours d`eau permanent', ' ', 6),
(29, 'Cours d`eau temporaire', ' ', 6),
(30, 'Marché  ', ' ', 5),
(31, 'Marché de bétail', ' ', 5),
(32, 'Marché hebdomadaire', ' ', 5),
(33, 'Boucherie -vente de viande', ' ', 5),
(34, 'Banque de céréales (silos)', ' ', 4),
(35, 'Forêt ', ' ', 4),
(36, 'Oasis', ' ', 4),
(37, 'Poste vétérinaire', ' ', 4),
(38, 'Routes bitumées', ' ', 3),
(39, 'Route en terre améliorée', ' ', 3),
(40, 'Bâtiment administratif', ' ', 3),
(41, 'Bâtiment communal  ', ' ', 3);

-- --------------------------------------------------------

--
-- Structure de la table `infrastructuresvillage`
--

DROP TABLE IF EXISTS `infrastructuresvillage`;
CREATE TABLE IF NOT EXISTS `infrastructuresvillage` (
  `ID_Infrastructures` int NOT NULL AUTO_INCREMENT,
  `NumeroVillage` int DEFAULT NULL,
  `TypeInfrastructure` varchar(255) DEFAULT NULL,
  `NombreTotal` int DEFAULT NULL,
  `NombreFonctionnelles` int DEFAULT NULL,
  `NombreNonFonctionnelles` int DEFAULT NULL,
  `date_info` date DEFAULT NULL,
  PRIMARY KEY (`ID_Infrastructures`),
  KEY `NuméroVillage` (`NumeroVillage`),
  KEY `fk_village` (`TypeInfrastructure`(250))
) ENGINE=MyISAM AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `infrastructuresvillage`
--

INSERT INTO `infrastructuresvillage` (`ID_Infrastructures`, `NumeroVillage`, `TypeInfrastructure`, `NombreTotal`, `NombreFonctionnelles`, `NombreNonFonctionnelles`, `date_info`) VALUES
(74, 8, '7', 14, 10, 4, '2024-05-12'),
(75, 8, '5', 2, 2, 0, '2024-05-12'),
(76, 8, '33', 2, 0, 2, '2024-05-12'),
(77, 8, '32', 7, 7, 0, '2024-05-12'),
(78, 7, '35', 5, 1, 4, '2024-06-14');

-- --------------------------------------------------------

--
-- Structure de la table `moughata`
--

DROP TABLE IF EXISTS `moughata`;
CREATE TABLE IF NOT EXISTS `moughata` (
  `ID_maghataa` int NOT NULL AUTO_INCREMENT,
  `Nom_maghataa` varchar(255) DEFAULT NULL,
  `ID_wilaya` int DEFAULT NULL,
  PRIMARY KEY (`ID_maghataa`),
  KEY `ID_wilaya` (`ID_wilaya`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `moughata`
--

INSERT INTO `moughata` (`ID_maghataa`, `Nom_maghataa`, `ID_wilaya`) VALUES
(39, 'Bir Moghrein', 11),
(40, 'Fdérik', 11),
(41, 'Zouérat', 11),
(35, 'Ould Yengé', 10),
(36, 'Sélibaby', 10),
(37, 'Gouraye', 10),
(38, 'Ould Mbareck', 10),
(33, 'Tichit', 9),
(34, 'Tidjikdja', 9),
(21, 'Boutilimit', 6),
(22, 'Keur Macène', 6),
(23, 'Méderdra', 6),
(24, 'Ould Teguedi', 6),
(25, 'RKiz', 6),
(26, 'Atar', 7),
(27, 'Chinguetti', 7),
(28, 'Ouadane', 7),
(29, 'Tidjikdja', 7),
(30, 'Dakhlet Nouadhibou', 8),
(31, 'El Mina', 8),
(32, 'Moudjeria', 9),
(1, 'Akebou', 1),
(2, 'Amourj', 1),
(3, 'Bassiknou', 1),
(4, 'Tamchekett', 1),
(5, 'Tintane', 1),
(6, 'Aoujeft', 7),
(7, 'Kobeni', 2),
(8, 'Toujeil', 2),
(9, 'Mabrouka', 3),
(10, 'Moudjéria', 3),
(11, 'Ghabou', 3),
(12, 'Ould Yengé', 3),
(13, 'Kankossa', 4),
(14, 'Kaédi', 4),
(15, 'Maghama', 4),
(16, 'Monguel', 4),
(17, 'Aleg', 5),
(18, 'Bababé', 5),
(19, 'Boghé', 5),
(20, 'Mbagne', 5),
(42, 'Akjoujt', 12),
(43, 'Akjoujt', 12),
(44, 'Dar-Naim', 13),
(45, 'Teyarett', 13),
(46, 'Toujounine', 13),
(47, 'Arafat', 14),
(48, 'Ksar', 14),
(49, 'Sebkha', 14),
(50, 'Tevragh-Zeina', 14),
(51, 'El Mina', 15),
(52, 'Riyadh', 15),
(53, 'Maghta-lehjar', 5),
(54, 'test', 1),
(55, 'test', 1),
(56, 'test', 1),
(57, 'test', 1),
(59, 'aliy ahmedjj', 5),
(60, 'aliy sidahmed', 2);

-- --------------------------------------------------------

--
-- Structure de la table `myapp_commune`
--

DROP TABLE IF EXISTS `myapp_commune`;
CREATE TABLE IF NOT EXISTS `myapp_commune` (
  `ID_commune` int NOT NULL,
  `Nom_commune` varchar(100) NOT NULL,
  `ID_maghataa_id` int NOT NULL,
  PRIMARY KEY (`ID_commune`),
  KEY `myapp_commune_ID_maghataa_id_41ba4f42` (`ID_maghataa_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `myapp_maghataa`
--

DROP TABLE IF EXISTS `myapp_maghataa`;
CREATE TABLE IF NOT EXISTS `myapp_maghataa` (
  `ID_maghataa` int NOT NULL,
  `Nom_maghataa` varchar(100) NOT NULL,
  `ID_wilaya_id` int NOT NULL,
  PRIMARY KEY (`ID_maghataa`),
  KEY `myapp_maghataa_ID_wilaya_id_378c2293` (`ID_wilaya_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `myapp_users`
--

DROP TABLE IF EXISTS `myapp_users`;
CREATE TABLE IF NOT EXISTS `myapp_users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tel` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `myapp_village`
--

DROP TABLE IF EXISTS `myapp_village`;
CREATE TABLE IF NOT EXISTS `myapp_village` (
  `ID_village` int NOT NULL,
  `Nom_village` varchar(100) NOT NULL,
  `ID_commune_id` int NOT NULL,
  PRIMARY KEY (`ID_village`),
  KEY `myapp_village_ID_commune_id_7334bcdb` (`ID_commune_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `myapp_wilaya`
--

DROP TABLE IF EXISTS `myapp_wilaya`;
CREATE TABLE IF NOT EXISTS `myapp_wilaya` (
  `ID_wilaya` int NOT NULL,
  `Nom_wilaya` varchar(100) NOT NULL,
  PRIMARY KEY (`ID_wilaya`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `id` int NOT NULL AUTO_INCREMENT,
  `formilair_id` int DEFAULT NULL,
  `text` text,
  `type` varchar(255) DEFAULT NULL,
  `choices` text,
  `categorie` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `formilair_id` (`formilair_id`)
) ENGINE=MyISAM AUTO_INCREMENT=564 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`id`, `formilair_id`, `text`, `type`, `choices`, `categorie`) VALUES
(538, 1, 'Parleurs hassania', 'number', '', 'Identification du village'),
(539, 1, 'Parleurs polare', 'number', '[]', 'Identification du village'),
(540, 1, 'Parleurs Soninké ', 'number', '', 'Identification du village'),
(541, 1, 'Parleurs Wolof ', 'number', '', 'Identification du village'),
(542, 1, 'Parleurs Autres ', 'number', '[]', 'Identification du village'),
(543, 1, 'Population fixe ', 'number', '', 'Identification du village'),
(544, 1, 'Nb de ménages ', 'number', '', 'Identification du village'),
(545, 1, 'Agriculture', 'text', '[]', 'ACTIVITES ECONOMIQUES '),
(546, 1, 'Elevage', 'text', '[]', 'ACTIVITES ECONOMIQUES '),
(547, 1, 'Pêche', 'text', '[]', 'ACTIVITES ECONOMIQUES '),
(548, 1, 'Elevage', 'text', '[]', 'ACTIVITES ECONOMIQUES '),
(549, 1, 'Commerce', 'text', '[]', 'ACTIVITES ECONOMIQUES '),
(550, 1, 'Artisanat ', 'text', '[]', 'ACTIVITES ECONOMIQUES '),
(551, 1, 'Production charbon et bois ', 'text', '[]', 'ACTIVITES ECONOMIQUES '),
(552, 1, 'Autres activités ', 'text', '[]', 'ACTIVITES ECONOMIQUES '),
(561, 2, 'name', 'text', '[]', 'text'),
(562, 2, 'age', 'choices', '[\'18\', \'20\', \'30\']', ''),
(563, 2, 'schole 1 2 3 4 5  6 7 8 9 ', 'radio', '[\'college\', \'lycee\']', 'education');

-- --------------------------------------------------------

--
-- Structure de la table `question-backup`
--

DROP TABLE IF EXISTS `question-backup`;
CREATE TABLE IF NOT EXISTS `question-backup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `formilair_id` int DEFAULT NULL,
  `text` text,
  `type` varchar(255) DEFAULT NULL,
  `choices` text,
  `parent` varchar(200) DEFAULT NULL,
  `categorie` varchar(200) DEFAULT NULL,
  `sub_categorie` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=158 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `question-backup`
--

INSERT INTO `question-backup` (`id`, `formilair_id`, `text`, `type`, `choices`, `parent`, `categorie`, `sub_categorie`) VALUES
(47, NULL, 'Nombre Total', 'text', NULL, 'Ecole primaire', 'Quantification des infrastructures du village', 'Education'),
(48, NULL, 'Fonctionnelles', 'text', NULL, 'Ecole primaire', 'Quantification des infrastructures du village', 'Education'),
(49, NULL, 'Non Fonctionnelles', 'text', NULL, 'Ecole primaire', 'Quantification des infrastructures du village', 'Education'),
(50, NULL, 'Nombre Total', 'text', NULL, 'Collège', 'Quantification des infrastructures du village', 'Education'),
(51, NULL, 'Fonctionnelles', 'text', NULL, 'Collège', 'Quantification des infrastructures du village', 'Education'),
(52, NULL, 'Non Fonctionnelles', 'text', NULL, 'Collège', 'Quantification des infrastructures du village', 'Education'),
(53, NULL, 'Nombre Total', 'text', NULL, 'Lycée', 'Quantification des infrastructures du village', 'Education'),
(54, NULL, 'Fonctionnelles', 'text', NULL, 'Lycée', 'Quantification des infrastructures du village', 'Education'),
(55, NULL, 'Non Fonctionnelles', 'text', NULL, 'Lycée', 'Quantification des infrastructures du village', 'Education'),
(56, NULL, 'Nombre Total', 'number', NULL, 'Mahadra', 'Quantification des infrastructures du village', 'Education'),
(57, NULL, 'Fonctionnelles', 'text', NULL, 'Mahadra', 'Quantification des infrastructures du village', 'Education'),
(58, NULL, 'Non Fonctionnelles', 'text', NULL, 'Mahadra', 'Quantification des infrastructures du village', 'Education'),
(59, NULL, 'Nombre Total', 'text', NULL, 'Salle d’alphabétisation', 'Quantification des infrastructures du village', 'Education'),
(60, NULL, 'Fonctionnelles', 'text', NULL, 'Salle d’alphabétisation', 'Quantification des infrastructures du village', 'Education'),
(61, NULL, 'Non Fonctionnelles', 'text', NULL, 'Salle d’alphabétisation', 'Quantification des infrastructures du village', 'Education'),
(62, NULL, 'Nombre Total', 'text', NULL, 'Unité de santé de base', 'Quantification des infrastructures du village', 'Santé et nutrition '),
(63, NULL, 'Fonctionnelles', 'text', NULL, 'Unité de santé de base', 'Quantification des infrastructures du village', 'Santé et nutrition '),
(64, NULL, 'Non Fonctionnelles', 'text', NULL, 'Unité de santé de base', 'Quantification des infrastructures du village', 'Santé et nutrition '),
(65, NULL, 'Nombre Total', 'text', NULL, 'Poste de santé', 'Quantification des infrastructures du village', 'Santé et nutrition '),
(66, NULL, 'Fonctionnelles', 'text', NULL, 'Poste de santé', 'Quantification des infrastructures du village', 'Santé et nutrition '),
(67, NULL, 'Non Fonctionnelles', 'text', NULL, 'Poste de santé', 'Quantification des infrastructures du village', 'Santé et nutrition '),
(68, NULL, 'Nombre Total', 'text', NULL, 'Centre de santé', 'Quantification des infrastructures du village', 'Santé et nutrition '),
(69, NULL, 'Fonctionnelles', 'text', NULL, 'Centre de santé', 'Quantification des infrastructures du village', 'Santé et nutrition '),
(70, NULL, 'Non Fonctionnelles', 'text', NULL, 'Centre de santé', 'Quantification des infrastructures du village', 'Santé et nutrition '),
(71, NULL, 'Nombre Total', 'text', NULL, 'Puits moderne', 'Quantification des infrastructures du village', 'Hydraulique '),
(72, NULL, 'Fonctionnelles', 'text', NULL, 'Puits moderne', 'Quantification des infrastructures du village', 'Hydraulique '),
(73, NULL, 'Non Fonctionnelles', 'text', NULL, 'Puits moderne', 'Quantification des infrastructures du village', 'Hydraulique'),
(74, NULL, 'Nombre Total', 'text', NULL, 'Contre-puits', 'Quantification des infrastructures du village', 'Hydraulique '),
(75, NULL, 'Fonctionnelles', 'text', NULL, 'Contre-puits', 'Quantification des infrastructures du village', 'Hydraulique '),
(76, NULL, 'Non Fonctionnelles', 'text', NULL, 'Contre-puits', 'Quantification des infrastructures du village', 'Hydraulique'),
(77, NULL, 'Nombre Total', 'text', NULL, 'Forage', 'Quantification des infrastructures du village', 'Hydraulique '),
(78, NULL, 'Fonctionnelles', 'text', NULL, 'Forage', 'Quantification des infrastructures du village', 'Hydraulique '),
(79, NULL, 'Non Fonctionnelles', 'text', NULL, 'Forage', 'Quantification des infrastructures du village', 'Hydraulique'),
(80, NULL, 'Nombre Total', 'text', NULL, 'Pompe équipée d’éolienne', 'Quantification des infrastructures du village', 'Hydraulique '),
(81, NULL, 'Fonctionnelles', 'text', NULL, 'Pompe équipée d’éolienne', 'Quantification des infrastructures du village', 'Hydraulique '),
(82, NULL, 'Non Fonctionnelles', 'text', NULL, 'Pompe équipée d’éolienne', 'Quantification des infrastructures du village', 'Hydraulique'),
(83, NULL, 'Nombre Total', 'text', NULL, 'Pompe équipée de solaire', 'Quantification des infrastructures du village', 'Hydraulique '),
(84, NULL, 'Fonctionnelles', 'text', NULL, 'Pompe équipée de solaire', 'Quantification des infrastructures du village', 'Hydraulique '),
(85, NULL, 'Non Fonctionnelles', 'text', NULL, 'Pompe équipée de solaire', 'Quantification des infrastructures du village', 'Hydraulique'),
(86, NULL, 'Nombre Total', 'text', NULL, 'Pompe thermique', 'Quantification des infrastructures du village', 'Hydraulique '),
(87, NULL, 'Fonctionnelles', 'text', NULL, 'Pompe thermique', 'Quantification des infrastructures du village', 'Hydraulique '),
(88, NULL, 'Non Fonctionnelles', 'text', NULL, 'Pompe thermique', 'Quantification des infrastructures du village', 'Hydraulique'),
(89, NULL, 'Nombre Total', 'text', NULL, 'Puits ou Forage à motricité humaine', 'Quantification des infrastructures du village', 'Hydraulique '),
(90, NULL, 'Fonctionnelles', 'text', NULL, 'Puits ou Forage à motricité humaine', 'Quantification des infrastructures du village', 'Hydraulique '),
(91, NULL, 'Non Fonctionnelles', 'text', NULL, 'Puits ou Forage à motricité humaine', 'Quantification des infrastructures du village', 'Hydraulique'),
(92, NULL, 'Nombre Total', 'text', NULL, 'Sondage', 'Quantification des infrastructures du village', 'Hydraulique '),
(93, NULL, 'Fonctionnelles', 'text', NULL, 'Sondage', 'Quantification des infrastructures du village', 'Hydraulique '),
(94, NULL, 'Non Fonctionnelles', 'text', NULL, 'Sondage', 'Quantification des infrastructures du village', 'Hydraulique'),
(95, NULL, 'Nombre Total', 'text', NULL, 'Piézomètre', 'Quantification des infrastructures du village', 'Hydraulique '),
(96, NULL, 'Fonctionnelles', 'text', NULL, 'Piézomètre', 'Quantification des infrastructures du village', 'Hydraulique '),
(97, NULL, 'Non Fonctionnelles', 'text', NULL, 'Piézomètre', 'Quantification des infrastructures du village', 'Hydraulique'),
(98, NULL, 'Nombre Total', 'text', NULL, 'Cours d’eau temporaire', 'Quantification des infrastructures du village', 'Hydraulique '),
(99, NULL, 'Fonctionnelles', 'text', NULL, 'Cours d’eau temporaire', 'Quantification des infrastructures du village', 'Hydraulique '),
(100, NULL, 'Non Fonctionnelles', 'text', NULL, 'Cours d’eau temporaire', 'Quantification des infrastructures du village', 'Hydraulique'),
(101, NULL, 'Nombre Total', 'text', NULL, 'Cours d’eau permanent', 'Quantification des infrastructures du village', 'Hydraulique '),
(102, NULL, 'Fonctionnelles', 'text', NULL, 'Cours d’eau permanent', 'Quantification des infrastructures du village', 'Hydraulique '),
(103, NULL, 'Non Fonctionnelles', 'text', NULL, 'Cours d’eau permanent', 'Quantification des infrastructures du village', 'Hydraulique'),
(104, NULL, 'Nombre Total', 'text', NULL, 'Digue ou diguette', 'Quantification des infrastructures du village', 'Hydraulique '),
(105, NULL, 'Fonctionnelles', 'text', NULL, 'Digue ou diguette', 'Quantification des infrastructures du village', 'Hydraulique '),
(106, NULL, 'Non Fonctionnelles', 'text', NULL, 'Digue ou diguette', 'Quantification des infrastructures du village', 'Hydraulique'),
(107, NULL, 'Nombre Total', 'text', NULL, 'Barrage', 'Quantification des infrastructures du village', 'Hydraulique '),
(108, NULL, 'Fonctionnelles', 'text', NULL, 'Barrage', 'Quantification des infrastructures du village', 'Hydraulique '),
(109, NULL, 'Non Fonctionnelles', 'text', NULL, 'Barrage', 'Quantification des infrastructures du village', 'Hydraulique'),
(110, NULL, 'Nombre Total', 'text', NULL, 'Réseau de distribution d’eau  ', 'Quantification des infrastructures du village', 'Hydraulique '),
(111, NULL, 'Fonctionnelles', 'text', NULL, 'Réseau de distribution d’eau  ', 'Quantification des infrastructures du village', 'Hydraulique '),
(112, NULL, 'Non Fonctionnelles', 'text', NULL, 'Réseau de distribution d’eau  ', 'Quantification des infrastructures du village', 'Hydraulique'),
(113, NULL, 'Nombre Total', 'text', NULL, 'Source', 'Quantification des infrastructures du village', 'Hydraulique '),
(114, NULL, 'Fonctionnelles', 'text', NULL, 'Source', 'Quantification des infrastructures du village', 'Hydraulique '),
(115, NULL, 'Non Fonctionnelles', 'text', NULL, 'Source', 'Quantification des infrastructures du village', 'Hydraulique'),
(116, NULL, 'Nombre Total', 'text', NULL, 'Tamourt ou Mare', 'Quantification des infrastructures du village', 'Hydraulique '),
(117, NULL, 'Fonctionnelles', 'text', NULL, 'Tamourt ou Mare', 'Quantification des infrastructures du village', 'Hydraulique '),
(118, NULL, 'Non Fonctionnelles', 'text', NULL, 'Tamourt ou Mare', 'Quantification des infrastructures du village', 'Hydraulique'),
(119, NULL, 'Nombre Total', 'text', NULL, 'Marché ', 'Quantification des infrastructures du village', 'Equipements marchands '),
(120, NULL, 'Fonctionnelles', 'text', NULL, 'Marché ', 'Quantification des infrastructures du village', 'Equipements marchands '),
(121, NULL, 'Non Fonctionnelles', 'text', NULL, 'Marché ', 'Quantification des infrastructures du village', 'Equipements marchands'),
(122, NULL, 'Nombre Total', 'text', NULL, 'Boucherie -vente de viande ', 'Quantification des infrastructures du village', 'Equipements marchands '),
(123, NULL, 'Fonctionnelles', 'text', NULL, 'Boucherie -vente de viande ', 'Quantification des infrastructures du village', 'Equipements marchands '),
(124, NULL, 'Non Fonctionnelles', 'text', NULL, 'Boucherie -vente de viande ', 'Quantification des infrastructures du village', 'Equipements marchands'),
(125, NULL, 'Nombre Total', 'text', NULL, 'Marché hebdomadaire ', 'Quantification des infrastructures du village', 'Equipements marchands '),
(126, NULL, 'Fonctionnelles', 'text', NULL, 'Marché hebdomadaire ', 'Quantification des infrastructures du village', 'Equipements marchands '),
(127, NULL, 'Non Fonctionnelles', 'text', NULL, 'Marché hebdomadaire ', 'Quantification des infrastructures du village', 'Equipements marchands'),
(128, NULL, 'Nombre Total', 'text', NULL, 'Marché de bétail', 'Quantification des infrastructures du village', 'Equipements marchands '),
(129, NULL, 'Fonctionnelles', 'text', NULL, 'Marché de bétail', 'Quantification des infrastructures du village', 'Equipements marchands '),
(130, NULL, 'Non Fonctionnelles', 'text', NULL, 'Marché de bétail', 'Quantification des infrastructures du village', 'Equipements marchands'),
(131, NULL, 'Nombre Total', 'text', NULL, 'Banque de céréales (silos) ', 'Quantification des infrastructures du village', 'Environnement, agriculture et élevage  '),
(132, NULL, 'Fonctionnelles', 'text', NULL, 'Banque de céréales (silos) ', 'Quantification des infrastructures du village', 'Environnement, agriculture et élevage  '),
(133, NULL, 'Non Fonctionnelles', 'text', NULL, 'Banque de céréales (silos) ', 'Quantification des infrastructures du village', 'Environnement, agriculture et élevage '),
(134, NULL, 'Nombre Total', 'text', NULL, 'Forêt  ', 'Quantification des infrastructures du village', 'Environnement, agriculture et élevage  '),
(135, NULL, 'Fonctionnelles', 'text', NULL, 'Forêt  ', 'Quantification des infrastructures du village', 'Environnement, agriculture et élevage  '),
(136, NULL, 'Non Fonctionnelles', 'text', NULL, 'Forêt  ', 'Quantification des infrastructures du village', 'Environnement, agriculture et élevage '),
(137, NULL, 'Nombre Total', 'text', NULL, 'Oasis ', 'Quantification des infrastructures du village', 'Environnement, agriculture et élevage  '),
(138, NULL, 'Fonctionnelles', 'text', NULL, 'Oasis ', 'Quantification des infrastructures du village', 'Environnement, agriculture et élevage  '),
(139, NULL, 'Non Fonctionnelles', 'text', NULL, 'Oasis ', 'Quantification des infrastructures du village', 'Environnement, agriculture et élevage '),
(140, NULL, 'Nombre Total', 'text', NULL, 'Poste vétérinaire', 'Quantification des infrastructures du village', 'Environnement, agriculture et élevage  '),
(141, NULL, 'Fonctionnelles', 'text', NULL, 'Poste vétérinaire', 'Quantification des infrastructures du village', 'Environnement, agriculture et élevage  '),
(142, NULL, 'Non Fonctionnelles', 'text', NULL, 'Poste vétérinaire', 'Quantification des infrastructures du village', 'Environnement, agriculture et élevage '),
(143, NULL, 'Moughataa', 'text', '', '', 'Identification du village ', ''),
(144, NULL, 'Commune ', 'text', '', '', 'Identification du village ', ''),
(145, NULL, 'Village( Nom Administratif):  ', 'text', '', '', 'Identification du village ', ''),
(146, NULL, 'Nom local ( s’il y en a)  ', 'text', '', '', 'Identification du village ', ''),
(147, NULL, 'Distance par rapport au chef Lieu de la commune (en Km) ', 'text', '', '', 'Identification du village ', ''),
(148, NULL, 'Distance par rapport aux axes principaux (Routes bitumées) (en Km) ', 'text', '', '', 'Identification du village ', ''),
(149, NULL, 'Date de création (aperçu historique)  ', 'text', '', '', 'Identification du village ', ''),
(150, NULL, 'Composition  Ethnique  ', 'text', '', '', 'Identification du village ', ''),
(151, NULL, 'Halpulaar  ', 'text', '', '', 'Identification du village ', ''),
(152, NULL, 'Maure  ', 'text', '', '', 'Identification du village ', ''),
(153, NULL, 'Soninké  ', 'text', '', '', 'Identification du village ', ''),
(154, NULL, 'Wolof  ', 'text', '', '', 'Identification du village ', ''),
(155, NULL, 'Autres  ', 'text', '', '', 'Identification du village ', ''),
(156, NULL, 'Population fixe ', 'text', '', '', 'DEMOGRAPHIE ', ''),
(157, NULL, 'Nb de ménages  ', 'text', '', '', 'DEMOGRAPHIE ', '');

-- --------------------------------------------------------

--
-- Structure de la table `reponse`
--

DROP TABLE IF EXISTS `reponse`;
CREATE TABLE IF NOT EXISTS `reponse` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text_reponse` text,
  `question_id` int DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  `response_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `village` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `fk_village` (`village`)
) ENGINE=MyISAM AUTO_INCREMENT=125 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `reponse`
--

INSERT INTO `reponse` (`id`, `text_reponse`, `question_id`, `id_user`, `response_date`, `village`) VALUES
(107, 'aliy', 561, 1, '2024-06-14 16:06:21', 4),
(108, 'on', 563, 1, '2024-06-14 16:06:21', 4),
(109, 'aliy', 561, 2, '2024-06-14 16:06:46', 4),
(110, 'on', 563, 2, '2024-06-14 16:06:46', 4),
(111, 'rrr', 561, 2, '2024-06-14 16:22:01', 10),
(112, 'on', 563, 2, '2024-06-14 16:22:01', 10),
(113, '12', 561, 2, '2024-06-14 16:59:58', 6),
(114, '18, 20, 30', 562, 2, '2024-06-14 16:59:58', 6),
(115, 'lycee', 563, 2, '2024-06-14 16:59:58', 6),
(116, '12', 561, 2, '2024-06-14 17:07:13', 7),
(117, '18, 20', 562, 2, '2024-06-14 17:07:13', 7),
(118, 'lycee', 563, 2, '2024-06-14 17:07:13', 7),
(119, 'jjju', 561, 2, '2024-06-14 17:12:06', 15),
(120, '18, 20', 562, 2, '2024-06-14 17:12:06', 15),
(121, 'lycee', 563, 2, '2024-06-14 17:12:06', 15),
(122, '', 561, 2, '2024-06-14 20:10:23', 7),
(123, '18, 20, 30', 562, 2, '2024-06-14 20:10:23', 7),
(124, 'lycee', 563, 2, '2024-06-14 20:10:23', 7);

-- --------------------------------------------------------

--
-- Structure de la table `typeinfrastructur`
--

DROP TABLE IF EXISTS `typeinfrastructur`;
CREATE TABLE IF NOT EXISTS `typeinfrastructur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `typeinfrastructur`
--

INSERT INTO `typeinfrastructur` (`id`, `nom`) VALUES
(7, 'Education'),
(1, 'Santé et nutrition '),
(2, 'Energie, télécommunications et tourisme'),
(3, 'Routes, bâtiments administratifs ou communautaires'),
(4, 'Environnement, agriculture et élevage '),
(5, 'Equipements marchands'),
(6, 'Hydraulique');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tel` int NOT NULL DEFAULT '0',
  `email` varchar(100) NOT NULL,
  `password` varchar(128) NOT NULL,
  `role` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'user',
  `nom` varchar(90) DEFAULT NULL,
  `prenom` varchar(90) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `tel`, `email`, `password`, `role`, `nom`, `prenom`, `active`) VALUES
(1, 42044524, '22086@supnum.mr', '1234', 'admin', 'Aliy ', 'Sidahmed', 1),
(2, 2147483647, '22040@supnum.mr', '1234', 'admin', 'mohamed', 'dhmine', 1),
(3, 2147483647, '22041@supnum.mr', '1234', 'user', 'user', 'user', 1),
(4, 2147483647, '22042@supnum.mr', '1234', 'user', 'user', 'user', 1),
(6, 42044524, '220886@supnum.mr', '', 'admin', 'ahmed', 'sidahmed', 0),
(8, 2, '2209@gmail.gg', '', 'user', NULL, NULL, 0),
(9, 220220099, 'supnum@supnum.mr', '', 'admin', 'supnum', 'supnum', 1),
(10, 220220099, 'supnum2@supnum.mr', '', 'admin', 'supnum', 'supnum', 1),
(11, 220220099, 'supnum3@supnum.mr', '', 'admin', 'supnum', 'supnum', 1);

-- --------------------------------------------------------

--
-- Structure de la table `village`
--

DROP TABLE IF EXISTS `village`;
CREATE TABLE IF NOT EXISTS `village` (
  `NumeroVillage` int NOT NULL AUTO_INCREMENT,
  `idCommit` int DEFAULT NULL,
  `NomAdministratifVillage` varchar(255) DEFAULT NULL,
  `NomLocal` varchar(255) DEFAULT NULL,
  `DistanceChefLieu` float DEFAULT NULL,
  `DistanceAxesPrincipaux` float DEFAULT NULL,
  `DateCreation` date DEFAULT NULL,
  `CompositionEthnique` text,
  `AutresInfosVillage` text,
  PRIMARY KEY (`NumeroVillage`),
  KEY `FK_Commit` (`idCommit`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `village`
--

INSERT INTO `village` (`NumeroVillage`, `idCommit`, `NomAdministratifVillage`, `NomLocal`, `DistanceChefLieu`, `DistanceAxesPrincipaux`, `DateCreation`, `CompositionEthnique`, `AutresInfosVillage`) VALUES
(1, 1, '(None,)', 'Nom local du village', 0, 0, '2024-03-03', '', ''),
(2, 53, '(\'\',)', 'village#kkkk', 0, 0, '2024-03-03', '', ''),
(3, 53, '(None,)', 'village#', 0, 0, '2024-03-03', '', ''),
(4, 53, 'vilelage3', 'village#', 0, 0, '2024-03-04', NULL, NULL),
(5, 53, 'vilelage4', 'village#', 0, 0, NULL, NULL, NULL),
(6, 53, 'Etoba', 'village#', 0, 0, NULL, NULL, NULL),
(7, 53, 'cheggue', 'village#', 0, 0, NULL, NULL, NULL),
(8, 1, 'v1', 'village#', 0, 0, NULL, NULL, NULL),
(9, 1, 'v2', 'village#', 0, 0, NULL, NULL, NULL),
(10, 1, 'v3', 'village#', 0, 0, NULL, NULL, NULL),
(11, 1, 'v4', 'village#', 0, 0, NULL, NULL, NULL),
(12, 1, 'v5', 'village#', 0, 0, NULL, NULL, NULL),
(13, 1, 'v6', 'village#', 0, 0, NULL, NULL, NULL),
(14, 1, 'v7', 'village#', 0, 0, NULL, NULL, NULL),
(15, 1, 'v8', 'village#', 0, 0, NULL, NULL, NULL),
(16, 2, 'v2', 'village#', 0, 0, NULL, NULL, NULL),
(17, 2, 'v3', 'village#', 0, 0, NULL, NULL, NULL),
(18, 2, 'v4', 'village#', 0, 0, NULL, NULL, NULL),
(19, 2, 'v5', 'village#', 0, 0, NULL, NULL, NULL),
(20, 2, 'v6', 'village#', 0, 0, NULL, NULL, NULL),
(21, 2, 'v7', 'village#', 0, 0, NULL, NULL, NULL),
(22, 2, 'v8', 'village#', 0, 0, NULL, NULL, NULL),
(23, 3, 'v2', 'village#', 0, 0, NULL, NULL, NULL),
(24, 3, 'v3', 'village#', 0, 0, NULL, NULL, NULL),
(25, 3, 'v4', 'village#', 0, 0, NULL, NULL, NULL),
(26, 3, 'v5', 'village#', 0, 0, NULL, NULL, NULL),
(27, 3, 'v6', 'village#', 0, 0, NULL, NULL, NULL),
(28, 3, 'v7', 'village#', 0, 0, NULL, NULL, NULL),
(29, 3, 'v8', 'village#', 0, 0, NULL, NULL, NULL),
(30, NULL, 'sidahmed', 'aliy', 0, 0, '2024-05-24', 'sonike', '.'),
(31, NULL, 'test', 'test', 0, 0, '2024-05-24', 'sonike', '.'),
(32, 22, 'sidahmed', 'aliy', 0, 0, '2024-05-15', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `wilaya`
--

DROP TABLE IF EXISTS `wilaya`;
CREATE TABLE IF NOT EXISTS `wilaya` (
  `ID_wilaya` int NOT NULL AUTO_INCREMENT,
  `Nom_wilaya` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID_wilaya`)
) ENGINE=MyISAM AUTO_INCREMENT=448 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `wilaya`
--

INSERT INTO `wilaya` (`ID_wilaya`, `Nom_wilaya`) VALUES
(1, 'Hodh Ech Chargui'),
(2, 'Hodh El Gharbi'),
(3, 'El essaba'),
(4, 'Gorgol'),
(5, 'Brakna'),
(6, 'Trarza'),
(7, 'Adrar'),
(8, 'Dakhlet Nouadhibou'),
(9, 'Tagant'),
(10, 'Guidimaka'),
(11, 'Tiris Zemmour'),
(13, 'Nouakchott Nord'),
(12, 'inchiri'),
(14, 'Nouakchott Ouest'),
(15, 'Nouakchott Sud');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
