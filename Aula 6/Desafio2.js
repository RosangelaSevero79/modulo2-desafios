/*Desafio 02

Crie um objeto representando uma pessoa com nome, idade e cidade.
Utilize um loop for-in para imprimir no console todas as
propriedades e os valores do objeto
 */

let pessoa = { nome: 'Verinha', idade: '22', hobbie: 'estudar' };

for (item in pessoa) {
    console.log(`${item}: ${pessoa[item]}`)
}