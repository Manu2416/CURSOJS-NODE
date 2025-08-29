/**
 * Control de flujo
 */
//Estructura IF
var llueve = false;

if(llueve === false){
console.log("necesito un paraguas");
}

var admin = "admin";

if(admin === "admin"){
    console.log("Bienvenido");
}

const MAYORIA_DE_EDAD = 18;
var edadpersona = 18;

if(MAYORIA_DE_EDAD < edadpersona){
    console.log("eres mayor de edad");
}
else if(MAYORIA_DE_EDAD === 18){
    console.log("tienes justo 18 años");
}
else{
    console.log("no eres mayor");
}
//switch
var producto =  "papaya";
switch(producto){
    case "papaya":
        console.log("cuesta 2 pavos");
        break;
    case "manzana":
        console.log("cuesta 1 pavo");
        break;
    default:
        console.log("caso default");
}   
