const form= document.getElementById("form");
const errores = []

const inputPhoto = document.getElementById("productImg")
const photoContainer = document.getElementById("mp-img-createProductContainer")
const photo = photoContainer.querySelector(".mp-img-createProduct")


inputPhoto.addEventListener("change", function(){
    const file = this.files[0] //file es undefined si no hay img cargada
    if (file){
        const showPhoto = new FileReader()
        showPhoto.addEventListener("load", function(){
            photo.setAttribute("src", this.result)
            console.log(this.result) //.result es un 1 prop de FileReader
        })
        showPhoto.readAsDataURL(file)
    }

})

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



