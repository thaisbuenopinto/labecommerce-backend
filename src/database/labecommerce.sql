-- Active: 1687467110736@@127.0.0.1@3306


CREATE TABLE users(
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,   
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT not null
);

CREATE TABLE products(
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);

INSERT INTO users (id, name, email, password, created_at)
VALUES 
('84597', 'Gabriel', 'thissy@gmail.com', '12345', '20/06/2023'),
('84598', 'Catarina', 'caty@gmail.com', '56789', '22/03/2023'),
('84599', 'Bruna', 'bru@gmail.com', '10234', '22/06/2023');

INSERT INTO products (id, name, price, description, image_url)
VALUES
('84', 'cadeira', '200', 'cadeira-veludo', "@@@@@@"),
('85', 'cadeira', '150', 'cadeira-ferro', "@@@@@@"),
('86', 'cadeira', '250', 'cadeira-madeira', "@@@@@@"),
('87', 'cadeira', '300', 'cadeira-transparente', "@@@@@@"),
('88', 'cadeira', '100', 'cadeira-puff', "@@@@@@");

SELECT * FROM users;

SELECT * FROM products;

SELECT * FROM products
WHERE description LIKE '%cadeira%';

INSERT INTO products (id, name, price, description, image_url)
VALUES
('90', 'mesa', '1200', 'mesa-madeira', "@@@@@@");

INSERT INTO users (id, name, email, password, created_at)
VALUES 
('84600', 'Jose', 'jos@gmail.com', '54321', '10/01/2023');

DELETE FROM users
WHERE id = '84599';

DELETE FROM products
WHERE id = '85';

UPDATE products
SET
	name = 'notebokk',
    price = '500',
    description= 'samsung 360',
    image_url = '&&&&&&&'
WHERE id = '87';

CREATE TABLE
    purchases (
        id TEXT PRIMARY KEY NOT NULL,
        buyer TEXT NOT NULL,
        total_price REAL NOT NULL,
        createdAt TEXT DEFAULT (DATETIME()) NOT NULL,
        FOREIGN KEY (buyer) REFERENCES users(id)
    );

SELECT * FROM purchases;

DROP TABLE purchases;

UPDATE purchases SET total_price = 20 WHERE id = 'p002';

SELECT
    users.id AS userId,
    purchases.id AS orderId,
    users.name,
    users.email,
    purchases.total_price,
    purchases.createdAt
FROM purchases
    JOIN users ON purchases.buyer = users.id;

CREATE TABLE
    purchases_products(
        purchase_id TEXT NOT NULL,
        product_id TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY (purchase_id) REFERENCES purchases(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO
    purchases_products (
        purchase_id,
        product_id,
        quantity
    )
VALUES ('pur001', 'prod001', 5), ('pur001', 'prod002', 28);

SELECT * FROM purchases_products;

DROP TABLE purchases_products;

SELECT *
FROM products
    LEFT JOIN purchases_products ON products.id = purchases_products.product_id
    LEFT JOIN purchases ON purchases.id = purchases_products.purchase_id;

UPDATE users SET name = '03' WHERE id = 'Catarina';

INSERT INTO
    users (id, name, email, password)
VALUES (
        'c001',
        'Fulana',
        'fulana@email.com',
        '123456'
    ), (
        'c002',
        'Fulano',
        'fulano@email.com',
        '123456'
    ), (
        'c003',
        'Sicrana',
        'sicrana@email.com',
        '123456'
    ), (
        'c004',
        'Fayra',
        'fayra@email.com',
        '123456'
    );

INSERT INTO
    products (
        id,
        name,
        price,
        description,
        imageUrl
    )
VALUES (
        'p001',
        'mouse',
        100,
        'esrdxfcghvbj',
        'image'
    ), (
        'p002',
        'teclado',
        300,
        'dsfcgjkn',
        'image'
    ), (
        'p003',
        'PC',
        400,
        'fdcghvbjn',
        'image'
    ), (
        'p004',
        'mouse gamer',
        700,
        'esrdxfcghvbj',
        'image'
    ), (
        'p005',
        'teclado gamer',
        900,
        'dsfcgjkn',
        'image'
    ), (
        'p006',
        'PC gamer',
        1000,
        'fdcghvbjn',
        'image'
    );

INSERT INTO
    purchases(id, buyer, total_price)
VALUES ('pur001', 'u001', 300), ('pur002', 'u002', 400), ('pur003', 'u003', 500);

INSERT INTO
    purchases_products(
        purchase_id,
        product_id,
        quantity
    )
VALUES ('P001', 'p001', 2), ('P002', 'p002', 3), ('P003', 'p003', 4);