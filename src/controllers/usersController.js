const fs = require('fs');
const path = require('path');
//const userFilePath = path.join(__dirname, '../database/userDB.json');
//const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
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
                   req.session.usuarioLogueado = usuario //--- pareciera que no anda session, al hacer un res.send de req.session, directamente pasa a la linea del catch, como si se cortara el if por tener un error
                  //res.redirect("/")
                  res.send (req.session.usuarioLogueado)   
                   

                }else {
                    let errorPass=["Contraseña incorrecta"]
                    let errorUser=[""]
                   res.render ("login",{errorPass:errorPass, errorUser:errorUser}); };
                    
                    //res.send("contraseña incorrecta")}             
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