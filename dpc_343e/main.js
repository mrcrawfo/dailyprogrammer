var challengeScale1 = "C";
var challengeNote1 = "Do";
var challengeScale2 = "C";
var challengeNote2 = "Re";
var challengeScale3 = "C";
var challengeNote3 = "Mi";
var challengeScale4 = "D";
var challengeNote4 = "Mi";
var challengeScale5 = "A#";
var challengeNote5 = "Fa";

var chromatic = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var majorScale = [0, 2, 4, 5, 7, 9, 11];
var majorNames = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];

function getNote(scale, note) {
    return chromatic[(chromatic.indexOf(scale) + majorScale[majorNames.indexOf(note)]) % chromatic.length];
}