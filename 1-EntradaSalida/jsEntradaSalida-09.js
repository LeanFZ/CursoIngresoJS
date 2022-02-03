/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    let sueldo
    let resultado
    let incremento

    sueldo= txtIdSueldo.value;
    
    sueldo= parseFloat(sueldo);

    incremento = (sueldo/100*10);

    resultado= sueldo + incremento;

    txtIdResultado.value = resultado;
    

	//txtIdSueldo
	//txtIdResultado
}
