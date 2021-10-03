const db = require ("../database/models")


function userLoggedHeader(req,res,next){
    res.locals.isLogged = false
    let cookieUser = req.cookies.savedUser
    if (cookieUser){
    db.User.findOne({
        where: {email : cookieUser}
    }) 
    .then((usuario)=>{  
        req.session.usuarioLogueado = usuario
    })
    .catch((err)=> {
        res.send("error en cookieUser.js")
      });
    }
    
    if(req.session.usuarioLogueado){
        res.locals.isLogged = true
        res.locals.usuarioLogueado = req.session.usuarioLogueado
    } //isLogged se usa para ocultar iconos de logueo en el header
    console.log(cookieUser + " en usLogHead")
    next()
}

module.exports = userLoggedHeader