const express = require("express");
const router = express.Router();
const path = require ("path");
const productsController = require("../controllers/productsController")
const searchController = require("../controllers/searchController")
const apiController = require("../controllers/apiController")
const multer = require("multer");
const { body } = require ("express-validator");

// Validaciones
const productsValidator = [
    body ("nombre").notEmpty().withMessage("Ingrese el nombre").bail(),
    body ("pesoNeto").notEmpty().withMessage("Ingrese el peso"),
    body ("precio").notEmpty().withMessage("Ingrese el precio"),
    body ("tipoDeEnvase").notEmpty().withMessage("Ingrese el tipo de envase"),
    body ("modoDeUso").notEmpty().withMessage("Ingrese el modo de uso"),
    body ("ingredientes").notEmpty().withMessage("Ingrese los ingredientes"),
];

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/img/products');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
		cb(null, fileName);
	}
})
const uploadFile = multer({ storage });

//CARRO DE COMPRAS -ok
router.get("/carro_compras", productsController.carro);
router.get("/carro_compra2", productsController.carro2);
router.get("/direccionEnvio",productsController.direccionEnvio)
router.get ("/pago",productsController.pago)

//TODOS LOS PRODUCTOS - ok 
router.get("/", productsController.producto);

//CATEGORIAS NAVBAR
router.get("/preTraining", searchController.preTraining);
router.get("/quemadores", searchController.quemadores);
router.get("/ganadoresDePeso", searchController.ganadoresDePeso);
router.get("/postTraining", searchController.postTraining);
router.get("/intraTraining", searchController.intraTraining);
router.get("/aminoacidos", searchController.aminoacidos);
router.get("/otros", searchController.otros);
//API//
router.get("/categoriaProductos",apiController.categoriaProductos)
router.get("/categorias",apiController.categorias)

//CREAR PRODUCTO - falta que agregue el producto nuevo a la DB
router.get("/createProduct", productsController.createProduct);
router.post("/createProduct",uploadFile.array('productImg'),productsValidator, productsController.store);

//VER DETALLE DE UN PRODUCTO - ok
router.get("/:id", productsController.unProducto); 

//Editar Producto .
router.get("/editProduct/:id", productsController.editProduct);
router.put("/editProduct/:id", productsController.actualizar); 

//Borrar 
router.delete('/:id', productsController.borrar); 

module.exports = router;