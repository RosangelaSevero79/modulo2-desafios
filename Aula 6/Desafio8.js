/*Desafio 08

Crie um programa que pede ao usuário para inserir uma palavra e
conta quantas vogais (a, e, i, o, u) ela contém. Utilize um loop for
e estruturas condicionais if para realizar a contagem.
(Não precisa considerar acentos. Ex.: aviao)
 */

function contarVogais(palavra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }
    return contador;
}
const palavra = prompt("Digite uma palavra:");
const quantidadeVogais = contarVogais(palavra);
console.log(`A palavra '${palavra}' possui ${quantidadeVogais} vogais.`);