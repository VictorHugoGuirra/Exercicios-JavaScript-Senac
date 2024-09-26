let input = require("prompt-sync")()
// let n1 = parseInt(input("Insira de onde começa a contagem: "))
// let n2 = parseInt(input("Agora me diga até onde ela vai: "))

function soma(n1, n2) {
    return n1 + n2
}

function sub(n1, n2) {
    return n1 - n2
}

function dividir(n1, n2) {
    return n1 / n2
}

function multiplicar(n1, n2) {
    return n1 * n2
}

let batata = true

while (batata) {
    console.log(`MENU:
        1. Soma
        2. Subtração
        3. Divisão
        4. Multiplicacao`)
    escolha = parseInt(input(`Escolha uma opção: `))


    switch (escolha) {
        case 1:
            n1 = parseInt(input("Qual o primeiro valor? "))
            n2 = parseInt(input("Qual o segundo valor? "))
            console.log(soma(n1, n2))
            batata = false
            break
        case 2:
            n1 = parseInt(input("Qual o primeiro valor? "))
            n2 = parseInt(input("Qual o segundo valor? "))
            console.log(sub(n1, n2))
            break
        case 3:
            n1 = parseInt(input("Qual o primeiro valor? "))
            n2 = parseInt(input("Qual o segundo valor? "))
            console.log(dividir(n1, n2))
            break
        case 4:
            n1 = parseInt(input("Qual o primeiro valor? "))
            n2 = parseInt(input("Qual o segundo valor? "))
            console.log(multiplicar(n1, n2))
            break
        default:
            console.log("Coloque um valor válido")

    }
    break
}