describe("feature", function() {
	beforeEach(function() {
		document.getElementById("numberGame").style.display = "block";
		document.getElementById("pickANumber").style.display = "block";
	});

	afterEach(function() {
		document.getElementById("numberGame").style.display = "none";
		document.getElementById("pickANumber").style.display = "none";
	});

	describe("Pick a Number game", function() {
		it("contains starting prompt", function() {
			expect(document.getElementById("guessPrompt").innerHTML).toEqual(
				"Guess my number..."
			);
		});
	});
});
