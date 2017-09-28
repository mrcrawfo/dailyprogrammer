function getTornNumbers(digits) {
    var tornNumbers = [];
    if(digits % 2 == 0) {
        var d = '';
        for(var i = 0; i < digits; i++) {
            d += '0';
        }
        var limit = parseInt('1' + d);

        for(var b = 0; b < limit; b++) {
            var s = b * b;
            if (s >= limit) {
                break;
            } else {
                var dsn = zeroFill(s, digits);
                var dss = dsn.split('');
                if (!hasDuplicates(dss)) {
                    if(dss[0] != dss[1] && dss[1] != dss[2] && dss[2] != dss[3])
                    var t1 = zeroFill(dsn.slice(0, digits / 2), digits / 2);
                    var t2 = zeroFill(dsn.slice(digits / 2, digits), digits / 2);
                    var t = parseInt(t1) + parseInt(t2);
                    console.log(dsn + ' :: ' + t1 + ' * ' + t2 + ' :: ' + t);
                    if (t * t == s) {
                        tornNumbers.push(s);
                    }
                }
            }
        }
    }
    
    var output = '';
    for(var c = 0; c < tornNumbers.length; c++) {
        output = output + tornNumbers[c] + '\n';
    }
    return output;
}

function zeroFill(value, characters) {
    var str = value.toString();
    while(str.length < characters) {
        str = '0' + str;
    }
    return str;
}

function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}