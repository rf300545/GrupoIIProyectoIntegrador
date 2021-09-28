const logOutButton = document.getElementById("logOut")
logOutButton.addEventListener("click", function(event){
    let cerrarSesion = window.confirm("Cerrar sesión??")
    if (cerrarSesion == true){
        alert("cerrado")
        console.log(req.session)
    }
    else{
        alert("abierto")
    }
    
})