var challenge1 = [1, 3, 2, 3, 4, 5];
var challenge2 = [2, 4, 3, 6, 1, 3, 6, 8];
var challenge3 = [6, 8, 5, 8, 8, 9, 5, 7, 4, 7];
var challenge4 = [15, 18, 13, 16, 9, 12, 3, 4, 17, 20, 9, 11, 17, 18, 4, 5, 5, 6, 4, 5, 5, 6, 13, 16, 2, 3, 15, 17, 13, 14];

function solve(input) {
    var minTime = 999;
    var maxTime = 0;
    
    for(var i = 0; i < input.length; i+=2) {
        var startTime = input[i];
        var endTime = input[i + 1];
        if(startTime < minTime) minTime = startTime;
        if(endTime > maxTime) maxTime = endTime;
    }
    
    var total = 0;
    var currentTime = minTime;
    for(var j = 0; j < (maxTime - minTime); j++) {
        for(var k = 0; k < input.length; k+=2) {
            var startTime = input[k];
            var endTime = input[k + 1];
            if(startTime <= currentTime && endTime > currentTime) {
                total++;
                break;
            }
        }
        currentTime++;
    }
    
    return total;
}