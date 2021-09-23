let boton= document.getElementsByClassName("cart")
let nombre= document.getElementById("nombreCarrito").innerText
let precioCarrito = document.getElementById("precioCarrito").innerText
let precio=precioCarrito.replace(/\D/g,'');
let img =document.getElementById("imgCart").src
   


let arrayProducts =[];
boton[0].addEventListener("click",()=>{
    
  let producto= {
        "nombre": nombre, 
        "precio": precio,
        "img": img}  
         
    if (arrayProducts.lenght<1){
        arrayProducts.push(producto);
        localStorage.setItem("carrito",arrayProducts)
        console.log(arrayProducts)
        
    }else{ 
        arrayProducts = localStorage.getItem("carrito").push(producto)
   }; 
   console.log(arrayProducts)
            
})
    



/* script para guardar los datos en localstorage cuando haces click en el boton de agregar carrito en la pagina de unProducto */
// let arregloProdutos = localStorage.getItem("carrito");