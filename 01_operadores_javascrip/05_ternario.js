/*
Operador condicional ternáro
*/

var precoCompra = 200;
var desconto = 10;
var precoFinal = 0;
var precoFinal2 = 0;

if(precoCompra>100){
    precoFinal = precoCompra - desconto;

}else{
    precoFinal = precoCompra;

}

console.log(precoFinal);

// Podemos simplificar com o operador ternário

precoFinal2 = precoCompra > 100 ? precoCompra - desconto : precoCompra;

console.log(precoFinal2);