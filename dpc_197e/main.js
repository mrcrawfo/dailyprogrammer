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

function isbnGenerate() {
    var output = '';
    var c = 0;
    for (var i = 0; i < 9; i++) {
        var ci = Math.floor(Math.random() * 10);
        output += ci.toString();
        c += (ci * (10 - i));
    }
    var remainder = 11 - (c % 11);
    if (remainder == 11) remainder = 0;
    if (remainder == 10) remainder = 'X';
    output += remainder;
    var piece1 = output.slice(0, 1);
    var piece2 = output.slice(1, 5);
    var piece3 = output.slice(5, 9);
    var piece4 = output.slice(9, 10);
    var pieces = [piece1, piece2, piece3, piece4];
    
    return pieces.join('-');
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

function createLink(input) {
    // started limiting requests with Captcha, trying another ISBN lookup service
    //return 'https://isbnsearch.org/isbn/' + input.split('-').join('');
    
    return 'https://www.bookfinder.com/search/?author=&title=&lang=en&new_used=*&destination=us&currency=USD&binding=*&isbn=' + input + '&keywords=&minprice=&maxprice=&min_year=&max_year=&mode=advanced&st=sr&ac=qr';
}