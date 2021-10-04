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
//GREEN TEAM
router.get("/greenTeam", mainController.greenTeam);

// PARA PROBAR SI ANDA SESSION
router.get ("/testSession", function (req, res) {
    req.session.numeroVisita = req.session.numeroVisita ? req.session.numeroVisita +1 : 1
    res.send ("Sesion tiene el numero:  " + req.session.numeroVisita) 
})


module.exports = router;