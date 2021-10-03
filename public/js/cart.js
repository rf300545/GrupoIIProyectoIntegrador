
let selectedProduct = document.getElementsByClassName ("row border-top border-bottom")/*  captura a donde se van a insertar los valores de localStorage */
let cartItems=localStorage.getItem("carrito")
/* INSERCION DE LOCAL STORAGE EN HTML */
function displayCart(){

    cartItems=JSON.parse(cartItems)
    
    Object.values(cartItems).map(item => {
        selectedProduct[0].innerHTML += ` <div class="row main align-items-center">
        <div class="col-2"><img class="img-fluid" src=${item.img}></div><!-- imagen del producto-- reemplazar -->
        <div class="col">
            <div class="row text-muted">${item.nombre}</div><!-- producto -->
            <div class="row"></div>
        </div>
        <div class="col">
         <a href="#" class="resta"><i class="fas fa-minus fa-xs mp-cart-symbol minus"></i></a>
         <a href="#" class="border-none" id="cantidad">${item.cantidad}</a>
         <a href="#" class="suma"><i class="fas fa-plus fa-xs mp-cart-symbol " ></i></a> </div>
        <div class="col">$ ${item.precio} <a href="#" class="cerrar">  <i class="far fa-trash-alt"></i></a></div>
        </div>`
    })

}
displayCart()

/* seteo para capturar botones - y +  */

let btnPlus=document.querySelectorAll(".suma")
let btnMinus=document.querySelectorAll(".resta")


    /* FUNCION RESTAR*/
        Array.from(btnMinus).forEach((btn,i) => {
            let inicio=1
        btn.addEventListener("click", () => {
        let inicio=btnMinus[i].nextElementSibling.innerText
            inicio= inicio-1
            if(inicio<1){
                inicio=1
            }
            cartItems[i].cantidad=inicio
            localStorage.setItem("carrito",JSON.stringify (cartItems))

            let next=btnMinus[i].nextElementSibling.innerHTML = inicio.toString() 
            
        })
    
        })
    /* FUNCION AGREGAR */
    
      Array.from(btnPlus).forEach((btn,i) => {
         btn.addEventListener("click", () => {
            let inicio=parseInt(btnMinus[i].nextElementSibling.innerText)
            inicio= inicio+1
            cartItems[i].cantidad=inicio        
            localStorage.setItem("carrito",JSON.stringify (cartItems))
            let next=btnMinus[i].nextElementSibling.innerHTML = inicio.toString() 
          
         })})


    /* FUNCION ELIMINAR */
        let btnBorrar= document.getElementsByClassName("cerrar")
        Array.from(btnBorrar).forEach((btn,i) => {
            btn.addEventListener("click", () => {
                let subtotal=localStorage.getItem("total_compra")
                let montoARestar= cartItems[i].precio*cartItems[i].cantidad
                let nuevoValorTotal= subtotal-montoARestar
                localStorage.setItem("total_compra",nuevoValorTotal)
                console.log(subtotal)

                let btnId = i
                newCart=cartItems.splice(0,btnId)
                localStorage.setItem("carrito",JSON.stringify (newCart))
                console.log(newCart)

                window.location.reload(true);
                
            })  
            
        });
    
    /* RESUMEN CARRITO */
        let totalItems= document.getElementById ("qty-cart").innerHTML = "ITEMS "+ cartItems.length.toString() 
        let cantProducts=document.getElementsByClassName ("border-none")
        Array.from(cantProducts).forEach((cant,i) => {
            console.log (cant)
        
            })  
    /* OPERACIONES MATEMATICAS */

    

/*   function suma (){ */
function suma(){
    let total=0

    Array.from(cartItems).forEach((producto)=>{
        
        let suma= producto.cantidad*producto.precio
        total=total+suma
       
   })
  
   localStorage.setItem("total_compra", total)
    let totalCount= document.getElementById("total").innerHTML= "$ " + total.toString()
    let totalEvio= document.getElementById ("total-envio").innerHTML = "$ "+ total.toString ()
   
}
suma() 


    Array.from(btnPlus).forEach((btn,i) => {
        btn.addEventListener("click",()=>{
        let total=0
        Array.from(cartItems).forEach((producto)=>{
        
             let suma= producto.cantidad*producto.precio
             total=total+suma
            
        })
        
        let totalCount= document.getElementById("total").innerHTML= "$ " + total.toString()
        let totalEvio= document.getElementById ("total-envio").innerHTML = "$ "+ total.toString ()
        localStorage.setItem("total_compra", total)
    

    })})
    Array.from(btnMinus).forEach((btn,i) => {
        btn.addEventListener("click",()=>{
        let total=0
        Array.from(cartItems).forEach((producto)=>{
        
             let suma= producto.cantidad*producto.precio
             total=total+suma
            
        })
     
        let totalCount= document.getElementById("total").innerHTML= "$ " + total.toString()
        let totalEvio= document.getElementById ("total-envio").innerHTML = "$ "+ total.toString ()
        localStorage.setItem("total_compra", total)
    

    })})
    let totalCalc=localStorage.getItem("total_compra")
    let totalCount= document.getElementById("total").innerHTML= "$ " + totalCalc.toString()
  
    
let botonComprar= document.getElementById("btnCheckOut")
botonComprar.addEventListener("click", (e)=>{
  e.preventDefault()
  swal("Hello world!");
    
})



/* let totalPrice=JSON.parse (localStorage.getItem("total_compra"))
let totalCount= document.getElementById("total").innerHTML= "$ " + totalPrice.toString() */
/*   function suma (){ */
   