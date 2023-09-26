/*
Desenvolva um script que armazene em uma variável (let/const) o turno que você estuda (M) Matutino, (V) Vespertino ou (N) Noturno. Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/
const M = 'Matutino';
const V = 'Vespertino';
const N = 'Noturno';

const turno = 'Noturno';

if ( turno == M){
    console.log('Bom Dia!');
} else if (turno == V) {
    console.log('Boa Tarde!');
} else if ( turno == N){
    console.log('Boa Noite!');
} else {
    console.log('Valor invalido');
}
