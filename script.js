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

//reset all selected icon
function resetSelected(){
  allGameIcons.forEach((icon)=>{
  icon.classList.remove('selected');
  });
}

// passing player selection values
function select(playerchoice){
  resetSelected(); 
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
