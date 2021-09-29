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
  
       categoriaProductos: (req, res) => {          //trae todos los productos                                                 
        db.Product.findAll({
          include: [
              {
                model: db.Category,
                as: "category",
               
              }]})
            .then(productos =>{
            
             /* res.send(productos) */
             return res.status(200).json({

              total: productos.length,
              data: productos,
              status: 200            

            })         
      })},
        userData: (req,res) => {        //Trae todos los usuarios
          db.User.findAll()
          .then (usuarios => {
            return res.status(200).json ({
              total:usuarios.length,
              data: usuarios,
              status:200
            })
          })
        },
        
        singleUser: (req,res) => {
          db.User.findOne ({
            where: {id : 1}
        }) .then(user => {
          return res.status(200).json({
            data:user,
            status:200
          })
        })
        },

      categorias:(req,res) => {
        db.Category.findAll()
        .then (categoria => {
          return res.status(200).json ({
            total:categoria.length,
            data:categoria,
            status: 200
          })
        })
      }
    
}
module.exports = apiController