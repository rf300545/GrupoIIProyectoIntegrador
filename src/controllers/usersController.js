const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../database/userDB.json');
const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt =require ("bcryptjs")
// Validacion cracion form registro
const { validationResult } = require("express-validator");



const usersController = {
    iniciarSesion: (req, res) => {
        res.render("login");
    },
    processlogin:(req,res)=>{
        for (let i = 0; i <user.length; i++){
            if(req.body.email == user[i].email && bcrypt.compareSync (req.body.contraseña, user[i].contraseña) ){
              // res.render("/")
                res.send("/");
            }} 
                res.send("error")
            
    },

    registrarse: (req, res) => {
        res.render("register");
    },

    saveUser: (req, res) => {
        let errors = validationResult(req);
        let avatarName;
        var contraseña = bcrypt.hashSync(req.body.contraseña,10)
        if (req.file){
            avatarName=req.file.filename
        }else{
            res.send("Ingrese su foto de perfil")
        };
        if (errors.isEmpty()){
        let idNuevo = user[user.length-1].id + 1;
        var newUser = Object.assign({id: idNuevo},req.body,{contraseña:contraseña},{image:avatarName});
        user.push(newUser);
        fs.writeFileSync(userFilePath, JSON.stringify(user,null, ' '));
        res.redirect("/");
        } else {
            res.render("register", { 
                errors: errors.array(),
                old: req.body
               });
        }
        }
        
}
    module.exports = usersController