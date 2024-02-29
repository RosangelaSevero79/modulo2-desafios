/*Desafio 05

Crie um objeto chamado pessoa com as propriedades nome, idade, e cidade.
Verifique se a pessoa tem 18 anos ou mais (Exibir apenas true ou false)
Verifique se a pessoa não é de uma cidade chamada "São Paulo" (True ou False)
 */

// Criar o objeto pessoa
const pessoa = {
    nome: 'Maria',
    idade: 22,
    cidade: 'Bahia'
};

// Verificar se a pessoa tem 18 anos ou mais
const temMaisDe18Anos = pessoa.idade >= 18;
console.log("Tem 18 anos ou mais:", temMaisDe18Anos);

// Verificar se a pessoa não é de São Paulo
const naoEhSaoPaulo = pessoa.cidade !== 'São Paulo';
console.log("Não é de São Paulo:", naoEhSaoPaulo);