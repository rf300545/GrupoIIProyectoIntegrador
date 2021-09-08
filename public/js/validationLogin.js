const form= document.getElementById("form")// no lo hice con querySelector porque ya esta el formulario de busqueda en la barra 
const emailField = form.email
const userPassword= form.contraseña // ver de sacarle la ñ en el html y en el contrlolador 
const isEmail = (field)=>{
    const regex= /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    return regex.test (field.value.toLowerCase())// validacion para ver si es correcto el formato de email
      }

const isEmpty = (field) => {
    return field.value.trim().length === 0
    
}

const generateError = (field, message) => {
    const span = field.nextElementSibling
    span.innerHTML = message
    span.classList.add("danger")// 
    
    
}

form.addEventListener ( "submit", function (e) {
    let contador=[]
     
        if (isEmpty (emailField) == true  ){ //"" el string vacio se entinede como False por defecto
          generateError (emailField,"El campo Email no puede estar vacio")
          contador.push("email vacio")
          console.log(contador)}
          
        if ( isEmpty(userPassword) != false ){
            generateError (userPassword, "El campo Contraseña no puede estar vacio")
            contador.push("contraseña vacia")
            console.log(contador)}
            

        if (!isEmail(emailField)&& (!isEmpty(emailField))){
            generateError (emailField,"Formato de email invalido")
            contador.push("email invalido")
            console.log(contador)}

    
        if (contador.length>0){
           e.preventDefault ();
        }}

    
    )
    console.log ("esto esta funcionacndo")