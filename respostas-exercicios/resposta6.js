
//Faça um Programa que leia três números e mostre o maior deles.

let numero1 = parseFloat(prompt('Entre com o numero 1: '));
let numero2 = parseFloat(prompt('Entre com o numero 2: '));
let numero3 = parseFloat(prompt('Entre com o numero 3: '));

if (numero1 > numero2 && numero1 > numero3) {
    alert('O Maior numero é: ' + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    alert('O Maior numero é: ' + numero2);
} else {
    alert('O Maior numero é: ' + numero3);
}