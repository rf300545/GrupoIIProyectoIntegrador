const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController")

//router.get("/."); 

//CARRO DE COMPRAS
router.get("/carro_compras", productsController.carro);

//TODOS LOS PRODUCTOS
router.get("/producto", productsController.producto);

//CREAR PRODUCTO
router.get("/createProduct", productsController.createProducts);
//router.post("/createProducts", productsController.ncreateProducts);

//VER DETALLE DE UN PRODUCTO
router.get("/producto/:id", productsController.idUnProducto); 

//Editar Producto
router.get("/editProduct", productsController.editProduct);

module.exports = router;
