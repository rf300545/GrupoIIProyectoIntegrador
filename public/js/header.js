
let carrito= document.getElementById("mp-listItems-header2")
let contenidoCarro=JSON.parse(localStorage.getItem("carrito")).length
carrito.innerHTML+=contenidoCarro
console.log(contenidoCarro)
let botonAgregar=document.getElementById("cart")
