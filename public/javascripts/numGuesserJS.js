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
});

function updateHTML() {
	document.getElementById("currentGuess").innerHTML = game.currentGuess;
	document.getElementById("guessesLeft").innerHTML = game.guessesLeft;
}

newGame();
setDefaults();
