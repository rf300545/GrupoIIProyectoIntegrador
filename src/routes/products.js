const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController")

//router.get("/."); 

//CARRO DE COMPRAS
router.get("/carro_compras", productsController.carro);

//TODOS LOS PRODUCTOS
router.get("/producto", productsController.producto);

//CREAR PRODUCTO
router.get("/createProduct", productsController.createProducts);
//router.post("/createProducts", productsController.ncreateProducts);

<<<<<<< HEAD
//VER DETALLE DE UN PRODUCTO
=======
/*Edicion de producto*/
router.get("/editProduct", productsController.editProduct);
//router.put('/edit/:id', productsController.update); /*????*/


/*** VER DETALLE DE UN PRODUCTO ***/ 
>>>>>>> 3e3469a13c6316aeeb018350ff05e3a03f3a4ff4
router.get("/producto/:id", productsController.idUnProducto); 


module.exports = router;
