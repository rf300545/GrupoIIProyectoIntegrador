const express = require ("express")
const app = express()
const path =require ("path")
const session = require ("express-session"); // incluyo session como middleware a nivel de aplicacion FDu

//Captura la info del form de creacion
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "cookie_secret",
    resave: true,
    saveUninitialized: true
 }));

const methodOverride = require('method-override');
app.use(methodOverride("_method"))



app.use(express.static((__dirname + '/public'))); //Para ver HTML desde aca
app.set("view engine", "ejs")


// MVC ------------------------------------------------------------------
let rutasProductos = require ("./src/routes/products");
let rutasUsuario = require ("./src/routes/users");
let rutasMain = require ("./src/routes/main");
//-----------------------------------------------------------------------


// MVC  -------------------------------------------------------------------------------------
app.use("/products", rutasProductos);  // Si hay /producto responder con rutas de productos "se ponen el nombre de la variable"
app.use("/users", rutasUsuario);
app.use("/", rutasMain);
// USO DE SESSION-------------------------------------------------------------------------------------------
//app.use(session({secret: "Esto es un secreto!"}));




app.listen(process.env.PORT || 3000, () => {
    console.log("ok")})
