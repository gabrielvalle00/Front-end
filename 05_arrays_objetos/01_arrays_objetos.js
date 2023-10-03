console.log('----------- Arrays -------------');

const lista = [1, 2, 3, 4];
console.log(lista);
console.log(typeof lista);

const diversos = ['Izaias', 1, 1, 2.1, 9.9, ['Casa', 1240], true];
console.log(diversos[5][1]);


console.log('----------- Propriedades -------------');

const numbers = [1, 2, 3, 4];
console.log(numbers.length);
console.log(numbers[`length`]);


console.log('----------- Metodos -------------');

const otherNumbers = [5, 6, 7];

const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);
