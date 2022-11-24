let scoreLeft = 0,
    scoreRight = 0;


function plusL(count) {
    scoreLeft += count;
    document.getElementById('scoreLeft').textContent = scoreLeft;
    return scoreLeft;
};

function plusR(count) {
    scoreRight += count;
    document.getElementById('scoreRight').textContent = scoreRight;
    return scoreRight;
};