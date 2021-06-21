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
app.listen(3030,() => console.log("Servidor corriendo"))

// MVC  -------------------------------------------------------------------------------------
app.use("/products", rutasProductos);  // Si hay /producto responder con rutas de productos "se ponen el nombre de la variable"
app.use("/users", rutasUsuario);
app.use("/main", rutasMain);
//-------------------------------------------------------------------------------------------