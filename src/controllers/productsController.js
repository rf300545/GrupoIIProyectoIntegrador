const fs = require('fs');
//const { reset } = require('nodemon');
const path = require('path');
const { debugPort } = require('process');
const db = require ("../database/models")
const productsFilePath = path.join(__dirname, '../database/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    //se muestra, pero falta que sea dinamico
        carro: (req, res) => {
            res.render("carro_compras");
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

         res.render ("./")
                
                
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
       },
       quemadores: (req,res)=>{ //intentando hacer controlador para que traiga los productos de una categoria especifica
          db.Product.findAll({
            include: [
                {
                  model: Category,
                  where: { nombre: "Pre-training" },
                }]
            })  .then((resultado) =>{
                let allProducts = []
                for (unProducto of resultado){ 
                allProducts.push(unProducto)};
                //res.render ("producto", {producto: allProducts});
                res.send(resultado)
            })       
       
        }
 }
module.exports = productsController