/* Desafio 02

Crie um vetor (array) chamado notas com as notas de um aluno em três
disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática
da média aritmética.
*/

// Criar um vetor (array) chamado notas com as notas do aluno
let notas = [8.5, 9.0, 7.5];

// Calcular a média aritmética
let soma = 0;

for (var i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

// Exibir a média
console.log("Notas: " + notas.join(", "));
console.log("Média: " + media.toFixed(2)); 