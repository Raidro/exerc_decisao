
//Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
//Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
// trabalho com tudo minusculo 
let turno = prompt('Qual o seu turno: M- matutino ou V- Vespertino ou N- Noturno?: ').toLowerCase().trim();


if (turno == 'm') {

    alert('Bom dia!');

} else if (turno == 'v') {

    alert('Boa Tarde!');

} else if (turno == 'n') {

    alert('Boa Noite!');
} else {
    alert('Valor digitado é invalido!! Por Favor entre com as informações descritas!');
}