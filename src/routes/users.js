const express = require("express");
const router = express.Router();
const multer = require("multer");

// Constatante para validacion del user
const { body } = require ("express-validator");
const userController = require ("../controllers/usersController");

// Validaciones
const validacionCreacionUsuario = [
    body ("first_name").notEmpty().withMessage("Pone un nombre"),
    body ("last_name").notEmpty().withMessage("Pone un apellido"),
    body ("email").isEmail().notEmpty().withMessage("Pone un email"),

];

// Formulario de creacion de usuario
router.get("/register",userController.registrarse);

//Procesar formulario de creacion
router.post("/register", validacionCreacionUsuario, userController.saveUser);

// Procesar log usuario
router.get("/login",userController.iniciarSesion);


module.exports = router;
