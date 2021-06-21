const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController")

// router.get("/."); 

router.get("/carro_compras", productsController.ncarro);

router.get("/producto", productsController.nproducto);

router.get("/createProducts", productsController.ncreateProducts);


module.exports = router;