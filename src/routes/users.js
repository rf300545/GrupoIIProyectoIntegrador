const express = require("express");
const router = express.Router();
const path = require ("path");
const multer = require("multer");
const apiController = require("../controllers/apiController")
const alreadyLoggedMw = require("../middlewares/alreadyLoggedMw")
const notLogged = require("../middlewares/notLogged")



const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/img/avatars');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}` 
		cb(null, fileName);
	}
})
const uploadFile = multer({ storage });


// Constatante para validacion del user
const { body } = require ("express-validator");
const userController = require ("../controllers/usersController");

// Validaciones
const validacionCreacionUsuario = [
    body ("first_name").notEmpty().withMessage("Ingrese su nombre"),
    body ("last_name").notEmpty().withMessage("Ingrese su apellido"),
    body ("email").isEmail().withMessage("Ingrese un email valido"),
    body ("contraseña").notEmpty().withMessage("Ingrese una contraseña"),
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
		}// intenar poner aca para consultar si el mail ya existe en la dB
		return true;
	})

];

// Formulario de creacion de usuario
router.get("/register",alreadyLoggedMw,userController.registrarse);

//Procesar formulario de creacion
router.post("/register",uploadFile.single('avatar'),validacionCreacionUsuario,  userController.saveUser);

// Procesar log usuario
router.get("/login",alreadyLoggedMw,userController.iniciarSesion);
router.post("/login",userController.processlogin);
router.get ("/info",notLogged ,userController.userInfo) /* deberia ser por post o podria ser por get el pedido? */
router.get("/logOut", userController.logOut)

//API
router.get ("/usersData",apiController.userData)
router.get ("/singleUser",apiController.singleUser)


module.exports = router;
