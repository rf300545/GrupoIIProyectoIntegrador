const fs = require('fs');
//const { reset } = require('nodemon');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
        carro: (req, res) => {
            res.render("carro_compras");
    },

        createProducts: (req, res) => {
            res.render("createProduct");
    },
        //Main de productos - OK
        producto: (req, res) => {                                    
            res.render ("producto", {productos: products});
    },
        unProducto: (req,res) =>{
            let idP = req.params.id;
            for(let i=0;i<products.length;i++){
                if (products[i].id == idP){
                    var productoSeleccionado = products[i];
                }
            }
            res.render("unProducto",{productoUnico : productoSeleccionado});
    },

        editProduct: (req, res) => {
            let idProducto = req.params.id;	
            for(let i=0; i<products.length ; i++){
                if (products[i].id == idProducto){
                    var productoEncontrado = products[i];
                }
            }     
            res.render('editProduct',{productoEdit: products});
        },
       
} 
module.exports = productsController