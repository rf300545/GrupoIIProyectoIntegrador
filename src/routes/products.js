const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController")

router.get("/."); 

router.get("/carro_compras", productsController.carro);

// router.get("/producto", productsController.

// router.get("/createProducts", productsController.


module.exports = router;