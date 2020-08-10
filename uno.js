/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contMujer = 0;
	let contMasculino = 0;
	let edadPromedioTotal;
	let hombreMasPesado;
	let acumuladorEdad = 0;
	let contEdad = 0;
	let flag = 0;




	for (i = 0; i < 5; i++) {


		nombre = prompt("Ingrese su nombre");

		peso = parseInt(prompt("Ingrese su peso"));


		while (peso < 0 || isNaN(peso)) {


			peso = parseInt(prompt("Error. Ingrese su peso "));

		}

		sexo = prompt("Ingrese su sexo: ");

		while (sexo != "femenino" && sexo != "masculino") {


			sexo = prompt("Error. ingrese sexo");

		}

		edad = parseInt(prompt("Ingrese su edad: "));

		while (edad < 0 || isNaN(edad)) {

			edad = parseInt(prompt("Error. Ingrese su edad: "));

		}


		acumuladorEdad += edad;
		contEdad++;


		switch (sexo) {

			case "femenino":
				contMujer++;
				break;
			case "masculino":
				contMasculino++;
				if (flag == 0 || pesoHombreMasPesado > peso) {

					hombreMasPesado = nombre;
					flag = 1;
				}
				break;

		}

		edadPromedioTotal = acumuladorEdad / contEdad;


	}



	console.log("A - Cantidad de mujeres: " + contMujer);
	console.log("B - Edad promedio total" + edadPromedioTotal);
	console.log("C - El hombre mas pesado es: " + nombreHombreMasPesado);

}
