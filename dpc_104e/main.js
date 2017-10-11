var challenge1 = 10;
var challenge2 = 24;
var challenge3 = 41;
var challenge4 = 54;
var challenge5 = 70;
var challenge6 = 89;
var challenge7 = 100;
var challenge8 = 341;

function solve(input) {
    var result = input;
    for(var i = 1; i < input; i++) {
        if (i % 3 == 0 || i % 14 == 0 || i % 100 == 0) {
            result--;
        }
    }
    return result;
}