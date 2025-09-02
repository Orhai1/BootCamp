CREATE TABLE pokemon_type (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE town (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE trainer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  town_id INT,
  FOREIGN KEY (town_id) REFERENCES town(id)
) ;

CREATE TABLE pokemon (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  height INT,
  weight INT,
  type_id INT,
  FOREIGN KEY (type_id) REFERENCES pokemon_type(id)
);

CREATE TABLE pokemon_trainer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pokemon_id INT NOT NULL,
  trainer_id INT NOT NULL,
  FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
  FOREIGN KEY (trainer_id) REFERENCES trainer(id)
);
