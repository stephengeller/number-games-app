class NumberPicker {
	constructor(guessLimit = 5) {
		this.guessesLeft = guessLimit;
		this.randNum;
	}

	randomise() {
		this.randNum = Math.floor(Math.random() * 10 + 1);
		return this.randNum;
	}

	wrongGuess() {
		this.guessesLeft--;
	}
}

game = new NumberPicker();
