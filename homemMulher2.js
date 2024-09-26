prompt1 = require('prompt-sync')()

letra = prompt1('Digite um gênero: ')

while (true){
    if(letra.toLowerCase() === 'h') {
        console.log('Você é homem.')
        break
    } else if(letra.toLowerCase() === 'm') {
        console.log('Você é mulher.')
        break
    } else if(letra.toLowerCase() === 'n') {
        console.log('Você não deseja informar o valor.')
        break
    }
    console.log('Opção invalida!')
    letra = prompt1('Digite um gênero: ')
    
}