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

    registrarse: (req, res) => {
        res.render("register");
    },

    saveUser: (req, res) => {
        let avatarName=req.file.filename
        //validacion creacion usuario
        let errors = validationResult(req);
        //res.send(errors);
        if (errors.isEmpty()) {
        let idNuevo = user[user.length-1].id + 1;
        let newUser = Object.assign({id: idNuevo},req.body,{image:avatarName});;
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