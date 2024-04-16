// Estructuras de control

// Condicionales
// condicionar entre flujo y otro
// if, if else, if else if else, switch, ternario 

// if
// sintaxis: if (expresion boolean) { body }

// votar
// mas de 18 años
const edad = 18;
if (edad >= 18) {
  console.info("Puedo votar");
}

const valor = 89;

// if (valor == null) {
//   console.info("Esta variable esta vacia");
// }

// if else
// sintaxis: if () {} else {}
if (valor == null) {
  console.info("Esta variable esta vacia");
} else {
  console.info("Esta variable no esta vacia");
}

// if else if
// sintaxis: if () {} else if () {}

// puedo votar cuando tenga mas de 18 años
// cuando tengas 18 te daran tu credencial
if (edad == 18) {
  console.info("toma tu credencial")
} else if (edad > 18) {
  console.info("puedes votar")
} else {
  console.info("no puedes votar");
}

// anidación


// sintaxis: switch(value) { case n: break; default: break; }
// if() else if() {} else {}

// agencia de viajes
// 5 destinos
// cdmx $50
// monterrey $200
// yucatan $300
// oaxaca $400
// sinaloa $400

const destino = "sinaloa";
let costo = 0;

switch(destino) {
  case "cdmx":
    costo = 50;
    break;
  case "monterrey":
    costo = 200;
    break;
  case "yucatan":
    costo = 300;
    break;
  case "oaxaca":
  case "sinaloa":
    costo = 400;
    break;
  default:
    costo = 'No disponible';
    break;
}

console.info("el precio es: $", costo);

// prompt
// sintaxis: prompt('Proporciona tu edad:')
// retorno un valor
// guardarlo en  una variable
// el valor que retorna el prompt es de tipo string

const edad1 = prompt('Proporciona tu edad:');
console.info("edad1", edad1)

// Iterativas
// ejecutar un conjunto de líneas de código n número de veces
// for, while, for of, for in