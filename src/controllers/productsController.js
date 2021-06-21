const productsController = {

        carro: (req, res) => {
            res.render("carro_compras");
    },

        createProducts: (req, res) => {
            res.render("createProduct");
    },

        producto: (req, res) => {
            res.render("producto");
    }
}

module.exports = productsController