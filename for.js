// for (let i = num1; i <= num2; i++) {
//     console.log(i);
// }

prompt = require('prompt-sync')()
num1 = parseInt(prompt('Digite um número para o inicio do contador: '))
num2 = parseInt(prompt('Digite um número para o fim do contador: '))

if (num1 < num2){
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
} else if (num1 > num2){
    for (let i = num1; i >= num2; i--) {
        console.log(i);
    } 
} else{
    console.log('Os números são iguais!')
}




