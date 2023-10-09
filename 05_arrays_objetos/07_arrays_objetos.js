console.log('\n------------ Rest Operador/ Rest Parameters ----------------');

/**
 * Rest operador é caracterizado pelo simbolo (...)
 */

const somaInfinita = (...args) => {
    let total = 0
    for (let i = 0; i < args.length; i++ ) {
        total += args[i];
    }
    return total
};
 
console.log(somaInfinita(2, 6, 4, 5, 6, 8, 8,));