var GUESS_LIMIT = 10;

class NumberPicker {
	constructor(guessLimit = GUESS_LIMIT) {
		this.guessLimit = guessLimit;
		this.randNum;
	}

	randomise() {
		this.randNum = Math.floor(Math.random() * 10);
		return this.randNum;
	}
}

game = new NumberGuesser();
