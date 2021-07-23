 CREATE DATABASE  IF NOT EXISTS `pokemon` ;
USE `pokemon`;
 
 CREATE USER 'pokemon_app'@'localhost' IDENTIFIED BY '_RondoudouDu33_';
 GRANT ALL PRIVILEGES ON pokemon.* TO 'pokemon_app'@'localhost';
