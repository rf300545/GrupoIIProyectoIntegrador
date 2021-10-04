const fs = require('fs');
//const { reset } = require('nodemon');
const path = require('path');
const { debugPort } = require('process');
const db = require ("../database/models")
const { validationResult } = require("express-validator");
const { REPL_MODE_SLOPPY } = require('repl');
//const { Association } = require('sequelize/types');


const productsController = {
    //se muestra, pero falta que sea dinamico
        carro: (req, res) => {
            res.render("carro_compras");
    },
        carro2: (req, res) => { // borrar al terminar de armar el carrito
            res.render("carro_compra2");
    },
    // CREAR PRODUCTO - en desarrollo
        createProduct: (req, res) => {            
            db.Flavor.findAll () 
                 .then (function (flavors){        
            db.Category.findAll () 
                .then (function (category){            
            db.Brand.findAll () 
                .then (function (marca){               
                return res.render("./createProduct", {flavors : flavors, category : category, marca : marca });
            })
            })
            })
    },

    //GUARDAR UN PRODUCTO - OK
        store: (req,res) =>{
        let errors = validationResult(req);  
        if (errors.isEmpty()){
            db.Product.create ({
            nombre: req.body.nombre,
            id_brand: req.body.marca,
            id_category: req.body.categoria,
            peso: req.body.pesoNeto, // falta sabores
            precio: req.body.precio,
            descripcion : req.body.descripcion,
            modoDeUso :req.boy.modoDeUso,
            peso: req.body.pesoNeto,
            modoDeUso: req.body.modoDeUso,
            ingrediente: req.body.ingredientes,
            imagen: req.body.productImg,
        })
        .then((resultados)=>{
        res.redirect ("/");
        });
        }else {res.render("productsController",{ 
            errors: errors.array(),
            old: req.body});
        }           
                
},
    //Main de productos - OK
        producto: (req, res) => {                                                          
            db.Product.findAll()  
                .then((resultado) =>{
                    let allProducts = []
                    for (unProducto of resultado){ 
                    allProducts.push(unProducto)};
                    res.render ("producto", {producto: allProducts});
                })            
    },
    //Un producto - Ok
        unProducto: (req,res) =>{
            db.Product.findOne(
                {where:{id : req.params.id}}
            )
            .then((unProducto)=>{
                res.render("unProducto",{productoUnico : unProducto});
            })  
    },

        editProduct: (req, res) => {
            let idProducto = req.params.id;
            db.Product.findOne({
                include: [
                    {association : "category"},
                    {association : "brand"},
                    {association : "sabores"}],
                    where: {id : idProducto}
            })
            .then((productoEncontrado)=>{
                console.log("********************* " + productoEncontrado)
                res.render('editProduct',{productoEdit: productoEncontrado});
            })
    },

       actualizar: (req,res)=>{ // falta actualizarlo para que trabaje con la bd
        let valoresNuevos = req.body;
		let idProducto = req.params.id;
        
        db.Product.update({
            nombre: req.body.nombre,
            id_brand: req.body.marca,
            id_category: req.body.categoria,
            precio: req.body.precio,
            peso: req.body.pesoNeto,
            modoDeUso: req.body.modoDeUso,
            ingrediente: req.body.ingredientes,
            imagen: req.body.productImg,
        },
        {where : {id: idProducto}})
        .then((productoEncontrado)=>{
            fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
		    res.render("unProducto",{productoEdit: productoEncontrado})
        })

		/* for(let i=0;i<products.length;i++){
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
		} */
		
       },
//No esta listo !!
       borrar: (req,res)=>{
        let idProducto = req.params.id;	

        /* db.Product.destroy( 
            {where:{id : idProducto}}
        )
        .then((productoEncontrado)=>{
            res.send("producto eliminado")
            res.render('editProduct',{productoEdit: productoEncontrado});
        }) */

		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var nombreImagen=products[i].image;
				products.splice(i,1);
				break;
			}
		}
	    
		fs.unlinkSync(path.join(__dirname,'../../public/img/products/'+nombreImagen));
       },

       direccionEnvio: (req,res)=> {
           res.render("direccion_envio")
       }
      
 }
module.exports = productsController