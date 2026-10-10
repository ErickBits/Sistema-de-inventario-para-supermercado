--CREATE DATABASE webstore;
--GO

USE webstore;
GO

--CREATE TABLE products (
--    id INT IDENTITY(1,1) PRIMARY KEY,
--    name NVARCHAR(255) NOT NULL,
--    description NVARCHAR(MAX),
--    price DECIMAL(10, 2) NOT NULL,
--    created_at DATETIME2 DEFAULT SYSDATETIME()
--);

INSERT INTO products (name, description, price) VALUES
('Cucumber', 'This is a fresh cucumber', 19.99),
('Carrot', 'This is a fresh carrot', 29.99),
('Lettuce', 'This is a fresh lettuce', 39.99);