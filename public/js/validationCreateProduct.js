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
        errores.push("Ingrese el nombre del producto")
    };
    if(pesoNeto.value =="") {
        errores.push("Ingrese el peso")
    };
    if(precios.value =="") {
        errores.push("Ingrese el precio")
    };
    if(tipoDeEnvase.value =="") {
        errores.push("Ingrese el tipo de envase")
    };
    if(modoDeUso.value =="") {
        errores.push("Ingrese el modo de uso")
    };
    if(ingredientes.value =="") {
        errores.push("Ingrese los ingredientes")
    };
    if(productImg.value =="") {
        errores.push("Ingrese la imagen")
    };

if (errores.length == 0){
    form.submit()
}

})



