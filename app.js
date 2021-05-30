const express = require ("express")
const app = express()
const path =require ("path")


app.use(express.static((__dirname + '/public'))); //Para ver HTML desde aca
app.listen(3030,() => 
console.log("ok"))

app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname, "/views/formregistro.html"))
});

