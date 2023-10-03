console.log('----------- Arrays -------------');

const person = {
    nome:'Gabriel',
    idade: 20,
    profissao: 'Aprendiz'
}

console.log(person);
console.log(person.nome.length);
console.log(typeof person);

console.log('----------- Objetos - Adicionado e removendo propriedades -------------');

const car = {
    engine: 1500,
    brand: 'VW',
    model: 'Fusca',
    km: 700000
}
console.log(car);

car.ano = 1954;

console.log(car);

delete car.km;

console.log(car);