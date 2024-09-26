prompt1 = require('prompt-sync')()

letra = prompt1('Digite um gênero: ')

if(letra.toLowerCase() === 'h') {
    console.log('Você é homem.')
} else if(letra.toLowerCase() === 'm') {
    console.log('Você é mulher.')
} else if(letra.toLowerCase() === 'n') {
    console.log('Você não deseja informar o valor.')
} else{
    console.log('valor invalido.')
}


