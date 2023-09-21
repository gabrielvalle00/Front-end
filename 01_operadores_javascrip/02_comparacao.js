console.log('-----------01-------------');
//OPERADOR DE IGUALDADE (==)
// O operador de igualdade compara dois operadores e retorna verdadeiro, se eles forem iguais e falso se forem diferentes:
var x = 5;

console.log(x == 5); // retorna verdadeiro
console.log(x == '5'); // tambem retorna verdadeiro
console.log(x == 4); // retorna falso
console.log(x == 'c'); // tambem retorna falso 

console.log('-----------02-------------');
// IGUALDADE ESTRITA (===)
// A igualdade estrita, além de considerar os valores dos operandos, leva em conta tambémo seu tipo.
console.log(x === 5); // retorna verdadeiro
console.log(x === '5'); // tambem retorna verdadeiro

console.log('-----------03-------------');
//DIFERENTE (!=)
console.log('string1' != 'string2');


console.log('-----------04-------------');
// MAIOR (>)
console.log(5 > 4); //true

console.log('-----------05-------------');
// MAIOR (<)
console.log(5 < 4); //false

console.log('-----------06-------------');
// MAIOR IGUAL (>=)
// Funciona de forma semelhante a operador, mas retorna verdadeiro caso o operador da esquerda seja maior ou igual ao operador da direita:
var x = 6;
var y = 4;

console.log(x >= y); //true
console.log(x >= 6); //true
console.log(y >= x); //false

console.log('-----------07-------------');
// MANOR IGUAL (<=)
// Partindo das declarações das variavéis acima, vamos analisar o codigo:
console.log(x <= y);