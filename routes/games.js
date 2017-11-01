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
	var lastGameScore = parseInt(req.body.playerScoreHidden);
	if ((isNaN(lastGameScore) === false)  && req.session.player !== undefined) {
        req.session.player.score = lastGameScore
    }
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

router.get("/pickanumber", function(req, res, next) {
	res.render("game/pickANumber", {
		player: req.session.player
	});
});

router.post("/pickanumber", function(req, res, next) {
	res.render("game/pickANumber", {
		player: req.session.player
	});
});

module.exports = router;
