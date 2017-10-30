var MAX = 1000;
var GUESS_LIMIT = 5;

class NumberGuesser {
	constructor(range = MAX, guessLimit = GUESS_LIMIT) {
		this.max = range;
		this.min = 1;
		this.guessesLeft = guessLimit;
		this.currentGuess;
		this.range = this.max - this.min;
		this.randomise();
	}

	guessHigher() {
		this.min = this.currentGuess;
		this.nextTurn();
	}

	nextTurn() {
		this.setRange();
		this.randomise();
		this.addGuess();
	}

	addGuess() {
		this.guessesLeft -= 1;
	}

	setRange() {
		this.range = this.max - this.min;
		if (this.range <= 1 || this.range >= MAX) {
			this.range = 0;
		}
	}

	randomise(num = this.range) {
		if (this.range > 1) {
			var randomNum = Math.floor(Math.random() * num + 1);
			this.currentGuess = this.min + randomNum;
		} else {
			this.currentGuess = this.min;
		}
	}

	guessLower() {
		this.max = this.currentGuess;
		this.nextTurn();
	}
}

game = new NumberGuesser();
