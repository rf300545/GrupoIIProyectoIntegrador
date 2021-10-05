const fs = require('fs');
//const { reset } = require('nodemon');
const path = require('path');
const { debugPort } = require('process');
const db = require ("../database/models")
const { validationResult } = require("express-validator");
const { REPL_MODE_SLOPPY } = require('repl');
//const { Association } = require('sequelize/types');

const consulta = function(){
    db.Flavor.findAll () 
                 .then (function (flavors){        
            db.Category.findAll () 
                .then (function (category){            
            db.Brand.findAll () 
                .then (function (marca){               
                return {flavors : flavors, category : category, marca : marca };
            })
            })
            })

}

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
            modoDeUso :req.body.modoDeUso,
            peso: req.body.pesoNeto,
            ingrediente: req.body.ingredientes,
            imagen: req.file.filename,})
        /* .then(db.product_flavor.create({
            id_product : req.body.nombre,
            id_flavor : req.body.sabores})) */
        .then((resultados)=>{
        res.redirect ("/");
        });
        }else { db.Flavor.findAll () 
            .then (function (flavors){        
        db.Category.findAll () 
            .then (function (category){            
        db.Brand.findAll () 
            .then (function (marca){               
        return res.render("./createProduct",
        {errors: errors.array(),
        old: req.body,
        flavors : flavors, 
        category : category, 
        marca : marca });  })})})                     
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
            db.Flavor.findAll () 
                 .then (function (flavors){        
            db.Category.findAll () 
                .then (function (category){            
            db.Brand.findAll () 
                .then (function (marca){               
            db.Product.findOne({
                include: [
                    {association : "category"},
                    {association : "brand"},
                    {association : "sabores"}],
                    where: {id : idProducto}
                })
                .then((productoEncontrado)=>{
                res.render('editProduct',{productoEdit: productoEncontrado,flavors : flavors, category : category, marca : marca});
                })
            })
        })
    })
    },

       actualizar: (req,res)=>{ 
		let idProducto = req.params.id;
        let errors = validationResult(req)
        console.log("el re files es" + req.file)
        
        if (errors.isEmpty()){
        db.Product.update({
            nombre: req.body.nombre,
            id_brand: req.body.marca,
            id_category: req.body.categoria,
            peso: req.body.pesoNeto, // falta sabores
            precio: req.body.precio,
            descripcion : req.body.descripcion,
            modoDeUso :req.body.modoDeUso,
            peso: req.body.pesoNeto,
            ingrediente: req.body.ingredientes,
            },
        {where : {id: idProducto}})
        .then((productoEncontrado)=>{
		    res.redirect("/")
        })}	else
                { db.Flavor.findAll () 
                    .then (function (flavors){        
                db.Category.findAll () 
                    .then (function (category){            
                db.Brand.findAll () 
                    .then (function (marca){               
                return res.render("unProducto",
                {errors: errors.array(),
                old: req.body,
                flavors : flavors, 
                category : category, 
                marca : marca });  })})})                     
                }	
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
           
           
       },
       pago: (req,res)=>{
           res.render("payment")
       }
      
 }
module.exports = productsController