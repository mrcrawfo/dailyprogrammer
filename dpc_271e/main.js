var challenge1 = [4,1]; // 1
var challenge2 = [4,4]; // 0.25
var challenge3 = [4,5]; // 0.25
var challenge4 = [4,6]; // 0.1875
var challenge5 = [1,10]; // 1
var challenge6 = [100,200]; // 0.0001
var challenge7 = [8,20]; // 0.009765625

function solve(challenge) {
    return probability(challenge[0], challenge[1]);
}

function probability(d, hp){
    var output = 1.0;
    
    while (d < hp) {
        output *= (1.0 / d);
        hp -= d;
    }
    output *= (d - hp + 1) / d;
    
    return output;
}

function roll(d) {
    var output = 1 + Math.floor(Math.random() * d);
    if(output == d) output += roll(d);
    return output;
}

function average(d) {
    var cummulative = 0;
    var count = 0;
    for(count = 0; count < 200000; count++) {
        cummulative += roll(d);
    }
    return (cummulative / count);
}