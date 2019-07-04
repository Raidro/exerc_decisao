/*
Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.

*/

let nota1 = parseFloat(prompt('Digite Nota 1: '));
let nota2 = parseFloat(prompt('Digite Nota 2: '));

let media = (nota1 + nota2) / 2; // faz a media entre nota 1 e 2

if (isNaN(nota1) || isNaN(nota2) || media < 0 || media > 10) { // o isNaN não aceita mais de um valor:isNaN(nota1,nota2)
    alert('Entrada Invalida!');
} else if (media == 10) {
    alert('Aprovado com Distinção!');
} else if (media >= 7) {
    alert('Aprovado!');
} else if (media < 7 && media >= 3) {
    alert('Em Recuperação!');
} else {
    alert('Reprovado!');
}