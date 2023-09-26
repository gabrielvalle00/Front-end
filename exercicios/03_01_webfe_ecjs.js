/*
Desenvolva um script que verifique se uma letra informada em uma variável (let/const) é vogal ou consoante. Exibir o resultado no console.log 
*/

 let vogais = ['a', 'e', 'i', 'o', 'u', 'A','E', 'I', 'O','U'];
 
 const letra = 'v'

 if (vogais.includes(letra)) {
        console.log('Sua letra é uma vogal');
} else {
        console.log('Sua letra é uma consoante');
}

