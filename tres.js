/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let temporada;
	let lugar;
	let cantidadPersonas;
	let lugarMasElegido;
	let sexoConMasPasajeros;
	let promedioPersonasPorViaje;
	let contBariloche = 0;
	let contCataratas = 0;
	let contSalta = 0;
	let contMujer = 0;
	let contMasculino = 0;
	let contFemenino = 0;
	let contInvierno = 0;
	let acumuladorPersonas = 0;
	let respuesta;

	respuesta = "s";

	while (respuesta == "s") {

		sexo = prompt("Ingrese su sexo: ");

		while (sexo != "femenino" && sexo != "masculino") {


			sexo = prompt("Error. ingrese sexo");


		}

		lugar = prompt("Ingrese lugar de destino: ");


		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {


			lugar = prompt("Error. Ingrese lugar de destino: ");


		}


		temporada = prompt("Ingrese temporada");

		while (temporada != "otoño" && temporada != "invierno" && temporada != "primavera" && temporada != "verano") {


			temporada = prompt("Error. Ingrese temporada: ");


		}

		acumuladorPersonas++;



		switch (lugar) {

			case "bariloche":
				contBariloche++;
				break;
			case "cataratas":
				contCataratas++;
			case "salta":
				contSalta++;
				break;

		}

		switch (sexo) {

			case "femenino":
				contMujer++;
				break;
			case "masculino":
				contMasculino++;
				break;

		}



		switch (temporada) {

			case "invierno":
				contInvierno++;
				promedioPersonasPorViaje = acumuladorPersonas / contInvierno;
				break;

		}


		respuesta = prompt("continuar? ");


	}


	if (contBariloche > contCataratas && contBariloche > contSalta) {

		lugarMasElegido = "Bariloche";

	} else if (contSalta >= contBariloche && contSalta > contCataratas) {

		lugarMasElegido = "Salta";

	} else {

		lugarMasElegido = "Cataratas";


	}

	if (contFemenino > contMasculino) {

		sexoConMasPasajeros = "Femenino";

	} else {

		sexoConMasPasajeros = "Masculino";

	}









	console.log("A - Lugar mas elegido: " + lugarMasElegido);
	console.log("B - Sexo con mas pasajeros " + sexoConMasPasajeros);
	console.log("C - Promedio de personas que viajan en invierno" + contInvierno);

}
