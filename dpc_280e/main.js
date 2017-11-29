var challenge1 = '0111011100';
var challenge2 = '1010010000';
var challenge3 = '0011101110';
var challenge4 = '0000110000';
var challenge5 = '1111110001';

function solve(input) {
    var left = getLeft(input.substring(0, 5));
    var right = getRight(input.slice(5));
    
    if(left >= 0 && right >= 0) {
        return ((left * 10) + right);
    } else {
        return "Invalid";
    }
}

function getLeft(value) {
    var output = -1;
    switch(value) {
        case "00000":
            output = 0;
            break;
        case "00010":
            output = 1;
            break;
        case "00110":
            output = 2;
            break;
        case "01110":
            output = 3;
            break;
        case "11110":
            output = 4;
            break;
        case "00001":
            output = 5;
            break;
        case "00011":
            output = 6;
            break;
        case "00111":
            output = 7;
            break;
        case "01111":
            output = 8;
            break;
        case "11111":
            output = 9;
            break;
    }
    return output;
}

function getRight(value) {
    var output = -1;
    switch(value) {
        case "00000":
            output = 0;
            break;
        case "01000":
            output = 1;
            break;
        case "01100":
            output = 2;
            break;
        case "01110":
            output = 3;
            break;
        case "01111":
            output = 4;
            break;
        case "10000":
            output = 5;
            break;
        case "11000":
            output = 6;
            break;
        case "11100":
            output = 7;
            break;
        case "11110":
            output = 8;
            break;
        case "11111":
            output = 9;
            break;
    }
    return output;
}