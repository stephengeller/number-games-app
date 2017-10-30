var express = require("express");
var router = express.Router();
var session = require("express-session");

/* GET users listing. */
router.get("/", function(req, res, next) {
	var sess = req.session;
	if (sess.player === undefined) {
		sess.player = "guest";
	}
	res.render("numberGuesser", {
		player: sess.player,
		game: sess.game
	});
});

module.exports = router;
