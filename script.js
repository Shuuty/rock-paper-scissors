let playerScore = 0;
let computerScore = 0;
const showPlayerScore = document.querySelector(`#pScore`)
const showComputerScore = document.querySelector(`#cScore`)
const btnRock = document.querySelector(`#rock`);
const btnPaper = document.querySelector(`#paper`);
const btnScissor = document.querySelector(`#scissor`);
const showRoundResult = document.querySelector(`.roundResult`);


function ComputerSelection() {
     botChoice = Math.round(Math.random() * 2);
    switch (botChoice) {
        case 0: return `rock`
        break;
        case 1: return `paper`
        break;
        case 2: return `scissors`
        break;
    }   
}


function playRound(playerChoice) {
    computerChoice = ComputerSelection();
     

    if (computerChoice === playerChoice) {
        showRoundResult.roundResult = `Its a tie!`;
    }

    // Player Wins!
    else if(playerChoice === `rock` && computerChoice === `scissors` || playerChoice === `paper` && computerChoice === `rock` || playerChoice === `scissors` && computerChoice === `paper`) {
        playerScore++;
        showPlayerScore.textContent = `Player score = ${playerScore}`;
        showRoundResult.textContent = `The player win! The ${playerChoice} beats ${computerChoice}!`;
         

    }

    // Bot Wins!
    else if (playerChoice === `scissors` && computerChoice === `rock` || playerChoice=== `rock` && computerChoice === `paper` || playerChoice === `paper` && computerChoice === `scissors`) {
        computerScore++;
        showComputerScore.textContent = `Computer score = ${computerScore}`;
        showRoundResult.textContent = `The computer win! The ${computerChoice} beats ${playerChoice}!`;

    }
    return
}

function end() {
    if (playerScore === 5) {
       location.reload()
    }
    else if (computerScore === 5) {
        location.reload()
    }
}


btnRock.addEventListener(`click`, () => {
playRound(btnRock.value, ComputerSelection());
setTimeout(end, 5000)
})
btnPaper.addEventListener(`click`, () => {
playRound(btnPaper.value, ComputerSelection());
setTimeout(end, 5000)
})
btnScissor.addEventListener(`click`, () => {
playRound(btnScissor.value, ComputerSelection());
setTimeout(end, 5000)
})
























