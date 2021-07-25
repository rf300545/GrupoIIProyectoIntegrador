const express = require("express");
const router = express.Router();
// Constatante para validacion del user
const { body } = require ("express-validator")
const userController = require ("../controllers/usersController")

// Validaciones
const validacionCreacionUsuario = [
    body ("first_name").notEmpty().withMessage("Pone un nombre pario"),
    body ("last_name").notEmpty().withMessage("Pone un apellido pario"),
    body ("email").isEmail().notEmpty().withMessage("Pone un email pario"),

];

// Formulario de creacion de usuario
router.get("/register",userController.registrarse);

//Procesar formulario de creacion
router.post("/register", validacionCreacionUsuario, userController.saveUser);

// Procesar log usuario
router.get("/login",userController.iniciarSesion);


module.exports = router;
