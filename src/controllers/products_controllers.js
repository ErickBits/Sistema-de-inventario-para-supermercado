import sql from "mssql";
import { getConnection } from "../database/connection.js";

export const getAllProducts = async (req, res) => {
    const pool = await getConnection()

    const result = await pool.request().query("SELECT * FROM products");
    console.log(result);
    res.status(200).json(result.recordset);
}

export const getProductById = async (req, res) => {
   
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input("id",sql.Int, id)
    .query("SELECT * FROM products WHERE id = @id");
    console.log(result);

    if (result.recordset.length === 0) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(result.recordset[0]);
}

export const createProduct = async (req, res) => {
    
    const { name, description, price } = req.body;
    
    if (!name || !description || !price) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    
    const pool = await getConnection();
    await pool.request().input("name", name).input("description", description).input("price", price).query("INSERT INTO products (name, description, price) VALUES (@name, @description, @price)");

    
    res.status(200).json({ message: "Product created successfully" });
}

export const updateProduct = async (req, res) => {

    const { id } = req.params;
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const pool = await getConnection();
    const result = await pool.request()
    .input("id", sql.Int, id)
    .input("name", name)
    .input("description", description)
    .input("price", price)
    .query("UPDATE products SET name = @name, description = @description, price = @price WHERE id = @id");

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "Product not found" });
    }
    
    res.status(200).json({ message: "Product updated successfully" });
}

export const deleteProduct = async (req, res) => {

    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input("id", sql.Int, id)
    .query("DELETE FROM products WHERE id = @id");

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
}