
//Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

let escrita = prompt('Entre com uma letra: ').toLowerCase().trim(); // o toLowerCase() precisa dos parenteses pois é um metodo eo trim tira os espaços desnecessarios

/*
    se eu colocar: 

    let resposta = 'a letra é uma consoante'

    ela ja comecaria sendo uma consoante e eliminaria o else do programa abaixo

    if (escrita == 'a' || escrita == 'e' || escrita == 'i' || escrita == 'o' || escrita == 'u') {

    alert('A letra digitada é uma Vogal!');
    }

*/

if (escrita == 'a' || escrita == 'e' || escrita == 'i' || escrita == 'o' || escrita == 'u') {

    alert('A letra digitada é uma Vogal!');
} else {
    alert('A letra digitada é uma Consoante!');
}

