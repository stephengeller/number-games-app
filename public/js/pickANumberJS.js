var score = 0;

function newGame() {
	game = new NumberPicker();
	game.randomise();
}

function setDefaults() {
	restoreButtons();
	updateHTML();
}

function restoreButtons() {
	for (i = 1; i < 11; i++) {
		i = i.toString();
		console.log(i.toString());
		console.log(document.getElementById(i));
		document.getElementById(i).style.display = "inline-block";
	}
}

guessOptions.addEventListener("click", function(e) {
	if (e.target.id != "guessOptions") {
		checkIfWinner(e.target.id);
	}
});

playAgain.addEventListener("click", function() {
	hideEndGame();
	newGame();
	setDefaults();
});

function loseGame() {
	score--;
	result.innerHTML = "<h1>YOU LOSE!</h1>";
	hideGame();
	updateScore(-1)
}

function winGame() {
	result.innerHTML = "<h1>YOU WIN!</h1>";
	hideGame();
	score++;
	updateScore(1)
}

function checkIfWinner(number) {
	var winningNumber = game.randNum.toString();
	if (number === winningNumber) {
		winGame();
	} else if (game.guessesLeft <= 1) {
		loseGame();
	} else {
		wrongGuess(number);
		updateHTML();
	}
}

function updateScore(point) {
    gameScore.innerHTML = score;
    currentScore = parseInt(playerScore.innerHTML);
    playerScore.innerHTML = currentScore + point;
    playerScoreHidden.value = playerScore.innerHTML
}

function wrongGuess(number) {
	game.wrongGuess();
	document.getElementById(number).style.display = "none";
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
	guessesLeft.innerHTML = game.guessesLeft;
	gameScore.innerHTML = score;
}

newGame();
hideEndGame();
setDefaults();
