var challenge1Start = [255, 255, 0];
var challenge2Start = [204, 119, 34];
var challenge3Start = [255, 255, 255];
var challenge4Start = [255, 255, 255];
var challenge5Start = [255, 255, 255];
var challenge6Start = [0, 255, 255];
var challenge7Start = [255, 0, 255];
var challenge8Start = [0, 0, 0];

var challenge1End = [0, 0, 255];
var challenge2End = [1, 66, 37];
var challenge3End = [0, 255, 0];
var challenge4End = [255, 0, 0];
var challenge5End = [0, 0, 255];
var challenge6End = [255, 0, 255];
var challenge7End = [255, 255, 0];
var challenge8End = [255, 255, 255];

function drawGradient(canvas, startColor, endColor) {
    var context = canvas.getContext('2d');
    var width = canvas.getAttribute('width');
    var height = canvas.getAttribute('height');
    for(var i = 0; i < width; i++) {
        var r = startColor[0] + Math.round((((endColor[0]) - startColor[0]) / width) * i);
        var g = startColor[1] + Math.round((((endColor[1]) - startColor[1]) / width) * i);
        var b = startColor[2] + Math.round((((endColor[2]) - startColor[2]) / width) * i);
        context.beginPath();
        context.rect(i, 0, i + 1, height);
        context.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        context.fill();
    }
}