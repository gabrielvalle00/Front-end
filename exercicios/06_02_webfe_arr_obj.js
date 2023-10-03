/*
Criar uma função utilizando for ou while que RETORNE um array com a seguinte contagem: 0 3 6 9 12 15 18.
 */

function contagemWhile() {
    const result = [];
    let i = 0;

    while( i <= 18){
        result.push(i);

        i += 3;
    }
    return result

}

const contagem = contagemWhile();
console.log(contagem);


