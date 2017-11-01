class NumberGuesserManager {
    constructor(playerScore = 0) {
       this.playerScore = playerScore;
       this.currentGameScore = 0;
    }

    winGame() {
        console.log(this.currentGameScore);
        this.currentGameScore += 1;
        console.log(this.currentGameScore);
        this.updateScore(1);
    }

    loseGame() {
        console.log(this.currentGameScore);
        this.currentGameScore -= 1;
        console.log(this.currentGameScore);
        this.updateScore(-1);
    }

    updateScore(point) {
        gameScore.innerHTML = this.currentGameScore;
        if (typeof playerScore !== 'undefined') {
            var currentScore = parseInt(playerScore.innerHTML);
            playerScore.innerHTML = currentScore + point;
            playerScoreHidden.value = playerScore.innerHTML
        }
    }
}

console.log('number guesser ');