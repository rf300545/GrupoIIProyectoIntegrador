const fs = require('fs');
//const { reset } = require('nodemon');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
        carro: (req, res) => {
            res.render("carro_compras");
    },
        // Crear Producto -----
        createProduct: (req, res) => {
            res.render("createProduct");
    },
    //todavia no captura los datos del form, pero si genera el ID en la DB
        store: (req,res) =>{
            let productoNuevo = req.body;
            let idNuevo = products[products.length-1].id + 1;
            let nuevoObjeto = Object.assign({id: idNuevo},req.body,);
            products.push(nuevoObjeto);
            fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
            res.redirect("/");
    },
        //Main de productos - OK
        producto: (req, res) => {                                    
            res.render ("producto", {productos: products});
    },
        //Ver un producto - OK
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