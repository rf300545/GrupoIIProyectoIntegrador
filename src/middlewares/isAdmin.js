const db = require ("../database/models")

function isAdmin(req,res,next){
    const isEmailAdmin = []
    if(req.session.usuarioLogueado){
    const datos = Object.values(req.session.usuarioLogueado)
    const isEmailAdmin = datos.filter(function(correo){
        return correo == "admin@gmail.com"})
        
        if(isEmailAdmin == "admin@gmail.com"){
            res.locals.isAdmin = true
            console.log("se logueo el admin")}
            
    }
    next()
}

module.exports = isAdmin