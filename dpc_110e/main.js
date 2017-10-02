var challenge1 = 'Jr;;p ept;f';
var challenge2 = 'Lmiyj od ,u jrtp';

var shifted = 'snvfrghjokl;,mp[wtdyibecuxSNVFRGHJOKL:<MP{WTDYIBECUX';
var regular = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function keyboard_shift(text) {
    var output = '';
    
    for(var i = 0; i < text.length; i++) {
        var c = text.charAt(i);
        if(shifted.indexOf(c) >= 0) {
            output += regular[shifted.indexOf(c)];
        } else {
            output += c;
        }
    }
    
    return output;
}