
function displayCart(){
    let cartItems=localStorage.getItem("carrito")
    cartItems=JSON.parse(cartItems)
    console.log (cartItems, "displayCart funcionando")
    Object.values(cartItems).map(item => {
        pesca[0].innerHTML = ` <div class="row main align-items-center">
        <div class="col-2"><img class="img-fluid" src=${item.img}></div><!-- imagen del producto-- reemplazar -->
        <div class="col">
            <div class="row text-muted">${item.nombre}</div><!-- producto -->
            <div class="row">Cotton T-shirt</div>
        </div>
        <div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div>
        <div class="col">$ ${item.precio} <span class="close">&#10005;</span></div>
        </div>`
    })

}
let pesca = document.getElementsByClassName ("row border-top border-bottom")
console.log (pesca)



/* pesca[0].innerHTML =` <div class="row main align-items-center">
<div class="col-2"><img class="img-fluid" src="https://i.imgur.com/1GrakTl.jpg"></div><!-- imagen del producto-- reemplazar -->
<div class="col">
    <div class="row text-muted">VENGO DE PESCA</div><!-- producto -->
    <div class="row">Cotton T-shirt</div>
</div>
<div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div>
<div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
</div>` 
 */
displayCart()