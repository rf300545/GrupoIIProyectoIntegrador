const form= document.getElementById("form")// no lo hice con querySelector porque ya esta el formulario de busqueda en la barra 
const firstNameField = form.first_name
const lastNameField = form.last_name
const emailField = form.email
const passwordField = form.contraseña
const confirmPassField= form.confirm_contraseña

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
    span.classList.add("danger")
}
const confirmacion= function(){
    if (passwordField==confirmPassField){
    }
}


form.addEventListener ( "submit", function (e) {
    e.preventDefault();
    let contador=[]
    
   
        if (isEmpty(firstNameField)==true){
            generateError(firstNameField, "El campo nombre no puede estar vacío")
            contador.push("nombre vacio ")
        }
        if (isEmpty(lastNameField)==true){
            generateError(lastNameField, "El campo apellido no puede estar vacío")
            contador.push("apellido vacio")
        }

        if (isEmpty (emailField) == true  ){ //"" el string vacio se entinede como False por defecto
          generateError (emailField,"El campo Email no puede estar vacio")
          contador.push("email vacio")
          }
          
        if (isEmpty(passwordField) ==true){
            generateError (passwordField, "El campo Contraseña no puede estar vacio")
            contador.push("contraseña vacia")}

         if (isEmpty(confirmPassField) ==true){
            generateError (confirmPassField, "El campo Contraseña no puede estar vacio")
            contador.push("contraseña vacia")}
         
         if ( !isEmpty(confirmPassField) &&  (confirmPassField.value!==passwordField.value)){
            generateError (confirmPassField, "la contraseña ingresada no coincide")
             contador.push(confirmPassField.value)}    
            

        if (!isEmail(emailField)&& (!isEmpty(emailField))){
            generateError (emailField,"Formato de email invalido")
            contador.push("email invalido")
        }
        console.log (contador.length)
        if (contador.length==0){
            console.log ("llegue")
            form.submit();
        }
        
    })
    console.log ("esto esta funcionacndo")