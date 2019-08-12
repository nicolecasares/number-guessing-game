let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 9) + 1;
}

const compareGuesses = (hGuess, cGuess, sgTarget) => {
    let humanDiffernce = Math.abs(hGuess - sgTarget);
    let computerDifference = Math.abs(cGuess - sgTarget);

    if (humanDiffernce < computerDifference || humanDiffernce == computerDifference){
        return true;
    }else{
        return false;
    }
    
}

const updateScore = () =>{
    
}


