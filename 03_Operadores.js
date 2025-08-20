/**
 * Operadores
 */
/**
 * operadores de asignacion
 */

//operador de asignacion

var y = 2;
var x = true;

//operador de asignacon de addicion y resto

var x = 2;
var y = 2;

x += y; // es lo mismo que poner x = x + y
console.log(x);
x -= y;
console.log(x);

//operador de multiplicacion y division

x *= y; // es lo mismo que poner x = x * y
console.log(x);

x /= y;
console.log(x);

//operador de resto

x %= y;

console.log(x);
//operador de exponente
x = 10;
y = 2;
x **= y;
console.log(x);

/**
 * operadores de comparacion
 */
//operador de igual
console.log(3==3);
console.log(3=="3");

//operador de no es igual
console.log(3!=3);

//operador de estrictamente igual y desigual
console.log(3==="3");

console.log(3!==3);

//operadores de comparación

console.log(3<4);
console.log(3>4);
console.log(3<=3);
console.log(3>=5);

/**
 * operadores aritmeticos
 * + 
 * -
 * *
 * /
 * %
 * **
 */

console.log(2 + 2);
console.log(2 - 1);
console.log(2 * 4);
console.log(4 / 2);
console.log(4 % 2);
console.log(2 ** 2);

//operadores de incremento

var numero = 0;

console.log(++numero);
console.log(numero++);
console.log(numero);
//operadores de decremento

var numero = 3;

console.log(--numero);
console.log(numero--);
console.log(numero);

// operadores logicos
// AND
console.log(true && true);
console.log(2>3 && 1<=2);
//OR
console.log(true || false);

//NOT

console.log(!true);

//Operador de cadena o concatenacion (+)

var nombre = "leo";
var apellido = "messi";

console.log(nombre +" "+ apellido);

//Operador de condicional (condicion? val1 : val2) 
//aqui las salidas:                   true : false

console.log(2>3 ? "es mayor" : "es menor");

//operador de desestructuracion

var persona = {
    nombre : "miguel" ,
    apellido : "martos"
}

var {nombre:Y , apellido}  = persona;

console.log(Y , apellido);

console.log(persona);

// desestructuracion de arrays

var array = [1,2,3,4,5,6];
var [primeraPosicion,dos] = array;

console.log(primeraPosicion);
console.log(dos);

/**
 * operador de acceso a propiedad 
 */
//Notación punto
var persona = {
    nombre : "miguel" ,
    apellido : "martos"
}

console.log(persona.nombre);
console.log(persona.apellido);

//notacion por corchetes 

var persona = {
    nombre : "miguel" ,
    apellido : "martos"
}

console.log(persona["nombre"]);

//notacion por corchetes en arrays 

var array = [1,2,3,4,5,6];

console.log(array[0]);

//Operacion de tipo

console.log(typeof "gabriel");
console.log(typeof 2);