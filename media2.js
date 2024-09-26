prompt = require('prompt-sync')()

soma = 0
contador = 0
while (contador <= 3) {
    nota = parseFloat(prompt('Digite sua nota:'))
    soma = soma + nota
    contador = contador + 1
}

media = (soma / 4)
console.log('Sua média foi:', media);

if (media >= 7) {
    console.log('Você foi aprovado!');
} else {
    console.log('Você reprovado!');
}
