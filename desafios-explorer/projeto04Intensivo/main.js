/*1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.*/
alert('Hello World!')

/*2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.*/
let number1 = 15
let number2 = 27
console.log(Number(number1)+Number(number2))

/*3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".*/
let number = 'xablau'

if(typeof number === 'number'){
    console.log(`${number} é um número`)
} else {
    console.log(`${number} não é um número`)
}

/*4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string"*/
let word = 2
if(typeof word === 'string'){
    console.log(`${word} é uma string`)
} else {
    console.log(`${word} não é uma string`)
}

/*5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".*/
let boolean = 2
if(typeof boolean === 'boolean'){
    console.log(`${boolean} é um booleano`)
} else {
    console.log(`${boolean} não é um booleano`)
}

/*6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.*/
let n1 = 15
let n2 = 25
console.log(Number(n1)-Number(n2))

/*7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.*/
let n3 = 15
let n4 = 25
console.log(Number(n3)*Number(n4))

/*8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.*/
let n5 = 15
let n6 = 25
console.log(Number(n5)/Number(n6))

/*9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par*/
let even = 26
if(even % 2 == 0){
    console.log(`${even} é par`)
} else {
    console.log(`${even} não é par`)
}

/*10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar*/
let odd = -17
if(odd % 2 == 1){
    console.log(`${odd} é impar`)
} else {
    console.log(`${odd} não é impar`)
}