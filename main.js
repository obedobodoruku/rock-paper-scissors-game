const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const paragraph  = document.getElementById("myParagraph");
const pScore = document.getElementById("player-score");
const cScore = document.getElementById("computer-score");
const gameWinner = document.getElementById("game-winner");
const resetBtn = document.getElementById("reset-btn");

const options = ["Rock", "Paper", "Scissors"];

const getComputerOption = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};

const hasPlayerWonRound = (player, computer) => {
  if(player === "Scissors" && computer === "Paper") {
    return true;
  } else if(player === "Rock" && computer === "Scissors") {
    return true;
  } else if (player === "Paper" && computer === "Rock") {
    return true;
  } else {
    return false;
  }
};

let playerScore = 0;
let computerScore = 0;

const roundWinner = (userOption) => {
    const computerResult = getComputerOption();
  if(hasPlayerWonRound(userOption, computerResult)) {
    playerScore++;
    pScore.innerText = `Player score = ${playerScore}`;
    paragraph.innerText = `${userOption} beats ${computerResult}. Player Wins!`;
    matchWinner();
  } else if(userOption === computerResult) {
    paragraph.innerText = "Its a Tie!";
  }  else {
     computerScore++;
     cScore.innerText = `Computer score = ${computerScore}`;
    paragraph.innerText = `${computerResult} beats ${userOption}. Computer Wins!`;
    matchWinner();
  }
};

const matchWinner = () => {
    if(playerScore >= 3) {
        gameWinner.innerText = "Player Wins the Game!";
        pScore.innerText = "";
       cScore.innerText = "";
         paragraph.innerText = "";
        
    } else if (computerScore >= 3) {
        gameWinner.innerText = "Computer Wins the Game!";
        cScore.innerText = "";
        pScore.innerText = "";
         paragraph.innerText = "";
    };
};

rockBtn.addEventListener("click", () => {
    return roundWinner("Rock");
    
});

paperBtn.addEventListener("click", () => {
    return roundWinner("Paper");
});

scissorsBtn.addEventListener("click", () => {
    return roundWinner("Scissors");
});

resetBtn.addEventListener("click", () => {
     playerScore = 0;
     computerScore = 0;

      pScore.innerText = `Player score = ${playerScore}`;
      cScore.innerText = `Computer score = ${computerScore}`;
      gameWinner.innerText = "";
    paragraph.innerText = "";
});

