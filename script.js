import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById('playerscore');
const playerChoiceEl = document.getElementById('playerchoice');
const computerScoreEl = document.getElementById('computerscore');
const computerChoiceEl = document.getElementById('computerchoice');
const resultText = document.getElementById('resulttext')  

// player icons
const playerRock = document.getElementById('playerrock');
const playerPaper = document.getElementById('playerpaper');
const playerScissors = document.getElementById('playerscissors');
const playerLizard = document.getElementById('playerlizard');
const playerSpock = document.getElementById('playerspock');  
 
// computer icons
const computerRock = document.getElementById('computerrock');
const computerPaper = document.getElementById('computerpaper');
const computerScissors = document.getElementById('computerscissors');
const computerLizard = document.getElementById('computerlizard');
const computerSpock = document.getElementById('computerspock');    

// all icons
const allGameIcons = document.querySelectorAll('.far');




const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};
let playerScoreNumber = 0;  
let computerScoreNumber = 0;

let computerChoice = '';
//reset all selected icon
function resetSelected(){
  allGameIcons.forEach((icon)=>{
  icon.classList.remove('selected');  
  });
  stopConfetti();
  removeConfetti();    
}
// reset score, player choice, computer choice
function resetAll(){
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}
//random computer choice
function computerRandomChoice(){
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2){
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.4){
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 0.6){
    computerChoice = 'scissors';
  } else if (computerChoiceNumber <= 0.8){
    computerChoice = 'lizard';
  } else if (computerChoiceNumber <= 1.0){
    computerChoice = 'spock';  
  }
}
//computer choice
 function displayComputerChoice (){
switch (computerChoice) {   
  case 'rock':
    computerRock.classList.add('selected');
    computerChoiceEl.textContent = ' --- Rock';
    break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;  
      case 'scissors':
        computerScissors.classList.add('selected');
        computerChoiceEl.textContent = ' --- Scissors';
        break;  
        case 'lizard':
          computerLizard.classList.add('selected');
          computerChoiceEl.textContent = ' --- Lizard';
          break;   
          case 'spock':
            computerSpock.classList.add('selected');
            computerChoiceEl.textContent = ' --- Spock';  
            break;
            default:
              break;                    
}   
}   
  
function updateScore(playerchoice){
  if (playerchoice === computerChoice){
    resultText.textContent = "it's a tie";  
  } else {
    const choice = choices[playerchoice];
    console.log (choice.defeats.indexOf(computerChoice));  
    if (choice.defeats.indexOf(computerChoice) > -1){
      startConfetti();   
      resultText.textContent = "You Won";
      playerScoreNumber = playerScoreNumber + 1;    
      playerScoreEl.textContent = playerScoreNumber;        
    } else {
      resultText.textContent = "You Lose";  
      computerScoreNumber = computerScoreNumber + 1;
      computerScoreEl.textContent = computerScoreNumber;                
    }
  }

}

//call functions to process turn
function checkResult(playerchoice){
resetSelected();
computerRandomChoice();
displayComputerChoice();  
updateScore(playerchoice);
}

// passing player selection values
function select(playerchoice){
  checkResult(playerchoice);
// update player choice
switch (playerchoice) {
  case 'rock':
    playerRock.classList.add('selected');
    playerChoiceEl.textContent = ' --- Rock';
    break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;  
      case 'scissors':
        playerScissors.classList.add('selected');
        playerChoiceEl.textContent = ' --- Scissors';
        break;  
        case 'lizard':
          playerLizard.classList.add('selected');
          playerChoiceEl.textContent = ' --- Lizard';
          break;   
          case 'spock':
            playerSpock.classList.add('selected');
            playerChoiceEl.textContent = ' --- Spock';  
            break;
            default:
              break;                    
}   
}     

document.getElementById("playerrock").addEventListener("click", () => select('rock'));
document.getElementById("playerpaper").addEventListener("click", () => select('paper'));
document.getElementById("playerscissors").addEventListener("click", () => select('scissors'));
document.getElementById("playerlizard").addEventListener("click", () => select('lizard'));
document.getElementById("playerspock").addEventListener("click", () => select('spock'));   


// initial value
resetAll();     







