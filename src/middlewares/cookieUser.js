function cookieUser (req, res,next){
next()
    if(req.cookies.savedUser != undefined && req.session.usuarioLogueado == undefined){
        db.User.findOne({
            where: {email : req.body.email}
        }) 
        .then((usuario)=>{
            let pswrd=bcrypt.compareSync (req.body.contraseña, usuario.contrasenia) 
            if(pswrd == true){
                res.redirect("/")    
            }else{res.send("contraseña incorrecta")}             
        })
        .catch((err)=> {
            res.send("email no registrado")
          });

    }
}


module.exports= cookieUser;