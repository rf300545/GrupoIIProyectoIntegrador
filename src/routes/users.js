const express = require("express");
const router = express.Router();
const path = require ("path");
const multer = require("multer");
const db= require ("../database/models")//ver

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/img/avatars');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}` //|| "avatar_default.png"; //VER SI FUNCIONA -----
		cb(null, fileName);
	}
})
const uploadFile = multer({ storage });


// Constatante para validacion del user
const { body } = require ("express-validator");
const userController = require ("../controllers/usersController");

// Validaciones
const validacionCreacionUsuario = [
    body ("first_name").notEmpty().withMessage("Pone un nombre").bail(),
    body ("last_name").notEmpty().withMessage("Pone un apellido"),
    body ("email").isEmail().withMessage("Ingresa un email valido"),
    body ("email").notEmpty(),
    body('avatar').custom((value, {req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg'];
		if (!file) {
			console.log("Asignado avatar default")
			//filename = "avatar_default.png"
			//throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}
		return true;
	})

];

// Formulario de creacion de usuario
router.get("/register",userController.registrarse);

//Procesar formulario de creacion
router.post("/register", uploadFile.single('avatar'),validacionCreacionUsuario,  userController.saveUser);

// Procesar log usuario
router.get("/login",userController.iniciarSesion);
router.post("/login",userController.processlogin);

module.exports = router;
