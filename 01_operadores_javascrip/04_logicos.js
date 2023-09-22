// Utilizados para realizar operações logicas, podem ser dois tipos : AND, OR e NOT.
console.log('-----------01-------------');
// AND
console.log(true && true); //retorna true

console.log(true && false); //retorna false

console.log('-----------02-------------');
// OR
//Para o operador OR (||) retorna verdadeiro,  basta que um dos operandos seja verdadeiro.
//Ele também retorna verdadeiro caso os dois operandos sejam verdadeiros, retorna false se os dois forem falsos

console.log(true || true); //true
console.log(true || false); //true
console.log(false ||false); //false


console.log('-----------03-------------');
/* NOT
 O operador de negação (!) é um operador unario, isto é, opera sobre apenas um operando.
 Ele nega, inverte o valor logico do operando
 */

 var x = 2>1;

 console.log(x); //true
 console.log(!x); //false
