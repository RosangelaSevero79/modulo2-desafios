/*Desafio 08

Dado um array idades, encontre o índice do último elemento que sejam maior ou
igual a 18.
const idades = [15, 22, 17, 20, 30, 12]; */

const idades = [15, 22, 17, 20, 30, 12];
let indice = -1;

for (let i = idades.length - 1; i >= 0; i--) {
    if (idades[i] >= 18) {
        indice = i;
        break; // Para o loop assim que encontrar o último elemento maior ou igual a 18
    }
}

if (indice !== -1) {
    console.log(`O índice do último elemento maior ou igual a 18 é: ${indice}`);
} else {
    console.log("Nenhum elemento maior ou igual a 18 encontrado.");
}