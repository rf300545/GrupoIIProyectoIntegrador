const fs = require('fs');
//const { reset } = require('nodemon');
const path = require('path');
const { debugPort } = require('process');
const db = require ("../database/models")
const productsFilePath = path.join(__dirname, '../database/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { validationResult } = require("express-validator");
const { REPL_MODE_SLOPPY } = require('repl');


const searchController = {
  
       quemadores: (req,res)=>{
          db.Product.findAll({
            include: [
                {
                  model: db.Category,
                  as: "category",
                  where: { nombre: "Quemadores" },
                }]
            })  .then((resultado) =>{
                let allProducts = []
                for (unProducto of resultado){ 
                allProducts.push(unProducto)};
                res.render ("producto", {producto: allProducts});
                
            })       
       
        },
        preTraining: (req,res)=>{
            db.Product.findAll({
              include: [
                  {
                    model: db.Category,
                    as: "category",
                    where: { nombre: "Pre-training" },
                  }]
              })  .then((resultado) =>{
                  let allProducts = []
                  for (unProducto of resultado){ 
                  allProducts.push(unProducto)};
                  res.render ("producto", {producto: allProducts});
         
              })       
         
          },  
          ganadoresDePeso: (req,res)=>{
            db.Product.findAll({
              include: [
                  {
                    model: db.Category,
                    as: "category",
                    where: { nombre: "Ganadores de peso" },
                  }]
              })  .then((resultado) =>{
                  let allProducts = []
                  for (unProducto of resultado){ 
                  allProducts.push(unProducto)};
                  res.render ("producto", {producto: allProducts});
                  
              })       
         
          },  
          postTraining: (req,res)=>{
            db.Product.findAll({
              include: [
                  {
                    model: db.Category,
                    as: "category",
                    where: { nombre: "Post-training" },
                  }]
              })  .then((resultado) =>{
                  let allProducts = []
                  for (unProducto of resultado){ 
                  allProducts.push(unProducto)};
                  res.render ("producto", {producto: allProducts});
                  
              })       
         
          },  
          intraTraining: (req,res)=>{
            db.Product.findAll({
              include: [
                  {
                    model: db.Category,
                    as: "category",
                    where: { nombre: "Intra-training" },
                  }]
              })  .then((resultado) =>{
                  let allProducts = []
                  for (unProducto of resultado){ 
                  allProducts.push(unProducto)};
                  res.render ("producto", {producto: allProducts});
                  
              })       
         
          },  
          aminoacidos: (req,res)=>{
            db.Product.findAll({
              include: [
                  {
                    model: db.Category,
                    as: "category",
                    where: { nombre: "Aminoácidos" },
                  }]
              })  .then((resultado) =>{
                  let allProducts = []
                  for (unProducto of resultado){ 
                  allProducts.push(unProducto)};
                  res.render ("producto", {producto: allProducts});
                  
              })       
         
          },  
          otros: (req,res)=>{
            db.Product.findAll({
              include: [
                  {
                    model: db.Category,
                    as: "category",
                   where: {nombre : { $not: ['Quemadores', "Pre-training"]}}
                  }]
              })  .then((resultado) =>{
                  let allProducts = []
                  for (unProducto of resultado){ 
                  allProducts.push(unProducto)};
                  res.render ("producto", {producto: allProducts});
                  
              })       
         
          },  


 }
module.exports = searchController