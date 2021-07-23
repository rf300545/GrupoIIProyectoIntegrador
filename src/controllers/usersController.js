const usersController = {
    iniciarSesion: (req, res) => {
        res.render("login");
    },

    registrarse: (req, res) => {
        res.render("register");
    }
}
    module.exports = usersController