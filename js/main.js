

function validateForm(){
	
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById('lastname').value;
	var email = document.getElementById('input-email').value;
	var contrasena = document.getElementById('input-password').value;
	// tuve que agregarle un Id al select porque no supe como hacerlo...
	var selectCletas = document.getElementsByTagName('select')[0].selectedIndex;


//Validación nombre
	function validarNombre(){
		//campo obligatorio
		if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {

			alert("Este campo es obligatorio");  
			return false;
		}
		//sólo letras
		if (/[0-9]/.test(nombre)) {
        alert("Ingrese solo letras en nombre");
        return false;
   		}
   		//primera letra mayúscula
		if (nombre.charAt(0) != nombre.charAt(0).toUpperCase()) {
			alert("La primera letra del nombre tiene que ser mayúscula");
		}
	}
	validarNombre();

//Validación Apellido
	function validarApellido(){
		//campo obligatorio
		if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {

			alert("Este campo es obligatorio");  
			return false;

		}
		//sólo letras
		if (/[0-9]/.test(nombre)) {
        alert("Ingrese solo letras en apellido");
        return false;
   		}
   		//primera letra mayúscula
		if (apellido.charAt(0) != apellido.charAt(0).toUpperCase()) {
			alert("La primera letra del apellido tiene que ser mayúscula");
		}
   	}
	 validarApellido();

//Validación Email
	function validarEmail(){

		if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
        alert("Por favor ingresa un Email válido");
        return false;
    	}
	} 
	validarEmail();

//Validación Contraseña
	function validarContraseña(){
		if (contraseña.length<6 || contraseña =="password" || contraseña == 123456 || contraseña == 098754) {
        alert("Ingrese una contraseña válida");
        return false;
   		}
   	}
	validarContraseña;

	
//validarBicis();

	function validarBicis(){

    	if (selectCletas == 0 || selectCletas == null) {
        alert("Elige una opción  de bicicleta válida");
        return false;
   		}
	}
	validarBicis;


}




}