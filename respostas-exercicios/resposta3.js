
//Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

let escrita = prompt('Digite (F) - Feminino, (M) - Masculino: ').toUpperCase().trim();// estou usando o toUpperCase para deixar tudo maiuscula
//o trim vai tirar os espaços
if (escrita == "F") {
    alert('Sexo Feminino Selecionado!');
} else if (escrita == "M") {
    alert('Sexo Masculino Selecionado!');
} else {
    alert('Sexo Invalido!'); // se não for nem F e nem M, ele da invalido;
}
