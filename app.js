const express = require ("express")
const app = express()
const path =require ("path")


app.use(express.static((__dirname + '/public'))); //Para ver HTML desde aca
app.listen(3030,() => 
console.log("ok"))

app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});

app.get("/carro_compras",(req,res)=> {
    res.sendFile(path.join(__dirname, "/views/carro_compras.html"))
});

app.get("/formregistro",(req,res)=> {
    res.sendFile(path.join(__dirname, "/views/formregistro.html"))
});

app.get("/login",(req,res)=> {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});

app.get("/producto",(req,res)=> {
    res.sendFile(path.join(__dirname, "/views/producto.html"))
});
app.get("/crearproducto",(req,res)=> {
    res.sendFile(path.join(__dirname, "/views/createProduct.html"))
});