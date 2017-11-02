var challenge1 = [0x18, 0x3C, 0x7E, 0x7E, 0x18, 0x18, 0x18, 0x18];
var challenge2 = [0xFF, 0x81, 0xBD, 0xA5, 0xA5, 0xBD, 0x81, 0xFF];
var challenge3 = [0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55];
var challenge4 = [0x3E, 0x7F, 0xFC, 0xF8, 0xF8, 0xFC, 0x7F, 0x3E];
var challenge5 = [0x93, 0x93, 0x93, 0xF3, 0xF3, 0x93, 0x93, 0x93];

var canvasWidth = 8;
var canvasHeight = 8;

function hexToBool(input) {
    var output = input.toString(2);
    output = "00000000".substr(output.length) + output;
    output = output.split('');
    for(var i = 0; i < output.length; i++) {
        output[i] = parseInt(output[i]) ? true : false;
    }
    return output;
}

function renderString(input) {
    var output = '';
    for(var i = 0; i < input.length; i++) {
        var bools = hexToBool(input[i]);
        for(var j = 0; j < bools.length; j++) {
            if (bools[j]) {
                output = output + 'X';
            } else {
                output = output + ' ';
            }
        }
        output += '\n';
    }
    return output;
}

function renderCanvas(canvas, input) {
    var ctx = canvas.getContext('2d');
    var imagedata = ctx.createImageData(canvasWidth, canvasHeight);
    var data = imagedata.data;
    var offset = 0;
    for(var i = 0; i < input.length; i++) {
        var bools = hexToBool(input[i]);
        for(var j = 0; j < bools.length; j++) {
            if (bools[j]) {
                data[offset] = 0;
                data[offset + 1] = 0;
                data[offset + 2] = 0;
                data[offset + 3] = 255;
            } else {
                data[offset] = 255;
                data[offset + 1] = 255;
                data[offset + 2] = 255;
                data[offset + 3] = 255;
            }
            offset += 4;
        }
    }
    ctx.putImageData(imagedata, 0, 0);
}