var challenge1 = '0-7475-3269-9';
var challenge2 = '1-5688-1111-X';

// expect a string in the format '0-0000-0000-0' instead of a number to allow for leading zeroes
function isbnValidate(input) {
	var result = true;
    if (input && typeof input == 'string' && input.length == 13) {
        var pieces = input.split('-');
        if(pieces && pieces.length == 4 && pieceValidate(pieces[0], 1, false) && pieceValidate(pieces[1], 4, false) && pieceValidate(pieces[2], 4, false) && pieceValidate(pieces[3], 1, true)) {
            var str = pieces.join('');
            if (str && str.length == 10 && pieceValidate(str, 10, true)) {
                var c = 0;
                for (var i = 0; i < 10; i++) {
                    var ci;
                    if (i == 9 && str[i] == 'X') {
                        ci = 10;
                    } else {
                        ci = parseInt(str[i]);
                    }
                    c += ci * (10 - i);
                    result = ((c % 11) == 0) ? true : false;
                }
            } else {
                result = false;
            }
        } else {
            result = false;
        }
    } else {
        result = false;
    }
    
    return result;
}

function pieceValidate(input, length, allowX) {
    var result = true;
    if (input && typeof input == 'string' && input.length == length) {
        var sa = input.split('');
        for(var i = 0; i < sa.length; i++) {
            if (allowX && sa[i] == 'X' && (i == sa.length - 1)) {
                // do nothing
            } else if(!isNaN(parseInt(sa[i]))) {
                // do nothing
            } else {
                result = false;
                break;
            }
        }
    } else {
        result = false;
    }
    return result;
}