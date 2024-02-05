alert('Calculadora Simples')

let numberOne = prompt('Digite o primeiro número:')
let numberTwo = prompt('Digite o segundo número:')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let subtraction = numberOne - numberTwo
let multiplication = numberOne * numberTwo
let division = numberOne / numberTwo
let restOfDivision = numberOne % numberTwo

alert(`Soma: ${numberOne} + ${numberTwo} = ${sum}`)
alert(`Subtração: ${numberOne} - ${numberTwo} = ${subtraction}`)
alert(`Multiplicação: ${numberOne} x ${numberTwo} = ${multiplication}`)
alert(`Divisão: ${numberOne} / ${numberTwo} = ${division}`)
alert(`Resto da divisão: ${numberOne} % ${numberTwo} = ${restOfDivision}`)

if (sum % 2 == 0){
    alert(`A soma dos dois números é par`)
} else {
    alert('A soma dos dois números é impar')
}

if (numberOne === numberTwo){
    alert('Os números inseridos são iguais')
} else {
    alert('Os números inseridos são diferentes')
}