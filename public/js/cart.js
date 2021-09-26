
let pesca = document.getElementsByClassName ("row border-top border-bottom")/*  captura a donde se van a insertar los valores de localStorage */
let cartItems=localStorage.getItem("carrito")
function displayCart(){

    cartItems=JSON.parse(cartItems)
    
    Object.values(cartItems).map(item => {
        pesca[0].innerHTML += ` <div class="row main align-items-center">
        <div class="col-2"><img class="img-fluid" src=${item.img}></div><!-- imagen del producto-- reemplazar -->
        <div class="col">
            <div class="row text-muted">${item.nombre}</div><!-- producto -->
            <div class="row"></div>
        </div>
        <div class="col">
         <a href="#" class="resta"><i class="fas fa-minus fa-xs mp-cart-symbol minus"></i></a>
         <a href="#" class="border-none" id="cantidad">1</a>
         <a href="#" class="suma"><i class="fas fa-plus fa-xs mp-cart-symbol " ></i></a> </div>
        <div class="col">$ ${item.precio} <a href="#" class="cerrar">  <i class="far fa-trash-alt"></i></a></div>
        </div>`
    })

}
displayCart()

/* seteo para capturar botones - y +  */

let btnPlus=document.querySelectorAll(".suma")
let btnMinus=document.querySelectorAll(".resta")
let inicio= 1

/* boton menos */

    Array.from(btnMinus).forEach((btn,i) => {
    btn.addEventListener("click", () => {
        
         inicio= inicio-1
         if(inicio<1){
             inicio=1
         }
        let next=btnMinus[i].nextElementSibling.innerHTML = inicio.toString()
    
    })
  
    })
/* boton mas */
    Array.from(btnPlus).forEach((btn,i) => {
        btn.addEventListener("click", () => {

        inicio= inicio+1
        let next=btnMinus[i].nextElementSibling.innerHTML = inicio.toString()
                 
         })
      
        });

/* delete del carrito */
/* seteo para capturar boton eliminar  */

let btnBorrar= document.getElementsByClassName("cerrar")
/* let cart= localStorage.getItem("carrito") */
console.log(btnBorrar)
console.log(cartItems)

 Array.from(btnBorrar).forEach((btn,i) => {
    btn.addEventListener("click", () => {
        let btnId = i
        /* console.log( btnId) */
        console.log(cartItems)
        newCart=cartItems.splice(0,btnId)
        console.log (newCart) *//* 
        localStorage.setItem("carrito",JSON.stringify (newCart))
        window.location.reload(true);
 

  
    })
      
});
