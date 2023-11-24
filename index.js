var bandera = false;

function validar(){
    alert($("#user").val());
$("#user").val("cadena");

if (bandera){
    console.log("validacion completa")
}

}

function correctCaptcha(){
    console.log("Captcha resuelto correctamente")
    bandera = true;
}