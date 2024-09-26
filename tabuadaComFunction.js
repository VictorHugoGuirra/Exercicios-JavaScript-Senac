prompt = require('prompt-sync')()

function soma(n1, n2) {
    return n1 + n2
}

function sub(n1, n2) {
    return n1 - n2
}

function div(n1, n2) {
    return n1 / n2
}

function mult(n1, n2) {
    return n1 * n2
}

while(true){
    console.log(`Digite 
       1 para adição,
       2 para subtração,
       3 para divisão,
       4 para multiplicação,`)
       
    menu = parseInt(prompt('Digite uma opçao: '))


    if (menu === 1){
        n1 = parseInt(prompt('Digite o primeiro número: '))
        n2 = parseInt(prompt('Digite o segundo número: '))
        console.log(soma(n1, n2))
    } else if (menu === 2){
        n1 = parseInt(prompt('Digite o primeiro número: '))
        n2 = parseInt(prompt('Digite o segundo número: '))
        console.log(sub(n1, n2))
    } else if (menu === 3){
        n1 = parseInt(prompt('Digite o primeiro número: '))
        n2 = parseInt(prompt('Digite o segundo número: '))
        console.log(div(n1, n2))
    } else if (menu === 4){
        n1 = parseInt(prompt('Digite o primeiro número: '))
        n2 = parseInt(prompt('Digite o segundo número: '))
        console.log(mult(n1, n2))
    } else{
        console.log('Valor inválido')
        break
    }
}
