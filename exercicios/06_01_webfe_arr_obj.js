/*
Escreva uma função que receba duas variáveis numéricas por parâmetro e compare-os, mostrando com RETURN na tela uma das mensagens abaixo:
- O primeiro valor é o maior
- O segundo valor é o maior
- Não existe valor maior, os dois são iguais
 */
function comparar (x, y){

if (x > y) {
    return 'O primeiro valor é o maior'   
} else if (x < y) {
    return 'O segundo valor é o maior'
} else if (x == y){
    return 'Não existe valor maior, os dois são iguais'
}
}

const resu1 = comparar (10,9);
const resu2 = comparar (8,9);
const resu3 = comparar (7,7);

console.log(resu1);
console.log(resu2);
console.log(resu3);