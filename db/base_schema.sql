create table oil.users(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(64) NOT NULL,
  `password` varchar(128) NOT NULL,


  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`)
);




create table oil.ships(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imo` varchar(64) NOT NULL,
  `name` varchar(128) NOT NULL,
  `note` varchar(128) NOT NULL,

  PRIMARY KEY (`id`),
  UNIQUE KEY `imo` (`imo`)
);