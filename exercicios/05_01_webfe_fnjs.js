/*
Criar uma função com o nome superSomador(), que vai receber dois números como parâmetros e depois vai retornar a soma de todos os valores  no intervalo entre os valores recebidos, verificar também se o primeiro parâmetro é menor  que o segundo antes de realizar os cálculos.
*/

const num1 = 3;
const num2 = 7;

function superSomador(num1, num2) {
    num3 = num1

    if (num1 >= num2) {
        return 'Valor invalido'
    }

    let soma = 0;
  
    for (num3; num3<= num2; num3 ++) {
      soma += num3;
    }

    return soma;
  
  }

 
  const soma = superSomador(num1, num2);
 console.log(`A soma de todos os valores no intervalo entre ${num1} e ${num2} é ${soma}`);
  
   
  