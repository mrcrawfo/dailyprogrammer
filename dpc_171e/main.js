var challenge1 = '183C7E7E18181818';
var challenge2 = 'FF81BDA5A5BD81FF';
var challenge3 = 'AA55AA55AA55AA55';
var challenge4 = '3E7FFCF8F8FC7F3E';
var challenge5 = '939393F3F3939393';

function hexToBitmap(input) {
    var output = '';
    switch (input) {
        case '0':
            output = '    ';
            break;
        case '1':
            output = '   X';
            break;
        case '2':
            output = '  X ';
            break;
        case '3':
            output = '  XX';
            break;
        case '4':
            output = ' X  ';
            break;
        case '5':
            output = ' X X';
            break;
        case '6':
            output = ' XX ';
            break;
        case '7':
            output = ' XXX';
            break;
        case '8':
            output = 'X   ';
            break;
        case '9':
            output = 'X  X';
            break;
        case 'A':
            output = 'X X ';
            break;
        case 'B':
            output = 'X XX';
            break;
        case 'C':
            output = 'XX  ';
            break;
        case 'D':
            output = 'XX X';
            break;
        case 'E':
            output = 'XXX ';
            break;
        case 'F':
            output = 'XXXX';
            break;
    }
    return output;
}

function render(input) {
    var output = '';
    input = input.split('');
    for(var i = 0; i < input.length; i++) {
        output = output + hexToBitmap(input[i]);
        if (i % 2 == 1) {
            output += '\n';
        }
    }
    return output;
}