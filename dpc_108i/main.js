var challenge1 = [15, 15, 20];
var challenge2 = [8, 8, 8];
var challenge3 = [12, 12, 140];
var challenge4 = [20, 20, 100];

function generateGameData(data, row, col) {
    var gameData = generate(data);
    while(gameData[row].charAt(col) != 0) {
        gameData = generate(data);
    }
    return gameData;
}

function generate(data) {
    var rows = data[0];
    var cols = data[1];
    var mines = data[2];
    var cd = [];
    for(var r1 = 0; r1 < rows; r1++) {
        var rd = '';
        for(var c1 = 0; c1 < cols; c1++) {
            rd += ' ';
        }
        cd.push(rd);
    }
    
    var r = Math.floor(Math.random() * rows);
    var c = Math.floor(Math.random() * cols);
    for(var m = 0; m < mines; m++) {
        while(cd[r].charAt(c) != ' ') {
            r = Math.floor(Math.random() * rows);
            c = Math.floor(Math.random() * cols);
        }
        cd[r] = cd[r].substr(0, c) + '✷' + cd[r].substr(c + 1);
    }
    
    for(var r2 = 0; r2 < rows; r2++) {
        var indexUp = r2 - 1;
        var indexDown = r2 + 1;        
        if (r2 == 0) {
            indexUp = -1;
        } else if (r2 == cd.length - 1) {
            indexDown = -1;
        }
        for(var c2 = 0; c2 < cols; c2++) {
            if (cd[r2].charAt(c2) != '✷') {
                var indexRight = c2 + 1;
                var indexLeft = c2 - 1;
                if (c2 == 0) {
                    indexLeft = -1;
                } else if (c2 == cd[r2].split('').length - 1) {
                    indexRight = -1;
                }

                // n1 n2 n3
                // n4 rc n5
                // n6 n7 n8

                var m1 = (indexUp >= 0 && indexLeft >= 0 && cd[indexUp].split('')[indexLeft] == '✷') ? true : false;
                var m2 = (indexUp >= 0 && cd[indexUp].split('')[c2] == '✷') ? true : false;
                var m3 = (indexUp >= 0 && indexRight >= 0 && cd[indexUp].split('')[indexRight] == '✷') ? true : false;
                var m4 = (indexLeft >= 0 && cd[r2].split('')[indexLeft] == '✷') ? true : false;
                var m5 = (indexRight >= 0 && cd[r2].split('')[indexRight] == '✷') ? true : false;
                var m6 = (indexDown >= 0 && indexLeft >= 0  && cd[indexDown].split('')[indexLeft] == '✷') ? true : false;
                var m7 = (indexDown >= 0 && cd[indexDown].split('')[c2] == '✷') ? true : false;
                var m8 = (indexDown >= 0 && indexRight >= 0 && cd[indexDown].split('')[indexRight] == '✷') ? true : false;

                var neighbors = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8;

                cd[r2] = cd[r2].substr(0, c2) + neighbors + cd[r2].substr(c2 + 1);
            }
        }
    }
    
    return cd;
}

function render(targetId, data) {
    var target = document.getElementById(targetId);
    data = data.concat();
    for(var i = 0; i < data.length; i++) {
        data[i] = data[i].split('').join(' ');
    }
    target.textContent = data.join('\n');
}