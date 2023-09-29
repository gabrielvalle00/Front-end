console.log('----------------função com retorno----------------');

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return (n1 + n2);
}
const resultado = soma(a, c);

console.log(resultado);



console.log('----------------escopo de função----------------');

let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`y dentro da função é ${y}`);
}
testandoEscopo();
console.log(`y fora da função é ${y}`);



console.log('----------------escopo de aninhado----------------');

let m = 10;

function escopoAninhado(){
    let m = 20;
    if (true){
        let m = 30;
        if(true){
            let m = 40;
            console.log(m);
        }
        console.log(m);
    }
    console.log(m);
}
escopoAninhado();
console.log(m);