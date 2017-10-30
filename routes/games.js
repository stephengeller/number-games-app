var express = require("express");
var router = express.Router();
var session = require("express-session");
var sess;
/* GET users listing. */

router.get("/", function(req, res) {
	res.render("game/index", {
		player: req.session.player
	});
});

router.post("/", function(req, res) {
	console.log(req.session.player);
	res.render("game/index", {
		player: req.session.player
	});
});

router.get("/numberGuesser", function(req, res, next) {
	res.render("game/numberGuesser", {
		player: req.session.player
	});
});

router.post("/numberGuesser", function(req, res, next) {
	res.render("game/numberGuesser", {
		player: req.session.player
	});
});

module.exports = router;
