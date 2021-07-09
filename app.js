const express = require ("express")
// MVC ------------------------------------------------------------------
let rutasProductos = require ("./src/routes/products");
let rutasUsuario = require ("./src/routes/users");
let rutasMain = require ("./src/routes/main");
//-----------------------------------------------------------------------
const app = express()
const path =require ("path")
//const router = require("./Router/products")

app.use(express.static((__dirname + '/public'))); //Para ver HTML desde aca
app.set("view engine", "ejs")
app.listen(3000,() => console.log("Servidor corriendo00000"))

// MVC  -------------------------------------------------------------------------------------
app.use("/products", rutasProductos);  // Si hay /producto responder con rutas de productos "se ponen el nombre de la variable"
app.use("/users", rutasUsuario);
app.use("/", rutasMain);
<<<<<<< HEAD
//-------------------------------------------------------------------------------------------

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
=======
//-------------------------------------------------------------------------------------------
>>>>>>> 3e3469a13c6316aeeb018350ff05e3a03f3a4ff4
