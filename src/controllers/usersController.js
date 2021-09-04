const fs = require('fs');
const path = require('path');
//const userFilePath = path.join(__dirname, '../database/userDB.json');
//const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const bcrypt =require ("bcryptjs")
const db= require ("../database/models")

const { validationResult } = require("express-validator");

const usersController = {
    iniciarSesion: (req, res) => {
        res.render("login");
    },
    
    
    processlogin:(req,res)=>{
            db.User.findOne({
                where: {email : req.body.email}
            }) 
            .then((usuario)=>{
               //console.log(usuario.contrasenia) 
                let pswrd=bcrypt.compareSync (req.body.contraseña, usuario.contrasenia) 
                if(pswrd == true){
                    res.redirect("/")    
                  //  req.session.usuario


                }else{res.send("contraseña incorrecta")}             
            })
            .catch((err)=> {
                res.send("email no registrado")
              });
            
            
    },

    registrarse: (req, res) => {
        res.render("register");
    },

    saveUser: (req, res) => {
        let errors = validationResult(req);
        var contraseña = bcrypt.hashSync(req.body.contraseña,10)
        if (errors.isEmpty()){ 
            db.User.create({    
                nombre : req.body.first_name,
                apellido : req.body.last_name,
                email : req.body.email,
                contrasenia: contraseña,
                avatar: req.file.filename,
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