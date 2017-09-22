var challenge1 = 3628800;
var challenge2 = 479001600;
var challenge3 = 6;
var challenge4 = 18;

function solve(challenge) {
    console.log('-------------------- ' + challenge + ' --------------------');
    var result = "NONE";
    var highestDenominator = 0;
    var remainder = 0;
    while(challenge > 1) {
        highestDenominator++;
        remainder = challenge % highestDenominator;
        challenge = challenge / highestDenominator;
        console.log('highestDenominator ' + highestDenominator);
        console.log('challenge ' + challenge);
        console.log('remainder ' + remainder);
        if(remainder != 0) {
            break;
        }
    }
    if (challenge == 1) {
        result = highestDenominator + '!';
    }
    return result;
}
