var challenge1 = '0000';
var challenge2 = '1234';
var challenge3 = '567890';
var challenge4 = '888888';
var challenge5 = '20397';
var challenge6 = '1984';
var challenge7 = '2007';
var challenge8 = '1234567890';

var topbar = ['0', '2', '3', '5', '6', '7', '8', '9'];
var middlebar = ['2', '3', '4', '5', '6', '8', '9'];
var bottombar = ['0', '2', '3', '5', '6', '8', '9'];
var upperleft = ['0', '4', '5', '6', '8', '9'];
var upperright = ['0', '1', '2', '3', '4', '7', '8', '9'];
var lowerleft = ['0', '2', '6', '8'];
var lowerright = ['0', '1', '3', '4', '5', '6', '7', '8', '9']

function render(input, scale) {
    var output = ''
    var characters = input.split('');
    var charactersData = [];
    for(var i = 0; i < characters.length; i++) {
        charactersData.push(drawCharacter(characters[i], scale));
    }
    
    for(var j = 0; j < charactersData[0].length; j++) {
        for(var k = 0; k < characters.length; k++) {
            output = output + charactersData[k][j];
            for(l = 0; l < scale; l++) {
                output = output + ' ';
            }
        }
        output = output + '\n';
    }
    return output;
}

function drawCharacter(character, scale) {
    var output = [];
    for(var i = 0; i < (3 + 2 * scale); i++) {
        output.push('');
        for(var j = 0; j < (2 + scale); j++) {
            output[i] += ' ';
        }
    }
    
    // top bar
    if (topbar.indexOf(character) >= 0) {
        output = setCharacterAt(output, 0, 0, '+');
        for(var t = 1; t <= scale; t++) {
            output = setCharacterAt(output, 0, t, '-');
        }
        output = setCharacterAt(output, 0, (2 + scale) - 1, '+');
    }
    
    // middle bar
    if (middlebar.indexOf(character) >= 0) {
        output = setCharacterAt(output, (2 + scale) - 1, 0, '+');
        for(var t = 1; t <= scale; t++) {
            output = setCharacterAt(output, (2 + scale) - 1, t, '-');
        }
        output = setCharacterAt(output, (2 + scale) - 1, (2 + scale) - 1, '+');
    }
    
    // bottom bar
    if (bottombar.indexOf(character) >= 0) {
        output = setCharacterAt(output, (3 + 2 * scale) - 1, 0, '+');
        for(var t = 1; t <= scale; t++) {
            output = setCharacterAt(output, (3 + 2 * scale) - 1, t, '-');
        }
        output = setCharacterAt(output, (3 + 2 * scale) - 1, (2 + scale) - 1, '+');
    }
    
    // upper left
    if (upperleft.indexOf(character) >= 0) {
        output = setCharacterAt(output, 0, 0, '+');
        for(var t = 1; t <= scale; t++) {
            output = setCharacterAt(output, t, 0, '|');
        }
        output = setCharacterAt(output, (2 + scale) - 1, 0, '+');
    }
    
    // upper right
    if (upperright.indexOf(character) >= 0) {
        output = setCharacterAt(output, 0, (2 + scale) - 1, '+');
        for(var t = 1; t <= scale; t++) {
            output = setCharacterAt(output, t, (2 + scale) - 1, '|');
        }
        output = setCharacterAt(output, (2 + scale) - 1, (2 + scale) - 1, '+');
    }
    
    // lower left
    if (lowerleft.indexOf(character) >= 0) {
        output = setCharacterAt(output, (2 + scale) - 1, 0, '+');
        for(var t = 1; t <= scale; t++) {
            output = setCharacterAt(output, (2 + scale) - 1 + t, 0, '|');
        }
        output = setCharacterAt(output, (3 + 2 * scale) - 1, 0, '+');
    }
    
    // lower right
    if (lowerright.indexOf(character) >= 0) {
        output = setCharacterAt(output, (2 + scale) - 1, (2 + scale) - 1, '+');
        for(var t = 1; t <= scale; t++) {
            output = setCharacterAt(output, (2 + scale) - 1 + t, (2 + scale) - 1, '|');
        }
        output = setCharacterAt(output, (3 + 2 * scale) - 1, (2 + scale) - 1, '+');
    }
    
    return output;
}

function setCharacterAt(input, row, col, value) {
    var r = input[row].split('');
    r[col] = value;
    input[row] = r.join('');
    return input
}