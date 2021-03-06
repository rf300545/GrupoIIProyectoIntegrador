const fs = require('fs');
const path = require('path');
const bcrypt =require ("bcryptjs")
const db= require ("../database/models")

const { validationResult } = require("express-validator");


const usersController = {
    iniciarSesion: (req, res) => {
        let errorPass=[""]
        let errorUser=[""]
        res.render("login",{errorPass:errorPass, errorUser:errorUser});
    },
        
    processlogin:(req,res)=>{


        let errorPass=[""]
        let errorUser=[""]
        db.User.findOne({
                where: {email : req.body.email}
            }) 
            .then((usuario)=>{
                let pswrd=bcrypt.compareSync (req.body.contraseña, usuario.contrasenia) 
                if(pswrd == true){ 
                   const emailDeUser = usuario.email
                   req.session.usuarioLogueado = usuario 
                   if(req.body.saveUser){ //si el checkbox esta marcado, guarda en cookie al email del user
                    res.cookie("savedUser",usuario.email,{maxAge: (1000 * 60) * 10 }, ) //120k ms -10min duracion
                    }  
                res.render("greenTeam", {userDatas : req.session.usuarioLogueado, emailDeUser : emailDeUser}) 
                   
                }else {
                    let errorPass=["Contraseña incorrecta"]
                    let errorUser=[""]
                    res.render ("login",{errorPass:errorPass, errorUser:errorUser}); };         
            })
            .catch((err)=> {
                let errorUser=["Usuario no registrado"]
                res.render("login",{errorPass:errorPass, errorUser:errorUser})
              })           
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
        .then((resultados) => { 
            res.redirect('/');
        });
        }else {res.render("register",{ 
            errors: errors.array(),
            old: req.body});
        }
        
    },
    userInfo: (req,res)=>{
        const userProfile = req.session.usuarioLogueado
        res.render("userInfo",{userData: userProfile})
    },
    logOut: (req,res)=>{
        res.clearCookie("savedUser")
        req.session.destroy((err) => {
        return res.redirect('/')
          })
    }
    
}
    module.exports = usersController