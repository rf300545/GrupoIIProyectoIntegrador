let modoDeUso=document.querySelectorAll ("#toggle")
let toggleText=document.querySelectorAll ("#toggleText")

console.log 



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
