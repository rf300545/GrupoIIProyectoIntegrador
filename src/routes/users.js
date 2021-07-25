const express = require("express");
const router = express.Router();
const userController = require ("../controllers/usersController")


// Formulario de creacion de usuario
router.get("/register",userController.registrarse);

//Procesar formulario de creacion
router.post("/register",userController.saveUser);

// Procesar log usuario
router.get("/login",userController.iniciarSesion);


module.exports = router;
