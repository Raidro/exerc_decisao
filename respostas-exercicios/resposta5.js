
let nota1 = parseFloat(prompt('Digite Nota 1: '));
let nota2 = parseFloat(prompt('Digite Nota 2: '));

media = (nota1 + nota2) / 2;

if (isNaN(nota1, nota2) || media < 0 || media > 10) {
    alert('Entrada Invalida!');
} else if (media >= 7) {
    alert('Aprovado!');
} else if (media < 7 && media >= 3) {
    alert('Em Recuperação!');
} else {
    alert('Reprovado!');
}