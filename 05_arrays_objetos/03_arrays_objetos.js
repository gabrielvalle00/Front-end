console.log('----------- Loop em arrays -------------');

const alunos = ['Murilo', 'Thais', 'Camilly', 'Kelly', 'Pantalhão', 'Valle'];

for (let i = 0; i < alunos.length; i++) {
    console.log(`Listando o aluno ${alunos[i]}`);
}


console.log('----------- Metodos de arrays: push e pop -------------');

const array = ['a', 'b', 'c'];
console.log(array);
array.push('d');
console.log(array);
//array.pop();
//console.log(array);

let letraRemovida = array.pop();
console.log(array);
console.log(`A letra removida foi ${letraRemovida}`);

array.push('e', 'f', 'g');
console.log(array);


console.log('----------- Metodos de arrays: shift e unshift -------------');

const numeros = [1, 2, 3, 4];
console.log(numeros);

let numRem = numeros.shift();
console.log(numRem);
console.log(numeros);

numeros.unshift(0);
numeros.unshift(-2, -1);
console.log(numeros);