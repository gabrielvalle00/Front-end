console.log('-----------01-------------');
/*
A estrutura switch permite executar um bloco de codigo diferente de acordo com cada opção (cada case) especificada. Seu uso é indicado quando os valores a serem analisados nessas condições são pré-definidos. Declaramos uma variavel e utilizamos como paramentro do switch para avaliarmos as condições:
*/

const sexo = 'feminino';

switch (sexo) {
    case "feminino":
        console.log('Bem-vinda!');
        break;
    default:
        console.log('Bem-vindo!');    
}


console.log('-----------02-------------');

const autenticado = true;

switch (autenticado) {
    case true:
        console.log('Usuario autenticado com sucesso!');
        break;
    default:
        console.log('Usuario não autenticado');    
}