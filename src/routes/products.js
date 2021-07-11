const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController")

//CARRO DE COMPRAS
router.get("/carro_compras", productsController.carro);

//TODOS LOS PRODUCTOS ok-
router.get("/", productsController.producto);

//CREAR PRODUCTO
router.get("/createProduct", productsController.createProducts);
router.post("/createProduct", productsController.createProducts);

//VER DETALLE DE UN PRODUCTO
router.get("/:id", productsController.unProducto); 

//Editar Producto
router.get("/editProduct", productsController.editProduct);

module.exports = router;
