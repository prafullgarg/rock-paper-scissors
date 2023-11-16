//  initialize choices array with the possible choices for the game
let choices = ['rock', 'paper', 'scissors']


// create a getComputerChoice function which will return any random choice from rock,paper,scissors
function getComputerChoice(choices) {
	let choice = Math.floor(Math.random()*choices.length)
	return choices[choice]
}
const display = document.createElement('div')
const displayChoices =document.createElement('div')
const scores = document.createElement('div')
const displayText =document.createElement('div')

scores.textContent= 'Player : 0  | Computer : 0';
displayChoices.textContent = 'Player Choice : Please select from below | Computer Choice : Computer will select ';

display.appendChild(scores)
display.appendChild(displayChoices)
display.appendChild(displayText)

const rock = document.createElement('button')
const paper= document.createElement('button')
const scissors = document.createElement('button')

rock.innerHTML='';
paper.innerHTML='';
scissors.innerHTML='';

rock.textContent ='ROCK';
paper.textContent ='PAPER';
scissors.textContent ='SCISSORS';


const body = document.querySelector('body')

rock.value = 'rock';
paper.value ='paper'
scissors.value ='scissors'

body.appendChild(display)
body.appendChild(rock)
body.appendChild(paper)
body.appendChild(scissors)

// handle error if player inputs any value other than the given choices

let playerScore=0;
let computerScore=0;

try{
	//create function playround to play single round between computer and player and return the string to declare winner and specify who beats who
	function playRound(){
		// take player choice input from prompt and assign it to playerChoice variable
		let playerChoice = this.value;
		let computerChoice = getComputerChoice(choices)
       		if(!choices.includes(playerChoice)){
       			throw new Error("Invalid Choice : Enter an valid choice") // throw customized error to handle logical error
		 }
	displayChoices.textContent =`Player Choice ${playerChoice} | Computer Choice ${computerChoice}`		 

	if(playerChoice === computerChoice){
		displayText.textContent=`Round Draw : ${playerChoice} equals ${computerChoice}`
		computerScore+=1
		playerScore+=1
	}else if((playerChoice === 'rock') && (computerChoice === 'paper')){
		computerScore+=1
		displayText.textContent=`You Lose Round : ${computerChoice} beats ${playerChoice}`
	}else if((playerChoice === 'rock') && (computerChoice === 'scissors')){
		playerScore+=1
		displayText.textContent=`You Won Round : ${playerChoice} beats ${computerChoice}`
	}else if((playerChoice === 'paper') && (computerChoice === 'scissors')){
	    computerScore+=1
		displayText.textContent= `You Lose Round: ${computerChoice} beats ${playerChoice}`
	}else if((playerChoice === 'paper') && (computerChoice === 'rock')){
		playerScore+=1
		displayText.textContent=`You Won Round : ${playerChoice} beats ${computerChoice}`
	}else if ((playerChoice === 'scissors') && (computerChoice === 'paper')){
		playerScore+=1
		displayText.textContent=`You Won Round : ${playerChoice} beats ${computerChoice}`
	}else {
		computerScore+=1
		displayText.textContent=`You Lose Round : ${computerChoice} beats ${playerChoice}`
	}

	scores.textContent= ` Player : ${playerScore} | Computer : ${computerScore} `
	if((playerScore === 5) || (computerScore === 5)){
		if(playerScore === computerScore){
			displayText.textContent= 'Game Draw'
		}else if(playerScore === 5){
			displayText.textContent= 'You Won The Game'
		}else {
			displayText.textContent= 'You Lost The Game'
		}
		playerScore=0
		computerScore=0
	}

}

rock.addEventListener('click', playRound)
paper.addEventListener('click', playRound)
scissors.addEventListener('click', playRound)


}catch(error){
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
}

