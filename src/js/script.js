let homeTeamScore = 0,
    guestTeamScore = 0,
    scoreLeft = document.getElementById('scoreLeft'),
    scoreRight = document.getElementById('scoreRight'),
    // shows who is leader (variables)
    leaderLeft = document.getElementById('leader_left'),
    leaderRight = document.getElementById('leader_right');

function plus(count, side) {
    console.log('add function')
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
    console.log('Clear ALL to 0')
    doHidden(leaderLeft);
    doHidden(leaderRight);
    homeTeamScore = 0,
        guestTeamScore = 0;
    scoreLeft.textContent = 0;
    scoreRight.textContent = 0;
};

// for optimization code, uses in future showLeader()
function doVisible(varName) {
    varName.classList.add('leader_visible');
    varName.classList.replace('leader_hidden', 'leader_visible');
    console.log('hidden to visible');
    return varName;
};

function doHidden(varName) {
    varName.classList.add('leader_hidden');
    varName.classList.replace('leader_visible', 'leader_hidden');
    console.log('visible to hidden');
    return varName;
};

function showLeader() {
    console.log('showLeader function start - CHECKING');
    if (homeTeamScore === guestTeamScore) {
        console.log('HOME and GUEST score are EQUAL');
        doHidden(leaderLeft);
        doHidden(leaderRight);
    } else if (homeTeamScore > guestTeamScore) {
        console.log('HOME team is a leader');
        doVisible(leaderLeft);
        doHidden(leaderRight);
        } else {
        console.log('GUEST team is a leader');
        doVisible(leaderRight);
        doHidden(leaderLeft);
        }
};