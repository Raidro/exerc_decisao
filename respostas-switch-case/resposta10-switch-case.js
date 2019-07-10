
//charAt(0), ele pega o primeiro caracter digitado, jutamente com o trim, mesmo com espaço ele pegara sempre o primeiro caracter



let turno = prompt('Qual o seu turno: M- matutino ou V- Vespertino ou N- Noturno?: ').toLowerCase().trim();

switch (!isNaN(turno) || turno) {
    case true:
        alert('Digite um caracter Valido');
        break;

    case 'm':
        alert('Bom dia!');
        break;

    case 'v':
        alert('Boa Tarde!');
        break;

    case 'n':
        alert('Boa Noite!');
        break;

    default:
        alert('Valor digitado é invalido!! Por Favor entre com as informações descritas!');


}