const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../database/userDB.json');
const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt =require ("bcryptjs")
const db= require ("../database/models")

const { validationResult } = require("express-validator");

const usersController = {
    iniciarSesion: (req, res) => {
        res.render("login");
    },
    
    /*processlogin:(req,res)=>{
        for (let i = 0; i <user.length; i++){
            if(req.body.email == user[i].email && bcrypt.compareSync (req.body.contraseña, user[i].contraseña) ){
                res.render("index");
                const logued = true;
            }} 
                res.send("error")
            
    },*/

    processlogin:(req,res)=>{
            db.User.findOne({
                where: {
                        contrasenia:bcrypt.compareSync (req.body.contraseña, db.User.contrasenia)}
            })
            .then((usuario)=>{
                console.log("logueado")
            })
            /*if(req.body.email == db.User.email && bcrypt.compareSync (req.body.contraseña, db.User.contrasenia) ){
                res.render("index");
                console.log("login ok")
                const logued = true;
            }
                res.send("error")*/
            
    },

    registrarse: (req, res) => {
        res.render("register");
    },

    saveUser: (req, res) => {
        let errors = validationResult(req);
        var contraseña = bcrypt.hashSync(req.body.contraseña,10)
        if (errors.isEmpty() && {avatar:null} ){ 
        db.User.create({    
            nombre : req.body.first_name,
            apellido : req.body.last_name,
            email : req.body.email,
            contrasenia: contraseña,
            avatar:"avatar_default.png"
        })
        .then((resultados)  => { 
            res.redirect('/');
        });
        }else {res.render("register",{ 
            errors: errors.array(),
            old: req.body});
        }
        
    }
}
    module.exports = usersController