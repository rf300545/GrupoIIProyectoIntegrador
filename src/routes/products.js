const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController")

// router.get("/."); 

router.get("/carro_compras", productsController.ncarro);

router.get("/producto", productsController.nproducto);

router.get("/createProducts", productsController.ncreateProducts);

/*Edicion de producto*/
router.get("/editProduct", productsController.editProduct);
//router.put('/edit/:id', productsController.update); /*????*/


/*** VER DETALLE DE UN PRODUCTO ***/ 
router.get("/producto/:id", productsController.idUnProducto); 


module.exports = router;
