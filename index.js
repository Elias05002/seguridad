//var bandera = FALSE;

function validar(){
    var user = document.getElementById("user");
    alert($("#user").val());
    var pass = document.getElementById("password").value;
    alert(pass)
    if (bandera){
        console.log("Validacion completa");
        //redireccionar a la pagina correspondiente
    } 
}

//function validar(){
   // alert($("#user").val());
    //alert($("#password").val());
//$("#user").val("cadena");

//}



function correctCaptcha(){
    console.log("Captcha resuelto correctamente");
    bandera = true;
}