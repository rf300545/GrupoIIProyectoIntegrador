const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")

//INICIO
router.get("/", mainController.index);

//NOSOTROS
router.get("/nosotros", mainController.nosotros);

//CONTACTANOS
router.get("/contacto", mainController.contacto);

module.exports = router;