/**
 * Funciones
 */

//declarativa

function primerFunction (){
    console.log("hola dani");
}

primerFunction();

// funccion con parametro

function primerFunction (nombre){
    console.log(`hola ${nombre}`);
}

var nombre = "daniel";
primerFunction(nombre);

//funccion devolviendo valor
function saludar (nombre){
    return `hola soy ${nombre}`
}

console.log(saludar("daniii"));

//expresion

var suma = function(n1,n2){
    return n1 + n2;
}

suma(4 , 6);
console.log(suma(4 , 6));

// arrow function

var restar  = (a,b) => {
    if (typeof a === "number" && typeof b == "number"){
        return a - b;
    }

    else{
         return ("solo se pueden restar numeros ");
    }
}

console.log(restar(3,"2"));


var multiplicar = (a, b) => a* b;

console.log(multiplicar(2,4));