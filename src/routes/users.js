const express = require("express");
const router = express.Router();
const userController = require ("../controllers/usersController")

router.get("/register",userController.registrarse);
router.post("/register",userController.saveUser);

router.get("/login",userController.iniciarSesion);


module.exports = router;
