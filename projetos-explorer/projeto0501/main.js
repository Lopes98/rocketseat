let randomNumber = Math.round(Math.random() * 10)

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector('.screen2')

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let attempts = 1

function handleTryClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    const inputValue = Number(inputNumber.value)

    validateNumber(inputValue)
    if(inputValue === randomNumber){
        toggleScreen()

        document.querySelector('.screen2 h2').innerText = `Acertou em ${attempts} tentativa${attempts > 1 ? 's' : ''}`
        return
    }
    inputNumber.value = ''
    attempts++
}

function handleResetClick(){
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
    attempts = 0
}

function toggleScreen(){
    screen1.classList.toggle("hidden")
    screen2.classList.toggle('hidden')
}

function pressEnter(e){
    if(e.key == 'Enter' && screen1.classList.contains('hidden')){
        handleResetClick()
    }
}

function validateNumber(inputValue){
    if(inputValue < 0 || inputValue > 10 || inputValue == ''){
        toggleScreen()
        document.querySelector('.screen2 h2').innerText = `Digite um número válido entre 0 e 10!`
        inputValue = ''
        return
    }
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)