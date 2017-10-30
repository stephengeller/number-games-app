// var numberGuesser = require("./numberGuesser");

var guessHigher = document.getElementById("guessHigher");

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
	endGame.style.display = "block";
	gameContainer.style.display = "none";
});

playAgain.addEventListener("click", function() {
	gameContainer.style.display = "block";
	endGame.style.display = "none";
	newGame();
	setDefaults();
});

function checkIfWinner() {
	if (game.guessesLeft <= 0) {
		result.innerHTML = "<h1>YOU WIN!</h1>";
		endGame.style.display = "block";
		gameContainer.style.display = "none";
	}
}

function updateHTML() {
	currentGuess.innerHTML = game.currentGuess;
	guessesLeft.innerHTML = game.guessesLeft;
}

newGame();
setDefaults();
