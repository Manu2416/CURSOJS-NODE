/**
 * Variables
 * 
 * 3 Formas de Nombrar variables 
 * 
 * Var --Funciona de forma global
 * Let --Solo en bloque de codigo
 * Const --No cambia --> buena practica ponerlas en mayusculas y separadas con _
 * 
 */

// Variables con var

var nombre = "Julio";

console.log(nombre);

var ciudad;
ciudad = "madrid";
ciudad = "guada"
console.log(ciudad);

//variables con let 

let nombre ="paula";
console.log(nombre);

{
    let saludo = "Buenos dias";
    console.log(saludo);
}
console.log(saludo);


{
    var saludo = "Buenos dias";
    console.log(saludo);
}
console.log(saludo);

//Variables const

const NUMERO_PI =  3.14;
console.log(NUMERO_PI);


var nombre = "Jesus";

var saludo = `hola soy ${nombre} como estas`;

console.log(saludo);