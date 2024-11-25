var player_score = 0;
var computer_score = 0;
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];



    document.getElementById('player-choice').innerHTML = `<i class="fa-solid fa-hand-${playerChoice}"></i>`
    document.getElementById('computer-choice').innerHTML = `<i class="fa-solid fa-hand-${computerChoice}" style="background-color: red;"></i>`;


    let result = '';

    if (playerChoice === computerChoice) {
        result = 'It\'s a draw!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!!!';
        player_score += 1;

    } else {
        result = 'You lose!!';
        computer_score += 1;
    }

    document.getElementById('result').textContent = `Result: ${result}`;
    document.getElementById('ply_score').textContent = `Your Score: ${player_score}`;
    document.getElementById('com_score').textContent = `Computer's Score: ${computer_score}`;
}
