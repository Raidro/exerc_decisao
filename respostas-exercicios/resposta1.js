
//Faça um Programa que peça dois números e imprima o maior deles.

let numero1 = parseFloat(prompt('Entre com o numero 1: '));
let numero2 = parseFloat(prompt('Entre com o numero 2: '));

if (numero1 > numero2) {
    alert('O Maior numero é: ' + numero1);
} else {
    alert('O Maior numero é: ' + numero2);
}