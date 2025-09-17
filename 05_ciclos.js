/**
 * Ciclos
 * 
 * While
 */
let contador = 0;
while(contador <= 10){
    console.log("hola mundo");
    contador += 1;
}
//no imprime nada porque 5 es mayor que 5
let contador_1 = 6;
while(contador_1 <= 5){
    console.log("hola mundo");
    contador_1 += 1;
}
//do - while 
//primero se ejecuta almenos una vez hasta que de un valor logico falso 
let contador_2 = 11;
do{
console.log("Hola mundo");
contador_2+= 1;
}while(contador_2<= 10);
//for

for(let i = 0; i <= 4 ;  i++){
    console.log("hola mundo");
}
//for -- in

var persona ={
    nombre : "daniel",
    apellido : "gonzalez",
    edad : 31
}
for(let clave in persona ){
    console.log(clave, persona[clave]);
}
//for -- of
var lista = [1,2,3,4,5]
var nombre = "daniel";

for(let valor of nombre){
    console.log(valor);
}