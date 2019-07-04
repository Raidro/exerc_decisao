
//Faça um Programa que leia três números e mostre o maior deles.

/*
outra forma de resolver essa questão é:

let numero 1 = parseFloat(prompt('Informe um numero1: '));

let maior = numero1;

let numero 2 = parseFloat(prompt('Informe um numero2: '));
if (numero2 > maior){
    maior = numero2;
}
let numero 3 = parseFloat(prompt('Informe um numero3: '));
if (numero3 > maior){
    maior = numero3;
}

alert(maior);

*/

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