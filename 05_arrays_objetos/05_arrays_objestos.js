console.log('----------- Converte array para objeto -------------');

const pessoa = ['Izaias', 40, 'Sumaré'];

const objPessoa = Object.assign({
    nome: pessoa [0],
    idade: pessoa [1],
    cidade: pessoa [2],
});

console.log(pessoa);
console.log(objPessoa);


console.log('----------- Converte objeto para array -------------');

const obj = {
    livro: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    ano: 1937,
}

const array = Object.keys(obj).map(chave => obj[chave]);

console.log(obj);
console.log(array);