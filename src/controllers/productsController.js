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
            for(let i=0;i<productsController.length;i++){
                if (producto[i].id==producto){
                    var productoEncontrado = producto[i]
                }
            }
            res.render("producto", {detalleProducto: productoEncontrado});
        },
  
        // MACHETEE
        // detail: (req, res) => {
        //     let idProducto = req.params.id;
        //     for(let i=0;i<products.length;i++){
        //         if (products[i].id==idProducto){
        //             var productoEncontrado = products[i];
        //         }
        //     }
        //     res.render('detail',{productoEnDetalle: productoEncontrado});
        // },




}

    

module.exports = productsController