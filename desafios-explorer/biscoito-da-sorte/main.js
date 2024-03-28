const btnClosedCookie = document.querySelector('#btnClosedCookie')
const btnOpenNewCookie = document.querySelector('#btnOpenNewCookie')

const closedCookie = document.querySelector('.closedCookie')
const openedCookie = document.querySelector('.openedCookie')

const luckyMessage = document.querySelector('#luckyMessage')
let randomNumber = Math.round(Math.random() * 10)

const messages = [
    "A sorte favorece os audazes.",
    "Grandes coisas estão por vir para aqueles que estão prontos para recebê-las.",
    "Seu futuro é tão brilhante quanto sua determinação.",
    "Acredite em si mesmo e os outros seguirão o exemplo.",
    "Uma jornada de mil milhas começa com um único passo.",
    "O sucesso está nas pequenas ações diárias.",
    "Uma mente positiva abrirá portas para oportunidades ilimitadas.",
    "O caminho para o sucesso está em aprender com os erros do passado.",
    "O otimismo é a chave para desbloquear o potencial ilimitado.",
    "Seja corajoso o suficiente para seguir o seu coração e sua intuição."
]

btnClosedCookie.addEventListener('click', getNewLuckyMessage)
btnOpenNewCookie.addEventListener('click', generateNewCookie)

function getNewLuckyMessage(){
    randomNumber = Math.round(Math.random() * 10)
    toggleScreen()
    document.querySelector('.openedCookie p').innerText = messages[randomNumber]
}

function generateNewCookie(){
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
    closedCookie.classList.toggle('hidden')
    openedCookie.classList.toggle('hidden')
}