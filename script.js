//  initialize choices array with the possible choices for the game
let choices = ['rock', 'paper', 'scissors']


// create a getComputerChoice fuction which will return any random choice from rock,paper,scissors
function getComputerChoice(choices) {
	let choice = Math.floor(Math.random()*choices.length)
	return choices[choice]
}

// handle error if player inputs any value other than the given choices
try{
	// take player choice input from prompt and assign it to playerChoice variable
	let playerChoice = prompt("Enter your choice").toLowerCase()
	let computerChoice = getComputerChoice(choices)
       		if(!choices.includes(playerChoice)){
       			throw new Error("Invalid Choice : Enter an valid choice") // throw customized error to handle logical error
		 }
console.log(playerChoice +" "+ computerChoice)
//create fuction playround to play single round between computer and player and return the string to declare winner and specify who beats who
function playRound(playerChoice,computerChoice){
	if(playerChoice === computerChoice){
		return `Draw : ${playerChoice} equals ${computerChoice}`
	}else if((playerChoice === 'rock') && (computerChoice === 'paper')){
		return `You Lose : ${computerChoice} beats ${playerChoice}`
	}else if((playerChoice === 'rock') && (computerChoie === 'scissors')){
		return `You Won : ${playerChoice} beats ${computerChoice}`
	}else if((playerChoice === 'paper') && (computerChoice === 'scissors')){
                return `You Lose : ${computerChoice} beats ${playerChoice}`
	}else if((playerChoice === 'paper') && (coputerChoice === 'rock')){
		return `You Won : ${playerChoice} beats ${computerChoice}`
	}else if ((playerChoice === 'scissors') && (computerChoice === 'paper')){
		return `You Won : ${playerChoice} beats ${computerChoice}`
	}else {
		return `You Lose : ${computerChoice} beats ${playerChoice}`
	}

}

function game(){
	console.log(playRound)
	console.log(playRound)
	console.log(playRound)
console.log(playRound)
console.log(playRound)


}

}catch(error){
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
}


