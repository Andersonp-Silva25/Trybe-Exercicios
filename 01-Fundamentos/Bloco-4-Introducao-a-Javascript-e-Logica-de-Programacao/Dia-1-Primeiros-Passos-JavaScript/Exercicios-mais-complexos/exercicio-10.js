// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// + Atente que, sobre o custo do produto, incide um imposto de 20%.

const custo = 15;
const valor = 35;

let quantidadeVendida = 1000;
let imposto = (custo + (custo * 20)/100);
let lucro = (valor - imposto) * quantidadeVendida;

if (custo < 0 || valor < 0){
    console.log("Um dos valores é invalido");
}else {
     console.log("Custo do produto:", custo);
     console.log("Valor da venda do produto:", valor);
     console.log("Quantidade de produto vendida:", quantidadeVendida);
     console.log("Lucro recebido:", lucro);
}
