prompt1 = require('prompt-sync')()
numero1 = prompt1('Digite um número: ')
numero2 = prompt1('Digite um outro número: ')

if(numero1 === numero2) {
    console.log('Os números são iguais.')
} else if(numero1 % 2 === 0 && numero2 % 2 === 0) {
    console.log('Ambos os números são pares.')
} else if(numero1 % 2 !== 0 && numero2 % 2 !== 0) {
    console('Ambos os números são impares.')
} else(
    console.log('Os números são diferentes')
)