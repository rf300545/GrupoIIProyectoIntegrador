function cookieUser (req, res,next){
next()
    if(req.cookies.savedUser != undefined && req.session.usuarioLogueado == undefined){
        db.User.findOne({
            where: {email : req.cookies.email}
        }) 
        .then((usuario)=>{  
            req.session.usuarioLogueado = usuario
        })
        .catch((err)=> {
            res.send("eeee")
          });

    }
}


module.exports= cookieUser;