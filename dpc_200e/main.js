var challengeBase1 = ['.....................................',
'...#######################...........',
'...#.....................#...........',
'...#.....................#...........',
'...#.....................#...........',
'...#.....................#...........',
'...#.....................#...........',
'...#.....................#######.....',
'...###.................##......#.....',
'...#..##.............##........#.....',
'...#....##.........##..........#.....',
'...#......##.....##............#.....',
'...#........#####..............#.....',
'...#........#..................#.....',
'...#.......##..................#.....',
'...#.....##....................#.....',
'...#...##......................#.....',
'...#############################.....',
'.....................................',
'.....................................',
'.....................................',
'.....................................'];
var challengeX1 = 8;
var challengeY1 = 12;
var challengeCharacter1 = '@';
var challengeBase2 = ['----------------',
'-++++++++++++++-',
'-+------------+-',
'-++++++++++++-+-',
'-+------------+-',
'-+-++++++++++++-',
'-+------------+-',
'-++++++++++++-+-',
'-+------------+-',
'-+-++++++++++++-',
'-+------------+-',
'-++++++++++++++-',
'-+------------+-',
'-++++++++++++++-',
'----------------'];
var challengeX2 = 2;
var challengeY2 = 2;
var challengeCharacter2 = '@';
var challengeBase3 = ['aaaaaaaaa',
'aaadefaaa',
'abcdafgha',
'abcdafgha',
'abcdafgha',
'abcdafgha',
'aacdafgaa',
'aaadafaaa',
'aaaaaaaaa'];
var challengeX3 = 8;
var challengeY3 = 3;
var challengeCharacter3 = ',';

function render(data) {
    return data.join('\n');
}

// 0 - Up
// 1 - Down
// 2 - Left
// 3 - Right

function characterFloodfill(base, x, y, characterFill) {
    var startTime = new Date().getTime();
    var characterReplace = base[y].charAt(x);
    var fill = [];
    for(var r = 0; r < base.length; r++) {
        row = '';
        for(var c = 0; c < base[r].length; c++) {
            if(r == y && c == x) {
                row += 'O';
            } else {
                row += ' ';
            }
        }
        fill.push(row);
    }
    
    if(y > 0) fill = characterFillDirection(base, fill, x, y - 1, 0, characterFill, characterReplace);
    if(y < base.length - 1) fill = characterFillDirection(base, fill, x, y + 1, 1, characterFill, characterReplace);
    if(x > 0) fill = characterFillDirection(base, fill, x - 1, y, 2, characterFill, characterReplace);
    if(x < base[0].length - 1) fill = characterFillDirection(base, fill, x + 1, y, 3, characterFill, characterReplace);
    
    for(var r = 0; r < base.length; r++) {
        for(var c = 0; c < base[r].length; c++) {
            if(fill[r].charAt(c) == 'O') {
                var cf = base[r].split('');
                cf[c] = characterFill;
                base[r] = cf.join('');
            }
        }
    }
    
    console.log('completed characterFloodfill in ' + (new Date().getTime() - startTime) + 'ms');
    return base;
}

function characterFillDirection(base, fill, x, y, direction, characterFill, characterReplace) {
    var currentCharacterBase = base[y].charAt(x);
    var currentCharacterFill = fill[y].charAt(x);
    if(currentCharacterFill == ' ') {
        if(currentCharacterBase == characterReplace) {
            var cf = fill[y].split('');
            cf[x] = 'O';
            fill[y] = cf.join('');
            
            if((direction != 1) && (y > 0)) fill = characterFillDirection(base, fill, x, y - 1, 0, characterFill, characterReplace);
            if((direction != 0) && (y < base.length - 1)) fill = characterFillDirection(base, fill, x, y + 1, 1, characterFill, characterReplace);
            if((direction != 3) && (x > 0)) fill = characterFillDirection(base, fill, x - 1, y, 2, characterFill, characterReplace);
            if((direction != 2) && (x < base[0].length - 1)) fill = characterFillDirection(base, fill, x + 1, y, 3, characterFill, characterReplace);
        } else {
            var cf = fill[y].split('');
            cf[x] = 'X';
            fill[y] = cf.join('');
        }
    }
    return fill;
}

// 1 - pencil
// 2 - flood fill

var activeTool = 1;

var pencilX = 0;
var pencilY = 0;
var pencilDrawing = false;

var canvas = document.getElementById("drawingCanvas");
var context = canvas.getContext("2d");

canvas.addEventListener('mousemove', toolMove);
canvas.addEventListener('mousedown', toolDown);
canvas.addEventListener('mouseup', toolUp);
canvas.addEventListener('mouseleave', toolUp);

