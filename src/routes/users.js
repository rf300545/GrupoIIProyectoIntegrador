const express = require("express");
const router = express.Router();
// Constatante para validacion del user
const { body } = require ("express-validator");
const userController = require ("../controllers/usersController");

// Validaciones
const validacionCreacionUsuario = [
    body ("first_name").notEmpty().withMessage("Pone un nombre"),
    body ("last_name").notEmpty().withMessage("Pone un apellido"),
    body ("email").isEmail().withMessage("Ingresa un email valido"),
    body ("email").notEmpty().withMessage("Ingese un email"),

];

// Formulario de creacion de usuario
router.get("/register",userController.registrarse);

//Procesar formulario de creacion
router.post("/register", validacionCreacionUsuario, userController.saveUser);

// Procesar log usuario
router.get("/login",userController.iniciarSesion);


module.exports = router;
