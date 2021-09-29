let modoDeUso=document.querySelectorAll ("#toggle")
let toggleText=document.querySelectorAll ("#toggleText")
let ingredientes=document.querySelectorAll("#toggle2")
let ingredientesText=document.querySelectorAll("#toggleText2")
console.log 

function toggle(){

Array.from(modoDeUso).forEach((btn, i)=>{
   btn.addEventListener("click", ()=>{
       let texto= modoDeUso[i].nextElementSibling
       if (texto.style.display === "none") {
        texto.style.display = "block";
      } else {
        texto.style.display = "none";
      }
   })
})

}

toggle()