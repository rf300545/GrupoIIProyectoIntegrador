const productsControllers = {
        carro_compras: (req, res) => {
            res.render("carro_compras");
    },

        createProducts: (req, res) => {
            res.render("createProducts");
    },

        producto: (req, res) => {
            res.render("producto");
    }
}


module.exports = productosController;