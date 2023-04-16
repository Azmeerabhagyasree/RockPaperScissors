const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const ResultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let result
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e) =>{
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
     generateComputerChoice()
     getResult()
}))
function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3)+1;
    if(randomNumber===1){
        computerChoice='Rock'
    }
    if(randomNumber===2){
        computerChoice='Paper'
    }
    if(randomNumber===3){
        computerChoice='Scissors' 
    }
    computerChoiceDisplay.innerHTML=computerChoice
}
function getResult(){
    if(computerChoice===userChoice){
        result = 'Draw'
    }
    if(computerChoice=== 'Rock' && userChoice==='Paper'){
        result = 'User Win'
    }
    if(computerChoice=== 'Rock' &&  userChoice==='Scissors'){
        result = 'User Lost'
    }
    if(computerChoice=== 'Paper' &&  userChoice==='Scissors'){
        result = 'User Win'
    }
    if(computerChoice=== 'Paper' &&  userChoice==='Rock'){
        result = 'User Lost'
    }
    if(computerChoice=== 'Scissors' &&  userChoice==='Rock'){
        result = 'User Win'
    }
    if(computerChoice=== 'Scissors' &&  userChoice==='Paper'){
        result = 'User Lost'
    }
    ResultDisplay.innerHTML=result

}
