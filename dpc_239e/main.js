var challenge1 = 31337357;

function solve(input) {
    return iterate(input, "");
}

function iterate(input, output){
    var r = input % 3;
    if(input == 1) {
        output += input + '\n';
    } else {
        switch(r) {
            case 0:
                output = iterate(input / 3, output + (input + ' 0\n'));
                break;
            case 1:
                output = iterate((input - 1) / 3, output + (input + ' -1\n'));
                break;
            case 2:
                output = iterate((input + 1) / 3, output + (input + ' +1\n'));
                break;
        }
    }
    return output;
}