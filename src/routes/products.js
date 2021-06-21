const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController")

router.get("/."); 

router.get("/carro_compras", productsController.carro);

router.get("/producto", productsController.producto);

router.get("/createProducts", productsController.createProducts);


module.exports = router;