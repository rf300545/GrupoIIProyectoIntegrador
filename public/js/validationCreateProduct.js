const form= document.getElementById("form");
const errores = []


form.addEventListener("submit",function(e){
    const errores = []
    e.preventDefault();

    let product = document.getElementById("Producto")
    let pesoNeto = document.getElementById("pesoNeto")
    
    let precios = document.getElementById("precios")
    let descripcion = document.getElementById("descripcion")
    let modoDeUso = document.getElementById("modoDeUso")
    let ingredientes = document.getElementById("ingredientes")
    let productImg = document.getElementById("productImg")
    
    if(product.value =="") {
        errores.push(" producto")
    };
    if(pesoNeto.value =="") {
        errores.push(" peso")
    };
    if(precios.value =="") {
        errores.push(" precio")
    };
    if(descripcion.value =="") {
        errores.push(" descripcion")
    };
    if(modoDeUso.value =="") {
        errores.push(" modo de uso")
    };
    if(ingredientes.value =="") {
        errores.push(" ingredientes")
    };
    if(productImg.files.length == 0 ) {
        errores.push(" imagen")
    };

if (errores.length == 0){
    form.submit()
}

if (errores.length > 0){
    console.log(errores)
    alert("Ingrese los datos faltantes en" +" " + errores )
}
})



