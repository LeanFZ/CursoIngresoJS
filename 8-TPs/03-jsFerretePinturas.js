/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//variables
	let Centigrados 
	let fahrenheit = txtIdTemperatura.value //transformo variable a ID

	//convierto texto a numero
	entigrados = parseFloat(Centigrados)
	fahrenheit = parseFloat(fahrenheit)

	//formula pasar fahrenheit a centigrados
	Centigrados = (fahrenheit - 32) * 5 / 9;

	//alerta
	alert(Centigrados+"°C")


}

function CentigradosFahrenheit () 
{
	//variables
	let Centigrados = txtIdTemperatura.value //transformo variable a ID
	let fahrenheit 

	//convierto texto a numero
	Centigrados = parseFloat(Centigrados)
	fahrenheit = parseFloat(fahrenheit)

	//formula pasar centigrados a fahrenheit
	fahrenheit = Centigrados * 1.8 + 32;

	//alerta
	alert(fahrenheit+"°F")

}
