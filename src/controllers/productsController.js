const fs = require('fs');
//const { reset } = require('nodemon');
const path = require('path');
const db = require ("../database/models")
const productsFilePath = path.join(__dirname, '../database/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    //se muestra, pero falta que sea dinamico
        carro: (req, res) => {
            res.render("carro_compras");
    },
    // Crear Producto - Ok
        createProduct: (req, res) => {
            res.render("createProduct");
    },
    //GUARDAR UN PRODUCTOgi
        store: (req,res) =>{
        // let productoNuevo = req.body;
        db.Product.create ({
        nombre: req.body.nombre,
        id_brand: req.body.marca,
        id_category: req.body.categoria,
        precio: req.body.precio,
        peso: req.body.pesoNeto,
        modoDeUso: req.body.modoDeUso,
        ingrediente: req.body.ingredientes,
        imagen: req.body.productImg,
    });

         res.render ("./createProduct")
                
                
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
            res.render('editProduct',{productoEdit: productoEncontrado});
    },

       actualizar: (req,res)=>{
        let valoresNuevos = req.body;
		let idProducto = req.params.id;	
		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				products[i].nombre = valoresNuevos.nombre;
				products[i].marca = valoresNuevos.marca;
				products[i].categoria = valoresNuevos.categoria;
				products[i].pesoNeto = valoresNuevos.pesoNeto;
				products[i].sabores = valoresNuevos.sabores;
                products[i].tipoDeEnvase = valoresNuevos.tipoDeEnvase;
                products[i].modoDeUso = valoresNuevos.modoDeUso;
                products[i].ingredientes = valoresNuevos.ingredientes;
                products[i].precio = valoresNuevos.precio;
				var productoEncontrado = products[i];
				break;
			}
		}
		fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
		res.render("unProducto",{productoEdit: productoEncontrado})
       },
//No esta listo !!
       borrar: (req,res)=>{
        let idProducto = req.params.id;	
		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var nombreImagen=products[i].image;
				products.splice(i,1);
				break;
			}
		}
	    fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
		fs.unlinkSync(path.join(__dirname,'../../public/img/products/'+nombreImagen));
		res.render('index',{productos: products});
       }
} 
module.exports = productsController