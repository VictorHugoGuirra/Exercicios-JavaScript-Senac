// uni1 = 10
// uni2 = 8
// uni3 = 7
// uni4 = 6
// nome = 'Victor'

// media = (uni1 + uni2 + uni3 + uni4) / 4

// console.log(`A média do aluno ${nome}, foi ${media}. Se foi acima de 6 o aluno está aprovado!`)

var prompt = require('prompt-sync')()
nome = prompt('Digite seu nome: ')
var nota1 = parseInt(prompt('Digite sua nota1: '))
var nota2 = parseInt(prompt('Digite sua nota2: '))
var nota3 = parseInt(prompt('Digite sua nota3: '))
var nota4 = parseInt(prompt('Digite sua nota4: '))
media = (nota1 + nota2 + nota3 + nota4)/4

console.log(`Olá, ${nome}, sua média é: ${media}`) 