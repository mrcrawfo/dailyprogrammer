var challenge1 = [9, -6, -5, 9, 8, 3, -4, 8, 1, 7, -4, 9, -9, 1, 9, -9, 9, 4, -6, -8];
var challenge2 = [4, 5, -1, -2, -7, 2, -5, -3, -7, -3, 1];
var challenge3 = [-1, -6, -3, -7, 5, -8, 2, -8, 1];
var challenge4 = [-5, -1, -4, 2, 9, -9, -6, -1, -7];

function solve(challenge) {
    var input = challenge.sort(compareInt);
    var output = [];
    var int1;
    var int2;
    var int3;
    for (var i = 0; i < input.length; i++) {
        if (input[i] != int1) {
            int1 = input[i];
            for (var j = i + 1; j < input.length; j++) {
                if (i != j) {
                    int2 = input[j];
                    for (var k = j + 1; k < input.length; k++) {
                        if (j != k && i != k) {
                            int3 = input[k];
                            if ((int1 + int2 + int3) == 0) {
                                var triplet = [int1, int2, int3];
                                triplet = triplet.sort(compareInt);
                                output.push(triplet);
                            }
                        }
                    }
                }
            }
        }
    }
    
    // deduplicate arrays
    for (var c = 0; c < output.length; c++) {
        try {
            while(output[c][0] == output[c + 1][0] && output[c][1] == output[c + 1][1] && output[c][2] == output[c + 1][2]) {
                output.splice(c, 1);
            }
        } catch(e) {}
        // replace array of ints with string to match example output format
        output[c] = output[c].join(' ');
    }
        
    return output;
}

function compareInt(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    
    return 0;
}