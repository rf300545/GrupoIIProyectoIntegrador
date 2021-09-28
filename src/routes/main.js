const express = require("express");

const router = express.Router();
const mainController = require("../controllers/mainController");
const productsController = require("../controllers/productsController");


//INICIO
router.get("/", mainController.index);

//NOSOTROS
router.get("/nosotros", mainController.nosotros);

//CONTACTANOS
router.get("/contacto", mainController.contacto);
//CREAR PRODUCTO
router.get ("/createProduct", productsController.createProduct)
//CARRITO
router.get ("/carrito")



module.exports = router;