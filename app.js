const express = require ("express")
const app = express()
const path =require ("path")


app.use(express.static((__dirname + '/public'))); //Para ver HTML desde aca
app.listen(3030,() => 
console.log("ok"))

app.get("/",(req,res)=> {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, "/views/carro_compras.html"))
=======
    res.sendFile(path.join(__dirname, "/views/producto.html"))
>>>>>>> 37fadb02187095292132f0539e5f9b16f9c8c860
});

