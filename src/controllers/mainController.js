const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../database/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController = {
    index: (req, res) => {
        res.render("index", {products:products, session : req.session});
},
    nosotros: (req, res) => {
        res.render("nosotros")
},
    contacto: (req, res) => {
        res.render("contacto")

},
    greenTeam: (req,res)=>{
        res.render("greenTeam")
    }
}

module.exports = mainController