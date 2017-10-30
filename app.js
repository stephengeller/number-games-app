var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var expressValidator = require("express-validator");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");

var index = require("./routes/index");
var games = require("./routes/games");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use(
	session({
		secret: "games",
		name: "numberGameCookie",
		proxy: true,
		resave: true,
		saveUninitialized: true
	})
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/games", games);

app.use(function(req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
