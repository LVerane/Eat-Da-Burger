CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  toGo BOOLEAN DEFAULT false,
  rating INT (10),
  PRIMARY KEY (id)
);