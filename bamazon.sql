CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NULL,
    quanity INT NULL,
    PRIMARY KEY (id)

);


INSERT INTO products (product, department, price, quanity)
VALUES ("Asus Laptop", "Laptop", 1200, 25);

INSERT INTO products (product, department, price, quanity)
VALUES ("Baker Mayfield", "Bobblehead", 15, 1000);

INSERT INTO products (product, department, price, quanity)
VALUES ("Nike Bookbag", "School suplies", 50, 200);

INSERT INTO products (product, department, price, quanity)
VALUES ("Star Wars Jedi: Fallen Order", "Vido Game", 60, 10000);

INSERT INTO products (product, department, price, quanity)
VALUES ("Spider-Man into the Spiderverse", "4k Movie", 30, 1250);


INSERT INTO products (product, department, price, quanity)
VALUES ("Powerbeats pro", "Headphones", 250, 3000);

INSERT INTO products (product, department, price, quanity)
VALUES ("Fransico Lindor", "Bobblehead", 15, 500);

INSERT INTO products (product, department, price, quanity)
VALUES ("Sony 4k", "TV", 900, 30);

INSERT INTO products (product, department, price, quanity)
VALUES ("Boarderlands 3", "Vido Game", 60, 10000);

INSERT INTO products (product, department, price, quanity)
VALUES ("Captian Marvel", "4k Movie", 35, 10250);

