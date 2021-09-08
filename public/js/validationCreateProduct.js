const form= document.getElementById("form");
const errores = []
form.addEventListener("submit",function(e){

    e.preventDefault();

    let product = document.getElementById("Producto")
    let pesoNeto = document.getElementById("pesoNeto")
    let precios = document.getElementById("precios")
    let tipoDeEnvase = document.getElementById("tipoDeEnvase")
    let modoDeUso = document.getElementById("modoDeUso")
    let ingredientes = document.getElementById("ingredientes")
    let productImg = document.getElementById("productImg")

    if(product.value =="") {
        errores.push("producto")
    };
    if(pesoNeto.value =="") {
        errores.push("peso")
    };
    if(precios.value =="") {
        errores.push(" precio")
    };
    if(tipoDeEnvase.value =="") {
        errores.push(" tipo de envase")
    };
    if(modoDeUso.value =="") {
        errores.push(" modo de uso")
    };
    if(ingredientes.value =="") {
        errores.push(" ingredientes")
    };
    /* if(productImg.value =="") {
        errores.push("Ingrese la imagen")
    }; */

if (errores.length == 0){
    form.submit()
}

if (errores.length > 0){
    console.log(errores)
    alert("Ingrese los datos faltantes en" +" " + errores )
}
})



