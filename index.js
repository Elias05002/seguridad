var bandera = false;

function validar(){
   // alert($("#user").val());

    if (bandera){
        console.log("validación completa");
        //Redireccione a la pagina correspondiente
    }
    

   // var pass = document.getElementById("password");
   // alert(user.value)
}

function correctCaptcha(){
    console.log("Captcha resuelto correctamente")
    bandera = true;
}