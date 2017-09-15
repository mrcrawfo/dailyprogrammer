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

function floodfill(base, x, y, characterFill) {
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
    
    if(y > 0) fill = fillDirection(base, fill, x, y - 1, 0, characterFill, characterReplace);
    if(y < base.length - 1) fill = fillDirection(base, fill, x, y + 1, 1, characterFill, characterReplace);
    if(x > 0) fill = fillDirection(base, fill, x - 1, y, 2, characterFill, characterReplace);
    if(x < base[0].length - 1) fill = fillDirection(base, fill, x + 1, y, 3, characterFill, characterReplace);
    
    for(var r = 0; r < base.length; r++) {
        for(var c = 0; c < base[r].length; c++) {
            if(fill[r].charAt(c) == 'O') {
                var cf = base[r].split('');
                cf[c] = characterFill;
                base[r] = cf.join('');
            }
        }
    }
    
    console.log('completed floodfill in ' + (new Date().getTime() - startTime) + 'ms');
    return base;
}

function fillDirection(base, fill, x, y, direction, characterFill, characterReplace) {
    var currentCharacterBase = base[y].charAt(x);
    var currentCharacterFill = fill[y].charAt(x);
    if(currentCharacterFill == ' ') {
        if(currentCharacterBase == characterReplace) {
            var cf = fill[y].split('');
            cf[x] = 'O';
            fill[y] = cf.join('');
            
            if((direction != 1) && (y > 0)) fill = fillDirection(base, fill, x, y - 1, 0, characterFill, characterReplace);
            if((direction != 0) && (y < base.length - 1)) fill = fillDirection(base, fill, x, y + 1, 1, characterFill, characterReplace);
            if((direction != 3) && (x > 0)) fill = fillDirection(base, fill, x - 1, y, 2, characterFill, characterReplace);
            if((direction != 2) && (x < base[0].length - 1)) fill = fillDirection(base, fill, x + 1, y, 3, characterFill, characterReplace);
        } else {
            var cf = fill[y].split('');
            cf[x] = 'X';
            fill[y] = cf.join('');
        }
    }
    return fill;
}
