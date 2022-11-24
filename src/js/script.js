let Left = 0,
    Right = 0,
    scoreLeft = document.getElementById('scoreLeft'),
    scoreRight = document.getElementById('scoreRight');

function plus(count, side) {
    if (side === 'R') {
        Right += count;
        scoreRight.textContent = Right;
    } else {
        Left += count;
        scoreLeft.textContent = Left;
    }
};

function newGame() {
    Left = 0;
    Right = 0;
    scoreLeft.textContent = 0;
    scoreRight.textContent = 0;
};