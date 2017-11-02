# Welcome to The Number Games!

Simple maths games! Keep your scores! Beat your friends!

### Features
- Sign in to keep your scores!
- Play Number Guesser: pick a number and let the computer try and guess it!
- Play Pick-A-Number: the computer picks a number and YOU try and guess it!

How to Install
-----

You can play it [online!](https://number-games.herokuapp.com)

Clone this repository, install the packages, run the server in your terminal and access it on the browser.
````
$ git clone git@github.com:stephengeller/number-games-app.git
$ cd number-games-app
$ npm install
$ npm start
````
The default port to access is 3000, so go to [localhost:3000](http://localhost:3000) once the server is running.


How to Test
-----
All tests are viewable through the SpecRunner.html file. Run `open SpecRunner.html` in your command line to open it in the browser.


## Comments
All our pages are rendered using ejs files in the views folder, splitting up the header and footers into separate ejs files in the partials folder.
Each game is a single-page app, with the javascript files loaded at the bottom of the ejs files.

#### Future steps
  - Add database persistence for users
  - Validate users so they can sign in / sign up
  - Add more games
