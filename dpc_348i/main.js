var challenge1 = [6, 4, 5, 3, 10, 10, 8, 1, 8, 0, 10, 6, 3, 7, 3, 5, 3];
var challenge2 = [9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0];
var challenge3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var challenge4 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
var challenge5 = [10, 3, 7, 6, 1, 10, 10, 10, 2, 8, 9, 0, 7, 3, 10, 10, 10];
var challenge6 = [9, 0, 3, 7, 6, 1, 3, 7, 8, 1, 5, 5, 0, 10, 8, 0, 7, 3, 8, 2, 8];

function solve(input) {
    var frameCurrent = 0;
    var frameTotal = 0;
    var frameRolls = 0;
    var output = '';
    
    while(input.length > 0) {
        frameCurrent++;
        frameTotal = 0;
        frameRolls = 0;
        
        if(output != '') output += ' ';
        
        var ball1;
        var ball2;
        var ball3;
        var thirdRoll = false;
        
        var ball1 = input.shift()
        frameTotal += ball1;
        if(ball1 == 10) {
            if(frameCurrent == 10) {
                output += 'X';
                ball2 = input.shift();
                if(ball2 == 0) {
                    output += '- ';
                } else if(ball2 == (10 - ball1)) {
                    output += '/';
                    thirdRoll = true;
                } else if(ball2 == 10) {
                    output += 'X';
                    thirdRoll = true;
                } else {
                    output += ball2;
                }
            } else {
                output += 'X ';
            }
        } else {
            if(ball1 == 0) {
                output += '-';
            } else {
                output += ball1;
            }
            ball2 = input.shift();
            if(ball2 == 0) {
                output += '-';
            } else if(ball2 == (10 - ball1)) {
                output += '/';
                if(frameCurrent == 10) {
                    thirdRoll = true;
                }
            } else {
                output += ball2;
            }
        }
        
        if(thirdRoll) {
            ball3 = input.shift();
            if(ball3 == 0) {
                output += '-';
            } else if(ball3 == 10) {
                output += 'X';
            } else {
                output += ball3;
            }
        }
    }
    
    return output;
}