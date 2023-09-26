/*
Desenvolva um script que receba 4 notas (let/const) de um aluno. Em seguida ele deve calcular a média do aluno e exibir no console uma das mensagens de acordo com o o resultado:

"Aprovado", se a média alcançada for maior ou igual a sete;
"Reprovado", se a média for menor do que sete;
"Aprovado com Distinção", se a média for igual a dez.
*/
 const media = (7 + 8 + 9 + 10)/4;

 if (media >= 7 && media < 10) {
    console.log('Aprovado');
}else if (media < 7){
    console.log('Reprovado');
} else {
    console.log('Aprovado com Distinção');
}