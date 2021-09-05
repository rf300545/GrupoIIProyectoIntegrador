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


// PARA PROBAR SI ANDA SESSION
router.get ("/testSession", function (req, res) {

    if (req.session.numeroVisita = 1) {
        req.session.numeroVisita = 0;
 }
        req.session.numeroVisita ++, 

    

    res.send ("Sesion tiene el numero:  " + req.session.numeroVisita) 
})

module.exports = router;