class pickANumberManager {
    constructor(playerScore = 0) {
        this.playerScore = playerScore;
        this.currentGameScore = 0;
    }

    winGame() {
        this.currentGameScore += 1;
        this.updateScore(1);
    }

    loseGame() {
        this.currentGameScore -= 1;
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