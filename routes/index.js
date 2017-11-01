var express = require("express");
var router = express.Router();
var session = require("express-session");

/* GET home page. */
router.get("/", function(req, res) {
	res.render("index", {
		player: req.session.player,
		errors: null
	});
});

router.post("/", function(req, res) {
	res.render("index");
});

router.post("/signout", function(req, res) {
	req.session.player = undefined;
	res.redirect("/");
});

router.post("/confirm-user", function(req, res) {
	req.checkBody("name", "Name is required").notEmpty();

	var errors = req.validationErrors();
	if (errors === false) {
		errors = [];
	}

	if (errors.length !== 0) {
		res.render("index", {
			errors: errors,
			player: req.session.player
		});
	} else {
		req.session.player = {
			name: req.body.name,
			score: 0
		};
		res.redirect("/games/");
	}
});

module.exports = router;
