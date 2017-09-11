var challenge01 = 333.88;
var challenge02 = 742388.05;
var challenge03 = 919616.12;
var challenge04 = 12.11;
var challenge05 = 2.00;
var challenge06 = 9840067.60;
var challenge07 = 37072408.24;
var challenge08 = 1562400647.99;
var challenge09 = 2000839500.65;
var challenge10 = 1000000.00;
var challenge11 = 0.05;

function convert(challenge) {
    var output = ' dollars and ';
    try {
        var dollars = challenge.toString().split('.')[0];
        if (dollars != '0') {
            output = processBlock(dollars, 1, false, false) + output;        
        } else {
            // special case, 'zero' is the desired output if and only if it is for the whole dollar amount
            output = "zero" + output;
        }
        var cents = challenge.toString().split('.')[1];
        while (cents.length < 2) {
            cents += '0';
        }
        output = output + processBlock(cents, 0, false, false) + ' cents.';
    } catch(e) { output += 'zero cents.'; }
    
    // capitalize and format output in line with challenge output
    output = output.slice(0, 1).toUpperCase() + output.slice(1, output.length);
    // clean up extra space in case of tens digit not followed by single digit
    while (output.indexOf('  ') >= 0) {
        output = output.replace('  ', ' ');
    }
    // clean up extraneous comma in case 'One million, dollars and zero cents.'
    console.log(output + ' :: ' + output.indexOf(', dollars'));
    if (output.indexOf(', dollars') >= 0) {
        output = output.replace(', dollars', ' dollars');
    }
    
    return output;
}

function processBlock(challenge, magnitude, hundred, ten) {
    var output = '';
    var challengeString = challenge.toString();
    if (challengeString.length > 3) {
        var sstr1 = parseInt(challengeString.slice(0, challengeString.length - 3));
        var sstr2 = parseInt(challengeString.slice(challengeString.length - 3, challengeString.length));
        var ord = sstr1.toString();
        if (ord.length > 3) ord = ord.slice(ord.length - 3, ord.length);
        if (parseInt(ord)) {
            output = processBlock(sstr1, magnitude + 1, false, false) + getUnit(magnitude) + ', ' + processBlock(sstr2, magnitude, false, false);
        } else {
            output = processBlock(sstr1, magnitude + 1, false, false) + processBlock(sstr2, magnitude, false, false);
        }
    } else if (challengeString.length > 2) {
        output = processBlock(challengeString.split('')[0], magnitude, true) + processBlock(challengeString.slice(1, challengeString.length), magnitude, false, false);        
    } else if (challengeString.length > 1) {
        switch (parseInt(challengeString.split('')[0])) {
            case 9:
                output = 'ninety ' + processBlock(challengeString.split('')[1], magnitude, false, true);
                break;
            case 8:
                output = 'eighty ' + processBlock(challengeString.split('')[1], magnitude, false, true);
                break;
            case 7:
                output = 'seventy ' + processBlock(challengeString.split('')[1], magnitude, false, true);
                break;
            case 6:
                output = 'sixty ' + processBlock(challengeString.split('')[1], magnitude, false, true);
                break;
            case 5:
                output = 'fifty ' + processBlock(challengeString.split('')[1], magnitude, false, true);
                break;
            case 4:
                output = 'forty ' + processBlock(challengeString.split('')[1], magnitude, false, true);
                break;
            case 3:
                output = 'thirty ' + processBlock(challengeString.split('')[1], magnitude, false, true);
                break;
            case 2:
                output = 'twenty ' + processBlock(challengeString.split('')[1], magnitude, false, true);
                break;
            case 1:
                switch (parseInt(challengeString.split('')[1])) {
                    case 9:
                        output = 'nineteen';
                        break;
                    case 8:
                        output = 'eighteen';
                        break;
                    case 7:
                        output = 'seventeen';
                        break;
                    case 6:
                        output = 'sixteen';
                        break;
                    case 5:
                        output = 'fifteen';
                        break;
                    case 4:
                        output = 'fourteen';
                        break;
                    case 3:
                        output = 'thirteen';
                        break;
                    case 2:
                        output = 'twelve';
                        break;
                    case 1:
                        output = 'eleven';
                        break;
                    case 0:
                        output = 'ten';
                        break;
                }
                break;
            case 0:
                output = processBlock(challengeString.split('')[1], magnitude, false, true);
                break;
       }
    } else if (challengeString.length > 0) {
        switch (parseInt(challengeString)) {
            case 9:
                output = 'nine';
                break;
            case 8:
                output = 'eight';
                break;
            case 7:
                output = 'seven';
                break;
            case 6:
                output = 'six';
                break;
            case 5:
                output = 'five';
                break;
            case 4:
                output = 'four';
                break;
            case 3:
                output = 'three';
                break;
            case 2:
                output = 'two';
                break;
            case 1:
                output = 'one';
                break;
        }
        if (parseInt(challengeString) && hundred) output += ' hundred ';
    }    
    
    return output;
}

function getUnit(magnitude) {
    var output = '';
    switch(magnitude) {
        case 1:
            output = ' thousand';
            break;
        case 2:
            output = ' million';
            break;
        case 3:
            output = ' billion';
            break;
        case 4:
            output = ' trillion';
            break;
    }
    
    return output;
}

function generateRandomValue() {
    var output = '';
    for (var i = 0; i < 16; i++) {
        if(Math.random() < 0.8) {
            output += Math.floor(Math.random() * 10).toString();
        } else {
            break;
        }
    }
    output += '.' + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();;
    return parseFloat(output);
}