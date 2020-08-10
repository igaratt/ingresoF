/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let peso;
  let tipo;
  let precio;
  let respuesta;
  let precioTotal;
  let marcaMasCaroLiquido;
  let precioSolidoBarato;
  let precioLiquidoCaro;
  let marcaMasBaratoSolido;
  let acumuladorPeso = 0;
  let acumuladorSolido = 0;
  let acumuladorLiquido = 0;
  let contadorSolido;
  let flagSolido = 0;
  let contSolido;
  let contLiquido;
  let flagLiquido = 0;




  respuesta = "s";

  while (respuesta == "s") {


    marca = prompt("Ingrese marca");

    peso = prompt("Ingrese peso");

    while (peso < 0 || isNaN(peso)) {

      peso = parseInt(prompt("Error. Ingrese peso: "));

    }

    tipo = prompt("Ingrese tipo solido o liquido");

    while (tipo != "liquido" && tipo != "solido") {


      tipo = prompt("Error. Ingrese tipo solido o liquido");

    }

    precio = parseInt(prompt("Ingrese precio: "));

    while (!(precio > 0 || isNaN(peso))) {


      precio = prompt("Error. Ingrese precio: ");

    }

    acumuladorPeso += peso;



    switch (tipo) {

      case "solido":
        acumuladorSolido += precio;
        contSolido++;
        if (flagSolido == 0 || precioSolidoBarato > precio) {

					marcaMasBaratoSolido = marca;
					flagSolido = 1;
        }
        break;
      
        case "liquido":
        acumuladorLiquido += precio;
        contLiquido++;
        if (flagLiquido == 0 || precioLiquidoCaro > precio) {

					marcaMasCaroLiquido = marca;
					flagLiquido = 1;
        }

        break;

    }
    
    respuesta = prompt("continuar? ");




  }

  console.log("A - El peso total de la compra es de: " + acumuladorPeso);
  console.log("La marca mas cara de los liquidos es: " +  marcaMasCaroLiquido);
  console.log("La marca del mas barato de los solidos es: "  + marcaMasBaratoSolido);
}
