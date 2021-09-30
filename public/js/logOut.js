const logOutButton = document.getElementById("logOut")
logOutButton.addEventListener("click", function(event){
    let cerrarSesion = window.confirm("Cerrar sesión??")
    if (cerrarSesion == true){
        console.log(sessionData)
        alert("cerrado")
        
    }
    else{
        alert("abierto")
    }
    
})