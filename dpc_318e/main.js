var challenge1Target = 250;
var challenge1Inputs = [1, 3, 7, 6, 8, 3];
var challenge2Target = 881;
var challenge2Inputs = [25, 100, 9, 7, 3, 7];
var challenge3Target = 952;
var challenge3Inputs = [6, 75, 3, 25, 50, 100];
var challenge4Target = 556;
var challenge4Inputs = [50, 8, 3, 7, 2, 10];
var challenge5Target = 528;
var challenge5Inputs = [25, 10, 8, 7, 10, 4];
var challenge6Target = 666;
var challenge6Inputs = [9, 6, 2, 5, 4, 2];
var challenge7Target = 813;
var challenge7Inputs = [25, 50, 75, 100, 1, 10];
var challenge8Target = 127;
var challenge8Inputs = [50, 75, 7, 6, 6, 10];

// note that this is likely to be a very inefficient solution as it uses nested recursion with a factorial number of inputs
// given the constraints of the game (seems to always be a set count of six) this wasn't a huge concern but it would likely not scale well for larger inputs
function countdown(target, inputs) {
    var output = shuffle(target, [], inputs.concat());
    if (!output) output = "No results match this input.";
    return output;
}

function shuffle(target, inputsA, inputsB) {
    if (inputsB.length > 0) {
        for(var i = 0; i < inputsB.length; i++) {
            var shuffleB = inputsB.concat();
			var shuffleA = inputsA.concat();
			shuffleA.push(shuffleB.splice(i, 1)[0]);
            var result = shuffle(target, shuffleA, shuffleB);
            if (result) {
                return result;
                break;
            }
        }
    } else {
        return solve(target, inputsA.concat());
    }
}

function solve(target, inputs) {
    var next = inputs.shift();
    var operators = iterate(target, next, '', inputs.concat());
    if (operators && typeof operators == 'string' && operators != '' && operators.length == inputs.length) {
        var output = next.toString();
        for(var i = 0; i < inputs.length; i++) {
            output = output + ' ' + operators.charAt(i) + ' ' + inputs[i];
        }
        output = output + ' = ' + target;
        return output;
    } else {
        return false;
    }
}

function iterate(target, input, operators, data) {
    if (data.length > 0) {
        var next = data.shift();
        var c1 = iterate(target, (input + next), (operators + '+'), data.concat());
        if (c1) return c1;
        var c2 = iterate(target, (input - next), (operators + '-'), data.concat());
        if (c2) return c2;
        var c3 = iterate(target, (input * next), (operators + '*'), data.concat());
        if (c3) return c3;
        var c4 = iterate(target, (input / next), (operators + '/'), data.concat());
        if (c4) return c4;
    } else {
        if (input == target) { return operators; }
    }
}