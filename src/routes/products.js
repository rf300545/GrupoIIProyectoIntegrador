const express = require("express");
const router = express.Router();
const path = require ("path");
const productsController = require("../controllers/productsController")
const multer = require("multer");

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

//TODOS LOS PRODUCTOS - ok
router.get("/", productsController.producto);

//CREAR PRODUCTO - falta que agregue el producto nuevo a la DB
router.get("/createProduct", productsController.createProduct);
router.post("/createProduct",uploadFile.single('productImg'), productsController.store);

//VER DETALLE DE UN PRODUCTO - ok
router.get("/:id", productsController.unProducto); 

//Editar Producto .
router.get("/editProduct/:id", productsController.editProduct);
router.put("/editProduct/:id", productsController.actualizar); 

//Borrar 
router.delete('/:id', productsController.borrar); 

module.exports = router;
