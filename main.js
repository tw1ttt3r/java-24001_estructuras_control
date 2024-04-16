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

// const edad1 = prompt('Proporciona tu edad:');
// console.info("edad1", edad1)

// ternario
// expresion ? verdadera : falsa;
// if (valor == null) {
//   console.info("Esta variable esta vacia");
// } else {
//   console.info("Esta variable no esta vacia");
// }
valor == null ? console.info("Esta variable esta vacia") : console.info("Esta variable no esta vacia");

// objetivo: asignacion de valores
console.info(valor == null ? "Esta variable esta vacia" : "Esta variable no esta vacia");


// Iterativas
// ejecutar un conjunto de líneas de código n número de veces
// for, while, for of, for in

// for
// sintaxis: for(inicio;condicion;incremento o decremento;) {}
// imprimir la secuenca de numero del 1 al 20
// string
//              01234
const nombre = "Pedro"; //n-1
for(let i=0;i < nombre.length;i++) {
  console.log(nombre[i]);
}

// Solicitarle al usuario su nombre completo
// cambiar todas las vocales a mayusculas
// los string .toUpperCase() .toLowerCase()
// "PEDRO" -> "PEDRO"
// "Pedro" -> "PEdrO"


const nombre1 = prompt('Nombre:');
let nombreConvertido = "";

// for (let i=0;i<nombre1.length;i++) {
//   switch(nombre1[i]) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       nombreConvertido += nombre1[i].toUpperCase(); // concatenación
//       // nombreConvertido = nombreConvertido + nombre1[i].toUpperCase();
//       break;
//     default:
//       nombreConvertido += nombre1[i]
//   }
// }

// console.log("nuevo nombre: ", nombreConvertido);


// While
// sintaxis: while(expr) {}

let i = 0;
while(i < nombre1.length) {
  switch(nombre1[i]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      nombreConvertido += nombre1[i].toUpperCase(); // concatenación
      // nombreConvertido = nombreConvertido + nombre1[i].toUpperCase();
      break;
    default:
      nombreConvertido += nombre1[i]
  }
  i++;
}

console.log("nuevo nombre: ", nombreConvertido);

// suma de numeros
// preguntarle al usuario por un numero
// quieres sumar otro numero
// si el usuario dice que si, preguntarle al usuario por un numero
// si el usuario dice que no, imprimir la suma
let respuesta = "s";
let acum = 0;

while(respuesta == "s") {
  const num = prompt("proporciona un numero: ");
  console.log("numero: ", num);
  acum += Number(num);
  respuesta = prompt("quieres sumar otro número: [s/n]");
}

console.info("suma: ", acum);





