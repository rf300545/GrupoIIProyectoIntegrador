const fs = require('fs');
//const { reset } = require('nodemon');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));





const productsController = {

        ncarro: (req, res) => {
            res.render("carro_compras");
    },

        ncreateProducts: (req, res) => {
            res.render("createProduct");
    },

        nproducto: (req, res) => {
            res.render("producto");
    },

    /*** VER DETALLE DE UN PRODUCTO ***/ 
        idUnProducto: (req, res) => {
            //res.render("producto")
            let idProducto = req.params.id;
            for(let i=0;i<products.length;i++){
                if (products[i].id==idProducto){
                    var productoEncontrado = products[i]
                }
            }
            res.render("producto", {detalleProducto: productoEncontrado});
        },

        editProduct: (req, res) => {
            let idProducto = req.params.id;	
            for(let i=0; i<products.length ; i++){
                if (products[i].id == idProducto){
                    var productoEncontrado = products[i];
                }
            }     
            res.render('editProduct',{products: productoEncontrado});
        },
        // MACHETEE
        // detail: (req, res) => {
        //     let idProducto = req.params.id;g
        //     for(let i=0;i<products.length;i++){
        //         if (products[i].id==idProducto){
        //             var productoEncontrado = products[i];
        //         }
        //     }
        //     res.render('detail',{productoEnDetalle: productoEncontrado});
        // },
}

    

module.exports = productsController