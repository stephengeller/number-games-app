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
	gameContainer.innerHTML = "<h1> I win! </h1>";
});

function checkIfWinner() {
	if (game.guessesLeft <= 0) {
		gameContainer.innerHTML = "<h1>YOU WIN!</h1>";
	}
}

function updateHTML() {
	currentGuess.innerHTML = game.currentGuess;
	guessesLeft.innerHTML = game.guessesLeft;
}

newGame();
setDefaults();
