/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //declaro la variable
    let nombreIngresado;

    //guardo el nombre
	nombreIngresado = prompt("Ingrese su nombre")

	//muestro al usuario
	alert("Su nombre es "+nombreIngresado);
}

