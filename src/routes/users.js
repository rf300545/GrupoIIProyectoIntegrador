const express = require("express");
const router = express.Router();
const userController = require ("../controllers/usersController")

router.get("/."); 

router.get("/formregistro", userController.registrarse);

router.get("/login", userController.iniciarSesion);





module.exports = router;

//este