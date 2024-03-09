let secretNum = 0;
let attemptsCount = 0;
let listRandomNum = [];
let maxNum = 10;

function asignarTextoElemento(elemento, texto){
    let elementos= document.querySelector(elemento);
    elementos.innerHTML = texto;
    return;
}

console.log (secretNum);

function verifyAttempt() {
    let numUser = parseInt(document.getElementById('valueUser').value);
    console.log (numUser === secretNum);
    console.log (attemptsCount);
    if (numUser === secretNum){
        //usuario acierta
        asignarTextoElemento('p', `Acertaste el número en: ${attemptsCount} ${(attemptsCount === 1) ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //usuario no acerto
        if (numUser > secretNum){
            asignarTextoElemento('p', 'El  número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El  número secreto es mayor');
        }
        attemptsCount++;
        emptySpace();
    }
    return;
}

//limpiar espacio donde se escribe el numero
function emptySpace() {
    let emptyBox = document.getElementById('valueUser');
    emptyBox.value = '';
}

function generateNumSecret() {
    let generateNum = Math.floor(Math.random()*maxNum)+1;

    console.log (listRandomNum);
    console.log (generateNum);
    //si ya sorteamos todos los numeros
    if (listRandomNum.length == maxNum) {
        asignarTextoElemento ('p','Good Game');
    } else {
        //si el numero generado esta incluido en la lista
        if (listRandomNum.includes(generateNum)) {
            return generateNumSecret();
        } else {
            listRandomNum.push(generateNum);
            return generateNum;
        }
    }
}

function firstConditions() {
    asignarTextoElemento('h1','juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${maxNum}`);
    secretNum = generateNumSecret();
    attemptsCount = 1;
}

function restartGame() {
    emptySpace();
    firstConditions();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

firstConditions();