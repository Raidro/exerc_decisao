//Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.


let escrita = prompt('Digite (F) - Feminino, (M) - Masculino: ');

if (escrita == "F") {
    alert('Sexo Feminino Selecionado!');
} else if (escrita == "M") {
    alert('Sexo Masculino Selecionado!');
} else {
    alert('Sexo Invalido!');
}
