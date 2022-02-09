/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  //variable ya asignada al ID
  let largo = txtIdLargo.value 
  let ancho = txtIdAncho.value 
  let radio = txtIdRadio.value
  let perimetroRectangulo
  let alambre

  //convierto largo y ancho a valor numerico
  largo = parseInt(largo)
  ancho = parseInt(ancho)
  
  //saco perimetro del rectangulo
  perimetroRectangulo = (2*largo) + (2*ancho);
  
  //saco la cantidad de alambre
  alambre = perimetroRectangulo * 3;

  //alerta
  alert("La cantidad de alambre es de "+alambre +" metros");
}
function Circulo () 
{	
	//variables
	let radio = txtIdRadio.value 
	let perimetroCirculo
	let alambre
 
    //convierto radio a valor numerico
    radio = parseInt(radio)

    //saco perimetro del circulo
	perimetroCirculo = 2*(3.14)*radio;

	//saco la cantidad de alambre
	alambre= perimetroCirculo * 3;

	//alerta
	alert("La cantidad de alambre para el circulo es de " +alambre +" metros");
}
function Materiales () 
{
	//variables
	let largo = txtIdLargo.value
	let ancho = txtIdAncho.value
	let radio = txtIdRadio.value 
	let contrapiso
	let BolsaCal
	let BolsaCemento
	let base

	//texto a numerico
	largo = parseInt(largo)
    ancho = parseInt(ancho)

    //saco contrapiso
	contrapiso = largo*ancho;

	//saco base contrapiso al cuadrado
	base = contrapiso * 2;

	//saco bolsa de cemento
	BolsaCemento = base*2

	//saco bolsa de cal
	BolsaCal = BolsaCemento*3

	//alerta
	alert("Se necesitan "+BolsaCemento+" bolsas de cemento y "+BolsaCal+" de cal")
}



