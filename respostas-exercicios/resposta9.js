let numero1 = parseFloat(prompt('Entre com o Numero 1: '));
let numero2 = parseFloat(prompt('Entre com o Numero 2: '));
let numero3 = parseFloat(prompt('Entre com o Numero 3: '));


let auxiliar = 0;

if (numero1 > numero2) {
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}

if (numero2 > numero3) {
    auxiliar = numero2;
    numero2 = numero3;
    numero3 = auxiliar;

}

if (numero1 > numero2) {
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}

alert('Ordem descrecente: ' + numero3 + ' - ' + numero2 + ' - ' + numero1);
