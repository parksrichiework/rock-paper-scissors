const computerChoiceDisplay = document.querySelector('#computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.querySelector('#result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerhtml = userChoice
    generateComputerChoice()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    if( randomNumber === 1){
        computerChoice = 'rock'
    }
    if( randomNumber === 1){

    }
}

