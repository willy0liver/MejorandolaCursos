var tipoPokemon = ["Agua", "Eléctrico", "Piedra", "Psíquico"];
var listaPokemon = [ ["Lapras","Squirtle","Tentacruel"],
				     ["Electabuzz","Pikachu","Tumblr"], 
				     ["Geodude","Golem","Onix"], 
				     ["Abra","Kadabra","Mewtwo"]];

var listaImagenes = [ ["imagenes/Agua/Lapras_500.png","imagenes/Agua/Squirtle_500.png","imagenes/Agua/Tentacruel_500.png"],
					  ["imagenes/Electrico/Electabuzz_500.png","imagenes/Electrico/Pikachu_500.png","imagenes/Electrico/Tumblr_500.png"], 
					  ["imagenes/Piedra/Geodude_500.png","imagenes/Piedra/Golem_500.png","imagenes/Piedra/Onix_500.png"], 
					  ["imagenes/Psiquico/Abra_500.png","imagenes/Psiquico/Kadabra_500.png","imagenes/Psiquico/Mewtwo_500.png"]];

var imgPokemonVacio = "imagenes/quienesesepokemon.png";
function inicio()
{
	boton = document.getElementById("btnCapturar");
	boton.addEventListener("click", fr_capturar);
	//imgPokemon.onload = mostrar;	
}

function aleatorio(min, max)
{
	return Math.floor(Math.random()*(max - min + 1) + min)
}

function Pokemon(nombre,v,tipo,imagen,fuerza)
{
	this.nombre = nombre;
	this.vida = v;
	this.tipo = tipo;
	this.imagen = imagen;
	this.fuerza = fuerza;
	this.grito = function()
	{
		alert("GRITOOOO: " + this.nombre);
	}
}

function fr_capturar()
{	
	var eleccion = prompt("Elige un Pokemon"+
						   "\n "+ tipoPokemon[0] +": 0"+
						   "\n "+ tipoPokemon[1] +": 1"+
						   "\n "+ tipoPokemon[2] +": 2"+
						   "\n "+ tipoPokemon[3] +": 3", 0);

	if(0 <= eleccion && eleccion <=3)
	{
		var indPoke = aleatorio(0,2);
		var miPokemon = new Pokemon(listaPokemon[eleccion][indPoke], aleatorio(80,100), tipoPokemon[eleccion],listaImagenes[eleccion][indPoke],aleatorio(50,60));
		console.log(miPokemon);
		
		nombrePokemon.innerHTML = "Mi pokemon aleatorio es "+miPokemon.nombre;
		imgPokemon.src = miPokemon.imagen; 
		datosPokemon.innerHTML = "Vida: " + miPokemon.vida
								  +"<br/> Tipo: "+miPokemon.tipo
								  +"<br/> Fuerza: "+miPokemon.fuerza;
		miPokemon.grito();
	}
	else{
		nombrePokemon.innerHTML = "Selección incorrecta";
		imgPokemon.src = imgPokemonVacio; 
		datosPokemon.innerHTML = "";
		miPokemon.grito();
	}	
	
}
