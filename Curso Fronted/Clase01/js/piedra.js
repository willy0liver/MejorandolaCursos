var opciones = ["Piedra","Papel","Tijera","Lagarto","Spock"]
var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opcionJugador = prompt("¿Escoge una opción?\n"+opciones[0]+": 0 \n"+opciones[1]+": 1 \n"+opciones[2]+": 2\n"+
							opciones[3]+": 3\n"+ opciones[4]+": 4",0);
var opcionJavaScript = aleatorio(0,4);

var msj = "";
if(!isNaN(opcionJugador) && opcionJugador>=0 && opcionJugador<=4)
{
	if(opcionJugador == piedra)
	{
		if(opcionJavaScript==piedra)
		{
			msj = "Empate";
		}
		else if(opcionJavaScript==papel)
		{
			msj = "Perdiste";
		}
		else if(opcionJavaScript==tijera)
		{
			msj = "Ganaste";
		}
		else if(opcionJavaScript==lagarto)
		{
			msj = "Ganaste";
		}
		else if(opcionJavaScript==spock)
		{
			msj = "Perdiste";
		}
	}
	else if(opcionJugador == papel)
	{
		if(opcionJavaScript==piedra)
		{
			msj = "Ganaste";
		}
		else if(opcionJavaScript==papel)
		{
			msj = "Empate";
		}
		else if(opcionJavaScript==tijera)
		{
			msj = "Perdiste";
		}
		else if(opcionJavaScript==lagarto)
		{
			msj = "Perdiste";
		}
		else if(opcionJavaScript==spock)
		{
			msj = "Ganaste";
		}
	}
	else if(opcionJugador == tijera)
	{
		if(opcionJavaScript==piedra)
		{
			msj = "Perdiste";
		}
		else if(opcionJavaScript==papel)
		{
			msj = "Ganaste";
		}
		else if(opcionJavaScript==tijera)
		{
			msj = "Empate";
		}
		else if(opcionJavaScript==lagarto)
		{
			msj = "Ganaste";
		}
		else if(opcionJavaScript==spock)
		{
			msj = "Perdiste";
		}
	}
	else if(opcionJugador == lagarto)
	{
		if(opcionJavaScript==piedra)
		{
			msj = "Perdiste";
		}
		else if(opcionJavaScript==papel)
		{
			msj = "Ganaste";
		}
		else if(opcionJavaScript==tijera)
		{
			msj = "Perdiste";
		}
		else if(opcionJavaScript==lagarto)
		{
			msj = "Empate";
		}
		else if(opcionJavaScript==spock)
		{
			msj = "Ganaste";
		}
	}
	else if(opcionJugador == spock)
	{
		if(opcionJavaScript==piedra)
		{
			msj = "Ganaste";
		}
		else if(opcionJavaScript==papel)
		{
			msj = "Perdiste";
		}
		else if(opcionJavaScript==tijera)
		{
			msj = "Ganaste";
		}
		else if(opcionJavaScript==lagarto)
		{
			msj = "Perdiste";
		}
		else if(opcionJavaScript==spock)
		{
			msj = "Empate";
		}
	}

	alert("JavaScript: " + opciones[opcionJavaScript] +"\nTú: "+opciones[opcionJugador]+"\n Resultado ---> ** " + msj+" **");
	//var divResultado = document.getElementById("resultado")
	//console.log(divResultado)
	//divResultado.innerHTML("JavaScript: " + opciones[opcionJavaScript] +"\nTú: "+opciones[opcionJugador]+"\n Resultado ---> ** " + msj+" **")
	$("#resultado").html("JavaScript: ");

}
else
{
	alert("La opción ingresada no es válida")
}



function aleatorio(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}
