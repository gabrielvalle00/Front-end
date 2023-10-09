console.log('\n------------ Métodos de strings - trim ----------------');

// O trim remove tudo que não é texto em uma string

const texto = '   \ttestando \n';
console.log(texto);

console.log(texto.trim());

console.log('\n------------ Métodos de strings - substring ----------------');
//substring é utilizado para retornar parte da string

const palavra = 'javascript';

const resSubstring1 = palavra.substring(0 ,1);
console.log(resSubstring1);

const resSubstring2 = palavra.substring(0, 4);
console.log(resSubstring2);


console.log('\n------------ Métodos de strings - padstart ----------------');

numero1 = '1';
const testPadStart = numero1.padStart(4, '0');
console.log(testPadStart);


numero2 = '2'
const testPadStart2 = numero2.padEnd(6, '0');
console.log(testPadStart2);


console.log('\n------------ Métodos de strings - split ----------------');

const frase = 'O rato roeu a roupa do rei de Roma';
const array = frase.split(' ');
console.log(array);


console.log('\n------------ Métodos de strings - join ----------------');

const listasCompras = ['Mouse', 'Teclado', 'Monitor'];

const listasComprasString = `Precisamos comprar ${listasCompras.join(', ')}.`
console.log(listasComprasString);


console.log('\n------------ Métodos de strings - padstart ----------------');