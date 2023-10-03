console.log('----------- Arrays : indexO  e lastIndexOf -------------');

const frutas = ['Morango', 'Maçã', 'Abacate', 'Uva', 'Abacate'];

console.log(frutas.indexOf('Maçã'));
console.log(frutas.indexOf('Abacate'));
console.log(frutas.lastIndexOf('Abacate'));


console.log('----------- Arrays : forEach -------------');

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(num => console.log(num));


console.log('----------- Objeto : forEach -------------');

const posts = [
 {title:'Post#1', categoria:'C#'},
 {title:'Post#2', categoria:'JavaScript'},
 {title:'Post#3', categoria:'HTML'},
];

posts.forEach((post) => {
   console.log(`Exibindo post: ${post.title} da categoria: ${post.categoria}`);
});


console.log('----------- Objeto : includes -------------');

const vogais = ['a', 'e', 'i', 'o', 'u'];

if (vogais.includes('a')) {
    console.log('Vogal');
} else {
    console.log('Consoante');
}


console.log('----------- Objeto : map -------------');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 1;

while (i <= 10) {
    const arrayN = array.map((x) => x * i);
    console.log(arrayN);
    i++
    
}



console.log('----------- Objeto : reverse -------------');

const arrayX = [10, 20, 30, 40];
const arrayY = arrayX.map((x) => x)

arrayY.reverse();

console.log(arrayX);
console.log(arrayY);