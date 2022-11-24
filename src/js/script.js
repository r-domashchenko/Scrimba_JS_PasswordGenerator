let homeTeamScore = 0,
    guestTeamScore = 0,
    scoreLeft = document.getElementById('scoreLeft'),
    scoreRight = document.getElementById('scoreRight');

function plus(count, side) {
    if (side === 'R') {
        guestTeamScore += count;
        scoreRight.textContent = guestTeamScore;
    } else {
        homeTeamScore+= count;
        scoreLeft.textContent = homeTeamScore;
    }
};

function newGame() {
    homeTeamScore = 0,
    guestTeamScore = 0;
    scoreLeft.textContent = 0;
    scoreRight.textContent = 0;
};