var bandera = false;

function validar(){
 alert($("#user").val());
$("#user").val();

if (bandera){
    console.log("validacion completa")
}

}

function correctCaptcha(){
    console.log("Captcha resuelto correctamente")
    bandera = true;
}