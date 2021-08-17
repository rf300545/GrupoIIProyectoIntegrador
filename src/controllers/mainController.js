const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../database/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const db = require("../database/models")


const mainController = {

    index: (req, res) => {
        res.render("index", {products:products});
        /*db.Brand.findAll()
            .then((resultado)=>{
                res.send(resultado)
            })*/
},
    nosotros: (req, res) => {
        res.render("nosotros")
},
    contacto: (req, res) => {
        res.render("contacto")

},
}

module.exports = mainController