/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//variables
	var precio1    
	var precio2    
	var precio3    
	var resultadoSuma

    //asigno ID a los precios
	precio1 = txtIdPrecioUno.value;

	precio2 = txtIdPrecioDos.value;

	precio3 = txtIdPrecioTres.value;
    
    //convierto precio en valor numerico
	precio1 = parseFloat(precio1);

	precio2 = parseFloat(precio2);

	precio3 = parseFloat(precio3);
    
    //suma
    resultadoSuma = precio1 + precio2 + precio3;

    //Alerta de la suma
    alert ("La respuesta es " +resultadoSuma);
}
function Promedio () 
{
	let resultadoProm

    //asigno ID a los precios
	precio1 = txtIdPrecioUno.value;

	precio2 = txtIdPrecioDos.value;

	precio3 = txtIdPrecioTres.value;
    
    //convierto precio en valor numerico
	precio1 = parseFloat(precio1);

	precio2 = parseFloat(precio2);

	precio3 = parseFloat(precio3);

    //suma
    resultadoSuma = precio1 + precio2 + precio3;

    //saco promedio
    resultadoProm = resultadoSuma/3

    //Alerta del promedio
    alert("El promedio de la suma es "+resultadoProm)


}
function PrecioFinal () 
{
	let finalMasIva

    //asigno ID a los precios
	precio1 = txtIdPrecioUno.value;

	precio2 = txtIdPrecioDos.value;

	precio3 = txtIdPrecioTres.value;

    //convierto precio en valor numerico
	precio1 = parseFloat(precio1);

	precio2 = parseFloat(precio2);

	precio3 = parseFloat(precio3);
    
    //suma
    resultadoSuma = precio1 + precio2 + precio3;

    //saco final + IVA
    finalMasIva = resultadoSuma + (resultadoSuma/100*21)

    //Alerta del precio final
    alert("El precio final + 21% de IVA es $"+finalMasIva)
}