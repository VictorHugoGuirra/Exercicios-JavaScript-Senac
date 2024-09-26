prompt = require('prompt-sync')()
num = parseInt(prompt('Digite um número: '))

for (let i = 0; i <= 10; i++) {
    console.log(num * i);
}