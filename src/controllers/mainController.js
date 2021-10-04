const fs = require('fs');
const path = require('path');

const mainController = {
    index: (req, res) => {
        res.render("index", {session : req.session});
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