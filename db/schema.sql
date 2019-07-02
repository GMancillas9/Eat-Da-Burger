CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
  burger_name VARCHAR
    (45) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY
    (item_id)
);