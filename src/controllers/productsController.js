const productsController = {

        ncarro: (req, res) => {
            res.render("carro_compras");
    },

        ncreateProducts: (req, res) => {
            res.render("createProduct");
    },

        nproducto: (req, res) => {
            res.render("producto");
    }
}

module.exports = productsController