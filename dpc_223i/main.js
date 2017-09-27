var secret1 = 'synchronized';
var secret2 = 'misfunctioned';
var secret3 = 'mispronounced';
var secret4 = 'shotgunned';
var secret5 = 'snond';
var offensive1 = 'snond';
var offensive2 = 'snond';
var offensive3 = 'snond';
var offensive4 = 'snond';
var offensive5 = 'snond';

//var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var letters = ['e','t','a','o','i','n','s','h','r','d','l','c','u','m','w','f','g','y','p','b','v','k','j','x','q','z'];

function problem(secretWord, offensiveWord) {
    var output = '';

    var secretLetters = secretWord.toLowerCase().split('');
    var offensiveLetters = offensiveWord.toLowerCase().split('');

    for(var i = 0; i < secretLetters.length; i++) {
        if(offensiveLetters.indexOf(secretLetters[i]) >= 0) {
            output = output + secretLetters[i];
        }
    }

    return output == offensiveWord;
}

function problemCount(words, offensiveWord) {
    var count = 0;
    for(var i = 0; i < words.length; i++) {
    var secretWord = words[i];
        if (secretWord.length > offensiveWord.length) {
            if ((secretWord == offensiveWord) || problem(secretWord, offensiveWord)) {
                count++;
            }
        }
    }
    return count;
}

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;

function filterListA(word) {
    var result = (word.length > 4);
    if (result) {
        var wordletters = word.split('');
        var count1 = 0;
        for (var l = 0; l < wordletters.length; l++) {
            if (wordletters[l] == letters[a]) {
                count1++;
            }
        }
        result = ((count1 > 0) && (count1 < 6));
    }
    return result;
}

function filterListB(word) {
    var result = (word.length > 4);
    if (result) {
        var wordletters = word.split('');
        var count1 = 0;
        var count2 = 0;
        for (var l = 0; l < wordletters.length; l++) {
            if (wordletters[l] == letters[a]) {
                count1++;
            }
            if (wordletters[l] == letters[b]) {
                count2++;
            }
        }
        var total = count1;
        if (letters[b] != letters[a]) total += count2;
        result = (((count1 > 0) && (count2 > 0)) && (total < 6));
    }
    return result;
}

function filterListC(word) {
    var result = (word.length > 4);
    if (result) {
        var wordletters = word.split('');
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        for (var l = 0; l < wordletters.length; l++) {
            if (wordletters[l] == letters[a]) {
                count1++;
            }
            if (wordletters[l] == letters[b]) {
                count2++;
            }
            if (wordletters[l] == letters[c]) {
                count3++;
            }
        }
        var total = count1;
        if (letters[b] != letters[a]) total += count2;
        if (letters[c] != letters[a] && letters[c] != letters[b]) total += count3;
        result = (((count1 > 0) && (count2 > 0) && (count3 > 0)) && (total < 6));
    }
    return result;
}

function filterListD(word) {
    var result = (word.length > 4);
    if (result) {
        var wordletters = word.split('');
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        var count4 = 0;
        for (var l = 0; l < wordletters.length; l++) {
            if (wordletters[l] == letters[a]) {
                count1++;
            }
            if (wordletters[l] == letters[b]) {
                count2++;
            }
            if (wordletters[l] == letters[c]) {
                count3++;
            }
            if (wordletters[l] == letters[d]) {
                count4++;
            }
        }
        var total = count1;
        if (letters[b] != letters[a]) total += count2;
        if (letters[c] != letters[a] && letters[c] != letters[b]) total += count3;
        if (letters[d] != letters[a] && letters[d] != letters[b] && letters[d] != letters[c]) total += count4;
        result = (((count1 > 0) && (count2 > 0) && (count3 > 0) && (count4 > 0)) && (total < 6));
    }
    return result;
}

function filterListE(word) {
    var result = (word.length > 4);
    if (result) {
        var wordletters = word.split('');
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        var count4 = 0;
        var count5 = 0;
        for (var l = 0; l < wordletters.length; l++) {
            if (wordletters[l] == letters[a]) {
                count1++;
            }
            if (wordletters[l] == letters[b]) {
                count2++;
            }
            if (wordletters[l] == letters[c]) {
                count3++;
            }
            if (wordletters[l] == letters[d]) {
                count4++;
            }
            if (wordletters[l] == letters[e]) {
                count5++;
            }
        }
        var total = count1;
        if (letters[b] != letters[a]) total += count2;
        if (letters[c] != letters[a] && letters[c] != letters[b]) total += count3;
        if (letters[d] != letters[a] && letters[d] != letters[b] && letters[d] != letters[c]) total += count4;
        if (letters[e] != letters[a] && letters[e] != letters[b] && letters[e] != letters[c] && letters[e] != letters[d]) total += count5;
        result = (((count1 > 0) && (count2 > 0) && (count3 > 0) && (count4 > 0) && (count5 > 0)) && (total < 6));
    }
    return result;
}

// bonusChallenge performed in 5892393ms
/*
esses :: 930
ining :: 807
snsss :: 751
riing :: 712
eeing :: 680
intin :: 652
eaing :: 600
eiing :: 583
ering :: 561
tiiti :: 541
*/

function bonusChallenge() {
    var startTime = new Date().getTime();
    var top10 = [];
    var minProblemCount = 0;
    for(a = 0; a < letters.length; a++) {
        var wordlistA = wordlist.filter(filterListA);
        //console.log('wordlistA.length = ' + wordlistA.length);
        for(b = 0; b < letters.length; b++) {
            var wordlistB = wordlistA.filter(filterListB);
            //console.log('  wordlistB.length = ' + wordlistB.length);
            for(c = 0; c < letters.length; c++) {
                var wordlistC = wordlistB.filter(filterListC);
                //console.log('    wordlistC.length = ' + wordlistC.length);
                for(d = 0; d < letters.length; d++) {
                    var wordlistD = wordlistC.filter(filterListD);
                    //console.log('      wordlistD.length = ' + wordlistD.length);
                    for(e = 0; e < letters.length; e++) {
                        var wordlistE = wordlistD.filter(filterListE);
                        //console.log('        wordlistE.length = ' + wordlistE.length);
                        var pct = letters[a] + letters[b] + letters[c] + letters[d] + letters[e];
                        var pc = problemCount(wordlistE, pct);
                        if (pc > minProblemCount) {
                            for(var i = 0; i < 10; i++) {
                                if (top10[i]) {
                                    if (pc >= top10[i].problemCount) {
                                        top10.splice(i, 0, {offensiveWord: pct, problemCount: pc});
                                        minProblemCount = top10[top10.length -1].problemCount;
                                        break;
                                    }
                                } else {
                                    top10.push({offensiveWord: pct, problemCount: pc});
                                    minProblemCount = top10[top10.length -1].problemCount;
                                }
                            }
                            if (top10.length > 10) {
                                top10 = top10.slice(0, 10);
                            }
                        }
                    }
                }
            }
        }
    }
    var output = '';
    for(var j = 0; j < top10.length; j++) {
        output += top10[j].offensiveWord + ' :: ' + top10[j].problemCount + '\n';
    }
    console.log('bonusChallenge performed in ' + (new Date().getTime() - startTime) + 'ms');
    return output;
}