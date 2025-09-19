/**
 * Manipulacion de arrays
 */
//foreach

var letras = ["a","b","c","d"];

// for(let i = 0; i < letras.length;i++){
    //     const element = letras[i];
    //     console.log(element);
    
    // }
    
    letras.forEach((elemento) => console.log(elemento));

/**
 * Mutable
 * push mete en la lista lo que queramos
 * 
 * shift obtiene el primer valorar de la lista
 * 
 * pop elimina el ultimo elemento
 */

var letras = ["a","b","c","d"];

letras.push("e");
console.log(letras);


var letras = ["a","b","c","d"];

var primerelemento = letras.shift();
console.log(primerelemento);
console.log(letras);

var letras = ["a","b","c","d"];


var ultimoElemento = letras.pop();
console.log(letras);
console.log(ultimoElemento);

// map - Inmutable

var estudiantes = ["Paula","Manuel","Maria","Mario"];

var asistencia = estudiantes.map((nombre_estudiante) =>{
    return {
        nombre : nombre_estudiante,
        asistencia : false
    }
})

console.log(asistencia);
console.log(estudiantes);

var productos = [
    {nombre : "camisetas", precio : 12},
    {nombre : "zapatillas" , precio : 20},
    {nombre : "panatalon" , precio : 25}
]

var productoImpuesto = productos.map((producto) => {
const impuesto = producto.precio * 0.12;
    return {
        ...producto,
        impuesto:impuesto
    }
})

var precios = productos.map((producto)=>{
    return producto.precio
})
console.log(productos);
console.log(productoImpuesto);
console.log(precios);

//- Filter Inmutable

var estudiantes = [
    {nombres : "manu" , edad : 23 , matriculado : true},
    {nombres : "maria" , edad : 25 , matriculado : false},
    {nombres : "paula" , edad : 21 , matriculado : true},
    {nombres : "jesus" , edad : 28 , matriculado : true},
    {nombres : "mario" , edad : 26 , matriculado : false}
]

// var filtrado = estudiantes.filter((estudiante)=> estudiante.edad >= 25);
var filtrado = estudiantes.filter((estudiante)=> estudiante.edad >= 25 && estudiante.matriculado == false);
console.log(estudiantes);
console.log(filtrado);
