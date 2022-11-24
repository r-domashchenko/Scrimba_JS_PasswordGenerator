let homeTeamScore = 0,
    guestTeamScore = 0,
    scoreLeft = document.getElementById('scoreLeft'),
    scoreRight = document.getElementById('scoreRight'),
    leader = document.getElementsByClassName('leader');

function plus(count, side) {
    if (side === 'guest') {
        guestTeamScore += count;
        scoreRight.textContent = guestTeamScore;
    } else {
        homeTeamScore += count;
        scoreLeft.textContent = homeTeamScore;
    };
    showLeader();
};

function newGame() {
    homeTeamScore = 0,
        guestTeamScore = 0;
    scoreLeft.textContent = 0;
    scoreRight.textContent = 0;
};

function showLeader() {
    console.log('showLead function start');
    if (homeTeamScore === guestTeamScore) {
        console.log('home and guest score are EQUAL');
    } else if (homeTeamScore > guestTeamScore) {
        console.log('home is leader');
        } else {
            console.log('guest is leader');
        }
};