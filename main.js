prompt1 = require('prompt-sync')()
numero = parseInt(prompt1('Digite um número: '))
if (numero % 2 === 0){
    console.log('O número é par.')
} else {
    console.log('O número é impar!')
}