function toolDown(e) {
    if(activeTool == 1) {
        pencilDrawing = true;
    }
}

function toolUp(e) {
    if(activeTool == 1) {
        pencilDrawing = false;
    } else if(activeTool == 2) {
        floodfill(context.getImageData(0, 0, 400, 400), e.layerX, e.layerY);
    }
}

function toolMove(e) {
    if(activeTool == 1) {
        if(pencilDrawing) {
            context.moveTo(pencilX, pencilY);
            context.lineTo(e.layerX, e.layerY);
            context.stroke();
        }
        pencilX = e.layerX;
        pencilY = e.layerY;
    }
}

function activateTool(tool) {
    activeTool = tool;
}

// 0 - Up
// 1 - Down
// 2 - Left
// 3 - Right

function floodfill(base, x, y) {
    if(x >= 0 && y >= 0 && x < 400 && y < 400) {
        var startTime = new Date().getTime();

        var baseData = base.data;
        var pixelReplace = context.getImageData(x, y, 1, 1);
        var dataReplace = pixelReplace.data;
        var rgbaReplace = [dataReplace[0], dataReplace[1], dataReplace[2], dataReplace[3]];

        var fill = context.createImageData(400, 400);
        var fillData = fill.data;
        var fillStartIndex = 4 * (y * 400 + x);
        var rgbaFill = [0x00, 0xff, 0x00, 0xff];
        
        fillData[fillStartIndex + 0] = rgbaFill[0];
        fillData[fillStartIndex + 1] = rgbaFill[1];
        fillData[fillStartIndex + 2] = rgbaFill[2];
        fillData[fillStartIndex + 3] = rgbaFill[3];

        if(y > 0) fillData = floodfillDirection(base, fill, x, y - 1, 0, rgbaFill, rgbaReplace);
        if(y < (400 - 1)) fillData = floodfillDirection(base, fill, x, y + 1, 1, rgbaFill, rgbaReplace);
        if(x > 0) fillData = floodfillDirection(base, fill, x - 1, y, 2, rgbaFill, rgbaReplace);
        if(x < (400 - 1)) fillData = floodfillDirection(base, fill, x + 1, y, 3, rgbaFill, rgbaReplace);

        for(var r = 0; r < 400; r++) {
            for(var c = 0; c < 400; c++) {
                var index = 4 * (r * 400 + c);
                if(fillData[index + 0] == rgbaFill[0] && fillData[index + 1] == rgbaFill[1] && fillData[index + 2] == rgbaFill[2] && fillData[index + 3] == rgbaFill[3]) {
                    baseData[index + 0] = 0x00;
                    baseData[index + 1] = 0xff;
                    baseData[index + 2] = 0x00;
                    baseData[index + 3] = 0xff;                
                }
            }
        }

        console.log('completed floodfill in ' + (new Date().getTime() - startTime) + 'ms');

        context.putImageData(base, 0, 0);
    }
}

function floodfillDirection(base, fill, x, y, direction, rgbaFill, rgbaReplace) {
    var index = 4 * (y * 400 + x);
    
    var baseData = base.data;
    var dataBase = [baseData[index + 0], baseData[index + 1], baseData[index + 2], baseData[index + 3]];
    
    var fillData = fill.data;
    var dataFill = [fillData[index + 0], fillData[index + 1], fillData[index + 2], fillData[index + 3]];
    
    if(dataFill[0] == 0 && dataFill[1] == 0 && dataFill[2] == 0 && dataFill[3] == 0) {
        if(dataBase[0] == rgbaReplace[0] && dataBase[1] == rgbaReplace[1] && dataBase[2] == rgbaReplace[2] && dataBase[3] == rgbaReplace[3]) {
            fillData[index + 0] = rgbaFill[0];
            fillData[index + 1] = rgbaFill[1];
            fillData[index + 2] = rgbaFill[2];
            fillData[index + 3] = rgbaFill[3];     
            
            if((direction != 1) && (y > 0)) floodfillDirection(base, fill, x, y - 1, 0, rgbaFill, rgbaReplace);
            if((direction != 0) && (y < (400 - 1))) floodfillDirection(base, fill, x, y + 1, 1, rgbaFill, rgbaReplace);
            if((direction != 3) && (x > 0)) floodfillDirection(base, fill, x - 1, y, 2, rgbaFill, rgbaReplace);
            if((direction != 2) && (x < (400 - 1))) floodfillDirection(base, fill, x + 1, y, 3, rgbaFill, rgbaReplace);
        } else {
            fillData[index + 0] = 0x00;
            fillData[index + 1] = 0x00;
            fillData[index + 2] = 0x00;
            fillData[index + 3] = 0xff;     
        }
    }
    
    return fillData;
}