/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//variables
	let numero1
	let numero2
	let resultado

	//asignacion de variable a valor
	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

    //convirtiendo la variable en numeros
    numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);

    //sumar resultados
	resultado = numero1 + numero2;


    //alerta
	alert("El resultado es " +resultado);
}


