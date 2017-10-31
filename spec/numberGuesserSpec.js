// const Cache = require("../src/Cache.js").Cache;

describe("NumberGuesser", function() {
	beforeEach(function() {
		numberGuesser = new NumberGuesser();
	});

	describe("#constructor", function() {
		it("default values", function() {
			expect(numberGuesser.max).toEqual(1000);
			expect(numberGuesser.min).toEqual(1);
			expect(numberGuesser.guessesLeft).toEqual(10);
		});
	});

	describe("#guessHigher", function() {
		it("raises the minimum guess to the initial guess", function() {
			numberGuesser.currentGuess = 500;
			numberGuesser.guessHigher();
			expect(numberGuesser.max).toEqual(1000);
			expect(numberGuesser.min >= 500).toBe(true);
			expect(numberGuesser.currentGuess > 500).toBe(true);
		});

		it("removes one guess", function() {
			numberGuesser.currentGuess = 500;
			numberGuesser.guessHigher();
			expect(numberGuesser.guessesLeft).toEqual(9);
		});
	});

	describe("#guessLower", function() {
		it("lowers the maximum guess to the initial guess", function() {
			numberGuesser.currentGuess = 500;
			numberGuesser.guessLower();
			expect(numberGuesser.min).toEqual(1);
			expect(numberGuesser.max >= 500).toBe(true);
			expect(numberGuesser.currentGuess < 500).toBe(true);
		});

		it("removes one guess", function() {
			numberGuesser.currentGuess = 500;
			numberGuesser.guessLower();
			expect(numberGuesser.guessesLeft).toEqual(9);
		});
	});
});
