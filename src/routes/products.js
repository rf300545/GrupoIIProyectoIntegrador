const express = require("express");
const router = express.Router();
const productsController = require ("../controllers/productsController")

router.get("/."); 

router.get("/carro_compras", products.Controller.carro_compras);

router.get("/producto", productsController.products);

router.get("/createProducts", productsController.createProducts);



// // cambair la variable app x variable router
// router.get("/carro_compras",(req,res)=> {
//     res.sendFile(path.join(__dirname, "/views/carro_compras.html"))
// });

// router.get("/producto",(req,res)=> {
//     res.sendFile(path.join(__dirname, "/views/producto.html"))
// });
// router.get("/crearproducto",(req,res)=> {
//     res.sendFile(path.join(__dirname, "/views/createProduct.html"))
// });


module.exports = router;