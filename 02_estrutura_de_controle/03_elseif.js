console.log('-----------01-------------');
// ELSE IF

if(1 > 2){
    console.log('teste');
} else if (2 > 3) {
    console.log('teste 2');
} else if (5 > 1) {
    console.log('Agora sim');
}


console.log('-----------02-------------');

var userName = 'Gabriel';
var userAge = 20;

if(userName == 'José') {
    console.log('Bem vindo José');
} else if(userName === 'Gabriel' && userAge === 20) {
    console.log('Bem vindo Gabriel, vc tem 20 anos!!');
} else {
    console.log('Nenhuma condição aceita');
}