const fs = require('fs');
const path = require('path');
const db = require ("../database/models")

const mainController = {
    index: (req, res) => {
        db.Product.findAll()  
        .then((resultado) =>{
            let allProducts = []
            for (unProducto of resultado){ 
            allProducts.push(unProducto)};
            res.render ("index", {producto: allProducts, session : req.session});
        })   

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