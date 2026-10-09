import { getConnection } from "../database/connection.js";

export const getAllProducts = async (req, res) => {
    const pool = await getConnection()

    const result = await pool.request().query("SELECT * FROM products");
    console.log(result);
    res.status(200).json(result.recordset);
}

export const getProductById = (req, res) => {
   
   

    res.status(200).json({ message: "Product retrieved successfully" });
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

export const updateProduct = (req, res) => {
    res.status(200).json({ message: "Product updated successfully" });
}

export const deleteProduct = (req, res) => {
    res.status(200).json({ message: "Product deleted successfully" });
}