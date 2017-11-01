var score = 0;

function newGame() {
	game = new NumberGuesser();
}

function setDefaults() {
	updateHTML();
}

guessHigher.addEventListener("click", function() {
	game.guessHigher();
	updateHTML();
	checkIfWinner();
});

guessLower.addEventListener("click", function() {
	game.guessLower();
	updateHTML();
	checkIfWinner();
});

correctGuess.addEventListener("click", function() {
	result.innerHTML = "<h1> I win! </h1>";
	hideGame();
	loseGame();
});

playAgain.addEventListener("click", function() {
	hideEndGame();
	newGame();
	setDefaults();
});

startGame.addEventListener('click', function() {
	hideIntro()
	hideEndGame()
});

function hideIntro() {
	intro.style.display = "none";
	playAgain.style.display = "inline-block"
}

function loseGame() {
	score--;
	updateScore(-1)
}

function winGame() {
	score++;
	updateScore(1)
}

function updateScore(point) {
    gameScore.innerHTML = score;
    currentScore = parseInt(playerScore.innerHTML);
    playerScore.innerHTML = currentScore + point;
    playerScoreHidden.value = playerScore.innerHTML
}

function checkIfWinner() {
	if (game.guessesLeft < 0) {
		result.innerHTML = "<h1>YOU WIN!</h1>";
		hideGame();
		winGame();
	}
}

function showIntro() {
	intro.style.display = "block";
    gameContainer.style.display = "none";
    endGame.style.display = "none";
    playAgain.style.display = "none";
    console.log('hello!')
}

function hideGame() {
	endGame.style.display = "block";
	gameContainer.style.display = "none";
}

function hideEndGame() {
	gameContainer.style.display = "block";
	endGame.style.display = "none";
}

function updateHTML() {
	currentGuess.innerHTML = game.currentGuess;
	guessesLeft.innerHTML = game.guessesLeft;
    // if (gameScore !== undefined) {
    //     gameScore.innerHTML = score;
    // }
}

function setup() {
    newGame();
    hideEndGame();
    setDefaults();
    showIntro();
}

setup()

