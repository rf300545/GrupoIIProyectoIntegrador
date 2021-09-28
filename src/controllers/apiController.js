const fs = require('fs');
//const { reset } = require('nodemon');
const path = require('path');
const { debugPort } = require('process');
const db = require ("../database/models")
const productsFilePath = path.join(__dirname, '../database/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { validationResult } = require("express-validator");
const { REPL_MODE_SLOPPY } = require('repl');


const apiController = {
  
       categoriaProductos: (req, res) => {                                                          
        db.Product.findAll()  
            .then(productos =>{
             /*  res.send(productos) */
            return res.status(200).json({

               total: productos.length,
              data: productos,
              status: 200
             

            })           
      })},
      
    
}
module.exports = apiController