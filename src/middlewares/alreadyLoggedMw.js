function alreadyLoggedMw(req,res,next){
    if (req.session.usuarioLogueado){
        return res.redirect ("info")
    }
    next()
}

module.exports = alreadyLoggedMw