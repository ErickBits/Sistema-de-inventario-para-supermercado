import express from "express";
import "dotenv/config";
import {getConnection} from "./database/connection.js";
import productsRoutes from "./routes/products_routes.js";

// Crear el servidor de express
const app = express();

app.use(productsRoutes);

const port = process.env.PORT || 3000;

const start = async () => {
/*  try {
    await getConnection();
    console.log("Conectado a la base de datos");
*/
    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  /*} catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
    process.exit(1);
  }*/
};

start();