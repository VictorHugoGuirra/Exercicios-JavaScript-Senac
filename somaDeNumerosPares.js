prompt = require('prompt-sync')()

soma = 0
while(true){
    numero = parseFloat(prompt('Digite um número: '))

    if (numero % 2 === 0){
        soma = soma + numero
    } else{
        break
    }
}

console.log('O somatório dos números pares é: ', soma)