let escrita = prompt('Entre com uma letra: ').toLowerCase().trim();

switch (escrita) {

    case 'a': case 'e': case 'i': case 'o': case 'u':
        alert('A letra digitada é uma Vogal!');
        break;
    default:
        alert('A letra digitada é uma Consoante!');

}