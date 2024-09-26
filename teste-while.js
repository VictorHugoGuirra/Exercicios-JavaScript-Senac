// let i = 1;

// while (i <= 5){
//     console.log(i);
//     i++;
// }

prompt = require('prompt-sync')()
nome = prompt('Digite seu nome: ')
while (true){
    if (nome === 'ana'){
        break
    }
    nome = prompt('Digite seu nome: ')
}