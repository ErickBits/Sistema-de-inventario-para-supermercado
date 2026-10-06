import  {Router} from "express";

const router = Router();

router.get("/productos", (req, res) => {
  res.send("Bienvenido a la API de productos");
});

router.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Producto con ID: ${id}`);
}   );

router.post("/productos", (req, res) => {
  res.send("Producto creado");
});

router.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Producto con ID: ${id} actualizado`);
});

router.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Producto con ID: ${id} eliminado`);
});

export default router;