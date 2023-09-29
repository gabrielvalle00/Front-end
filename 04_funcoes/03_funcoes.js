console.log('----------- Arrow Function -------------');

const testArrow = () => {
    console.log('Essa é uma Arrow function');
}

testArrow();

console.log('----------- Desafio -------------');
/* Crie uma função Arrow para valiadar se um numero é par ou impar, ultilze um numero como parametro. */

const numero1 = 8;

const validarParOuImpar = (numero) => {
    if (numero % 2 === 0) 
      return `${numero} é um número par.`;
     else 
      return `${numero} é um número ímpar.`;
    
  };
  
const resultado = validarParOuImpar(numero1);
console.log(resultado);
  

console.log('----------- Mais sobre as Arrow Function -------------');

const raizQuadrada = (x) => {
    return x * x;
}

const resRaiz = raizQuadrada (4);
console.log(resRaiz);


const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(8));