const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController")

//CARRO DE COMPRAS -ok
router.get("/carro_compras", productsController.carro);

//TODOS LOS PRODUCTOS - ok
router.get("/", productsController.producto);

//CREAR PRODUCTO - falta que agregue epl producto nuevo a la DB
router.get("/createProduct", productsController.createProduct);
router.post("/createProduct", productsController.store);

//VER DETALLE DE UN PRODUCTO - ok
router.get("/:id", productsController.unProducto); 

//Editar Producto
router.get("/editProduct/:id", productsController.editProduct);

module.exports = router;
