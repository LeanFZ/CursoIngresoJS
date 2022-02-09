/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*
10 bis 
lo anterior mas.
se debe pedir el % por prompt
cambiamos la salida:
Mostrar por alert el importe, la cantidad del descuento, el importe con el descuento
ej: "El importe es 1000 la cantidad de descuento es 250 y el importe con el descuento es 750"
*/
function mostrarAumento()
{
	let importe
    let resultado
    let descuento
    let cuantoDescuento

    importe= txtIdImporte.value;
    
    importe= parseFloat(importe);

    cuantoDescuento = parseFloat(cuantoDescuento)

    cuantoDescuento = prompt("Ingrese cuanto descuento desea ")

    descuento = (importe/100*cuantoDescuento);

    resultado= importe - descuento;

    txtIdResultado.value = resultado;

    alert("El importe es $" +importe +" con un %"+cuantoDescuento+" de descuento,"+ 
        "la cantidad de descuento es de $" + descuento +" y el importe con el descuento es de $"+resultado);
}
