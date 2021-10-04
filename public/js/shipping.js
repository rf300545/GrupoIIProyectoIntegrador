
let totalCart= localStorage.getItem("total_compra")
let totalCompraSinEnvio= document.getElementById ("total-sin-envio")
totalCompraSinEnvio.innerHTML="$ " + totalCart
let totalCompra= document.getElementById("total-compra")
totalCompra.innerHTML="$ " + totalCart
