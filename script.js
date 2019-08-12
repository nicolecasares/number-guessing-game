let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// This function will generate a random secret number at the the start of a new game
const generateTarget = () => {
    return Math.floor(Math.random() * 9) + 1;
}

// This function will compare which player's guess was the closest
let compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    let humanDiffernce = Math.abs(humanGuess - targetGuess);
    let computerDifference = Math.abs(computerGuess - targetGuess);

    if (humanDiffernce < computerDifference || humanDiffernce == computerDifference){
        return true;
    }else{
        return false;
    }
    
}

// This function will update the score of the winner
// const updateScore = () =>{
    
// }

// This function will update the round 
let advanceRound = (currentRoundNumber) => {
    currentRoundNumber++;
}


