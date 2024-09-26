prompt = require('prompt-sync')()
nome = prompt('Digite seu nome: ')
altura = parseFloat(prompt('Digite sua altura: '))
peso = parseFloat(prompt('digite seu peso: '))

imc = peso / (altura ** 2)

// console.log(`Olá, ${nome} seu imc é: ${imc.toFixed(2)}, cuidado você pode está gordo!`)

if(imc > 18.5 && imc <= 24.9) {
    console.log(`${nome} você está Saudavel`)
} else if(imc >= 25 && imc <= 29.9) {
    console.log(`${nome} você está com sobrepeso`)
} else if(imc >= 30 && imc <= 39.9) {
    console.log(`${nome} você está Obesidade grau 1`)
} else{
    console.log(`${nome} você está Obesidade severa grau 2`)
}