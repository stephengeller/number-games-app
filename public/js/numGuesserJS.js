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

function loseGame() {
	score--;
	gameScore.innerHTML = score;
}

function winGame() {
	score++;
	gameScore.innerHTML = score;
}

function checkIfWinner() {
	if (game.guessesLeft < 0) {
		result.innerHTML = "<h1>YOU WIN!</h1>";
		hideGame();
		winGame();
	}
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
	gameScore.innerHTML = score;
}

newGame();
hideEndGame();
setDefaults();
