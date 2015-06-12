////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move = getInput();
    return ("You chose " + move);
}

function getComputerMove(move) {
    var move = randomPlay();
    return ("Computer chose " + move);
}

function getWinner(playerMove,computerMove) {
      var winner = null;
    if (playerMove === computerMove){
        winner = tie;
    }else if (playerMove === "scissors"){
        if(computerMove ==="rock"){
            winner = "computer";
        }else{
            winner = "player";
        }
    }else if (playerMove ==="rock"){
        if (computerMove === "paper" ){
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    else if (playerMove === "paper"){
        if (computerMove === "scissors"){
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    return winner;
}
   

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
      while (playerWins < 5 && computerWins < 5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player"){
            playerWins += 1;
        }else if (winner === "computer"){
            computerWins += 1;
        }else if (winner === "tie"){
            console.log("Tie, try again.");
        }
   
        console.log("The score is " + [playerWins] +" for the player and "+[computerWins] +" for the computer" );
    }
        
    console.log("Final score"+ [playerWins]+ "for the player and "+[computerWins]+ " for the computer");
        
    return [playerWins, computerWins];
}
    
playToFive();
















