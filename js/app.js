const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice   
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if(randomNumber === 1){
        computerChoice === ' rock'
    }
    if(randomNumber === 2){
        computerChoice === ' paper'
    }
    if(randomNumber === 3){
        computerChoice === ' scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
    
}
function getResult(){
    if(computerChoice === userChoice){
        resultDisplay= "it's a draw!"
    }
}

