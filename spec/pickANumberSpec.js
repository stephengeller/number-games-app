describe("numberPicker", function() {
	beforeEach(function() {
		numberPicker = new NumberPicker();
	});

	it("works", function() {
		expect(1).toEqual(1);
	});

	describe("#randomise", function() {
		it("returns a random number", function() {
			var a = numberPicker.randomise();
			var b = numberPicker.randomise();
			var c = numberPicker.randomise();
			// This may fail once in a blue moon!
			expect(a != b || b != c || c != a).toBe(true);
		});
	});
});
