prompt = require('prompt-sync')()
numero = parseInt(prompt("Digite um numero: "))

console.log(`Digite 1 para adição,
       2 para subtração,
       3 para divisão,
       4 para multiplicação,`)

opcao = prompt("Digite a opção: ")

if (opcao==='1'){
    for (i = 1; i <= 10; i++){
        console.log(`${numero} + ${i} = ${numero+i}`)
    }
}else if (opcao==='2'){
    for (i = 1; i <= 10; i++){
        console.log(`${numero} - ${i} = ${numero-i}`)
    }
} else if (opcao==='3'){
    for (i = 1; i <= 10; i++){
        console.log(`${numero} / ${i} = ${numero/i}`)
    }
} else if (opcao==='4'){
    for (i = 1; i <= 10; i++){
        console.log(`${numero} * ${i} = ${numero*i}`)
    } 
} else {
    console.log(`Opcão invalida...`)
}