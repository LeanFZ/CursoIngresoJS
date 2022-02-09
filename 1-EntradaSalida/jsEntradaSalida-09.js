/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

/*
9 bis 
lo anterior mas.
se debe pedir el % por prompt
*/
function mostrarAumento()
{

    let sueldo
    let resultado
    let incremento
    let porcentaje

    sueldo= txtIdSueldo.value;
    
    sueldo= parseFloat(sueldo);

    porcentaje= parseFloat (porcentaje);

    porcentaje = prompt ("Ingrese el porcentaje de aumento que desea ")

    incremento = (sueldo/100*porcentaje);

    resultado= sueldo + incremento;

    txtIdResultado.value = resultado;
    

	//txtIdSueldo
	//txtIdResultado
}
