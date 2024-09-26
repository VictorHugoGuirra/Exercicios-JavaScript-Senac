prompt = require('prompt-sync')()

function imc(peso, altura){
    return peso / (altura ** 2)
}

function gasAlc(alc, gas){
    return alc / gas
}

while(true){
    console.log(`Digite 
       1 para IMC,
       2 para Combustivel`)

    menu = parseInt(prompt('Digite uma opçao: '))

    if (menu === 1){
        peso = parseFloat(prompt('Digite o peso: '))
        altura = parseFloat(prompt('Digite o altura: '))
        console.log(imc(peso, altura))
        
    } else if (menu === 2){
        alc = parseFloat(prompt('Digite o alcool: '))
        gas = parseFloat(prompt('Digite a gasolina: '))
        resultado = gasAlc(alc, gas)
        if(resultado >= 0.70){
            console.log(`O resultado do calculo deu: `, resultado)
            console.log(`Mas vantajoso abastecer com gasolina!`)
        } else{
            console.log(`O resultado do calculo deu: `, resultado)
            console.log(`Mas vantajoso abastecer com alcool!`)
        }
    } else{
        console.log('Valor inválido')
        break
    }
}