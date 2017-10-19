var challenge1 = 4.17;
var challenge2 = 1.23;
var challenge3 = 10.24;
var challenge4 = 0.99;
var challenge5 = 5;
var challenge6 = 0.06;
var challenge7 = 7.77;
var challenge8 = 2.50;

function solve(input) {
    var output = '';
    
    input = input * 100;
    var q = Math.floor(input / 25.0);
    if (q) {
        output = output + 'Quarters: ' + q;
        input = input % 25;
    }
    var d = Math.floor(input / 10.0);
    if (d) {
        if (output != '') {
            output = output += '\n';
        }
        output = output + 'Dimes: ' + d;
        input = input % 10;
    }
    var n = Math.floor(input / 5.0);
    if (n) {
        if (output != '') {
            output = output += '\n';
        }
        output = output + 'Nickels: ' + n;
        input = input % 5;
    }
    var p = Math.floor(input);
    if (p) {
        if (output != '') {
            output = output += '\n';
        }
        output = output + 'Pennies: ' + p;
    }
    
    return output;
}