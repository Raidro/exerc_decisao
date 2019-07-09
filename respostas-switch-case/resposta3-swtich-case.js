
let escrita = prompt('Digite (F) - Feminino, (M) - Masculino: ').toUpperCase().trim();

switch (escrita) {

    case 'F':
        alert('Sexo Feminino Selecionado!');
        break;
    case 'M':
        alert('Sexo Masculino Selecionado!');
        break;
    default:
        alert('Sexo Invalido!');



}