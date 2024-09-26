prompt = require('prompt-sync')()
nome = prompt('Digite seu nome: ')
altura = parseFloat(prompt('Digite sua altura: '))
peso = parseFloat(prompt('digite seu peso: '))

imc = peso / (altura ** 2)

let faixa;

switch(true) {
    case (imc < 18.5):
        faixa = 'Você está desnutrido';
        break

    case (imc > 18.5 && imc <= 24.9):
        faixa = 'você está Saudavel';
        break

    case (imc >= 25 && imc <= 29.9):
        faixa = 'você está com sobrepeso';
        break
    
    case (imc >= 30 && imc <= 39.9):
        faixa = 'você está Obesidade grau 1';
        break
    
    default:
        faixa = 'você está Obesidade severa grau 2';
}

console.log(faixa)