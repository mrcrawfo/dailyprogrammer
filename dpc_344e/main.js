var challenge1 = 20;

function series(input) {
    var output = [];
    for(var i = 0; i <= input; i++) {
        output.push(solve(i));
    }
    
    return output;
}

function solve(input) {
    var dec = (input >>> 0).toString(2);
    var currentZeroCount = 0;
    var previousDigit;
    for(var i = dec.length - 1; i >= 0; i--) {
        var currentDigit = dec.charAt(i);
        console.log(input + ' :: ' + dec + ' :: ' + i + ' :: ' + currentZeroCount);
        if(previousDigit) {
            if(previousDigit == '0') {
                if(currentDigit == '0') {
                    currentZeroCount++;
                } else {
                    if((currentZeroCount % 2) == 1) {
                        return '0';
                    }
                }
            } else {
                if(currentDigit == '0') {
                    currentZeroCount = 1;
                }
            }
        } else {
            if(currentDigit == '0') {
                currentZeroCount = 1;
            }
        }
        previousDigit = currentDigit;
    }
    
    return '1';
}