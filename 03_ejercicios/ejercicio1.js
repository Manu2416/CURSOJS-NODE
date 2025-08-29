/**
 * 1. Escribir un programa que calcule el número de segundos que existen en un día.
    Para ello debemos multiplicar los segundos de un minuto, por los minutos de
    una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.
 */
const dias = 1;
const tiempo = dias * 24 * 60 * 60;

console.log(`${dias} dias  tiene ${tiempo} segundos`);