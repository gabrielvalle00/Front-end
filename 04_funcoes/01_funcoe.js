console.log('-----------01-------------');

function exibeNome() {
    console.log(`Hello World!!!`);
};
exibeNome();

console.log('-----------02-------------');

var x = 10;
var y = 5;
var resultado = 0;

function exibeSoma1() {
    resultado = x + y;
    console.log(resultado);
};
exibeSoma1();


console.log('-----------03-------------');

function funcaoComParametro(texto){
     console.log(`imprimindo ${texto}`);
 }
 funcaoComParametro('Alguma coisa');

    
console.log('-----------04--------------');

const w = 10;
const q = 5;
let resultado;
    
function exibeSoma(valor1, valor2){ 
    resultado = valor1 + valor2;
    console.log(resultado);
}

exibeSoma(w , q);
exibeSoma(4,7);
