//Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.



let preco1 = parseFloat(prompt('Entre com o preço do primeiro produto: '));
let preco2 = parseFloat(prompt('Entre com o preço do segundo produto: '));
let preco3 = parseFloat(prompt('Entre com o preço do terceiro produto: '));

if (preco1 < preco2 && preco1 < preco3) {
    alert('Recomendamos você comprar o produto 1');
} else if (preco2 < preco1 && preco2 < preco3) {
    alert('Recomendamos você comprar o produto 2');
} else if (preco3 < preco1 && preco3 < preco2) {
    alert('Recomendamos você comprar o produto 3');
}
