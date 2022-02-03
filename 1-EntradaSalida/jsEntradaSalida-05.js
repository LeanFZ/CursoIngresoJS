/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//variable de nombre
	let nombreIngresado
    //guardar nombre
	nombreIngresado = txtIdNombre.value;
    //variable de edad
	let edadIngresada
    //guardo edad
	edadIngresada = txtIdEdad.value;
    //muestro nombre y edad en alerta
	alert("Usted se llama " +nombreIngresado +" y tiene " +edadIngresada +" años");
}

