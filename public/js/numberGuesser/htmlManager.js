function newGame() {
	game = new NumberGuesser();
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
	result.innerHTML = "<h1>I win!</h1>";
	hideGame();
	manager.loseGame();
});

playAgain.addEventListener("click", function() {
	hideEndGame();
	newGame();
	updateHTML();
});

startGame.addEventListener('click', function() {
	hideIntro();
	hideEndGame()
});

function hideIntro() {
	intro.style.display = "none";
	playAgain.style.display = "inline-block"
}

function checkIfWinner() {
	if (game.guessesLeft < 0) {
		result.innerHTML = "<h1>YOU WIN!</h1>";
		hideGame();
		manager.winGame();
	}
}

function showIntro() {
	intro.style.display = "block";
    gameContainer.style.display = "none";
    endGame.style.display = "none";
    playAgain.style.display = "none";
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
}

function setupManager() {
    if (typeof playerScore !== 'undefined') {
        var playerScore = parseInt(playerScore.innerHTML);
        manager = new NumberGuesserManager(playerScore);
    } else {
        manager = new NumberGuesserManager(0)
    }
}

function setup() {
	setupManager();
    newGame();
    hideEndGame();
    updateHTML();
    showIntro();
}

setup();

