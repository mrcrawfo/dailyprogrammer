var challenge1 = 12345;
var challenge2 = 123456;
var challenge3 = 12345678901234567890123456789;

function msqr(input, precision) {
	if (typeof precision == 'undefined') precision = 4;
    var answer = input / 2.0;
	var lowest = input;
	var highest = 0;
	var limit = 100;
	var i;
    if (input > 4) {
		for(i = 0; i < limit; i++){
	    	var prec = '1';
	    	for(var p = 0; p < precision; p++) {
	    		prec = '0' + prec;
	    	}
	    	prec = '.' + prec;
	    	if ((Math.abs((answer * answer) - input)) < parseFloat(prec)) break;
			if ((answer * answer) > input) {
				if (answer < lowest) lowest = answer;
				answer = (lowest + highest) / 2.0;
			} else if ((answer * answer) < input) {
				if (answer > highest) highest = answer;
				answer = (lowest + highest) / 2.0;
			} else {
				break;
			}
        }
    }
    console.log('found to an accuracy of ' + (Math.abs((answer * answer) - input)) + ' in ' + i + ' iterations');
	return answer
}