function validar(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("email").value;
	var direccion = document.getElementById("address").value;
	var fono = document.getElementById("phone").value;
	var mostrar= document.getElementById("clientes");	

	if(nombre == "" || nombre == null){
		alert("Debes ingresar tu nombre, de otra forma no podrás probar nuestros tecitos");
		return;
	}
	else if(lastname == "" || == null){
		alert("Si no ingresas tu apellido, cómo podremos enviarte nuestros tecitos");
		return;
	}
	else if(email != /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/ || == null){
		alert("No olvides que tu correo debe incluir el símbolo @");
		return;
	}
	else if(direccion == "" || == null){
		alert("Si no sabemos tu dirección, cómo podrán llegar los tecitos a tu hogar?");
		return;
	}
	else if(fono != /^\d{9}$/ || == null){
		alert("Por favor ingresa tu teléfono para poder comunicarnos contigo");
		return;
	}
	else{
		mostrar.innerHTML = (Nombre)

	}
	}


	