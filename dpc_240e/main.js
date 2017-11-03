var challenge1 = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place. The rest can be a total mess and you can still read it without a problem. This is because the human mind does not read every letter by itself, but the word as a whole. Such a condition is appropriately called Typoglycemia.";
var challenge2 = "Call me Ishmael. Some years ago — never mind how long precisely — having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen, and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off — then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.";
var challenge3 = "In the late summer of that year we lived in a house in a village that looked across the river and the plain to the mountains. In the bed of the river there were pebbles and boulders, dry and white in the sun, and the water was clear and swiftly moving and blue in the channels. Troops went by the house and down the road and the dust they raised powdered the leaves of the trees. The trunks of the trees too were dusty and the leaves fell early that year and we saw the troops marching along the road and the dust rising and leaves, stirred by the breeze, falling and the soldiers marching and afterward the road bare and white except for the leaves.";
var challenge4 = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way — in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.";
var challenge5 = "The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.";
var challenge6 = "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.";
var challenge7 = "Dark spruce forest frowned on either side of the frozen waterway. The trees had been stripped by a recent wind of their white covering of frost, and they seemed to lean toward each other, black and ominous, in the fading light. A vast silence reigned over the land. The land itself was a desolation, lifeless, without movement, so lone and cold that the spirit of it was not even that of sadness. There was a hint in it of laughter, but of a laughter more terrible than any sadness — a laughter that was mirthless as the smile of the Sphinx, a laughter cold as the frost and partaking of the grimness of infallibility. It was the masterful and incommunicable wisdom of eternity laughing at the futility of life and the effort of life. It was the Wild, the savage, frozen-hearted Northland Wild.";
var challenge8 = "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was lying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his dome-like brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes.";

function scrambleParagraph(input) {
    var output = "";
    var words = input.split(' ');
    
    for(var i = 0; i < words.length; i++) {
        if (output != "") {
            output += " ";
        }
        output += scrambleWord(words[i]);
    }
    
    return output;
}

function scrambleWord(input) {
    var output = input;
    if (input.length > 3) {
        var firstCharacter = input.substr(0, 1);
        var lastCharacter = input.substr(input.length - 1, 1);
        var middleCharacters = input.substr(1, input.length - 2);
        var punctuationCharacter = "";
        if (lastCharacter == "," || lastCharacter == "." || lastCharacter == "!" || lastCharacter == "?") {
            punctuationCharacter = input.substr(input.length - 1, 1);
            lastCharacter = input.substr(input.length - 2, 1);
            middleCharacters = input.substr(1, input.length - 3);
        }
        // exclude words with uppercase first letters to keep proper nouns intact as they are more likely to be unfamiliar words specific to a given text (Ishmael, Gregor Samsa, etc.)
        if (firstCharacter.toUpperCase() != firstCharacter && middleCharacters.length > 1) {
            var scrambledCharacters = "";
            while(middleCharacters.length > 0) {
                var index = Math.floor(Math.random() * middleCharacters.length);
                scrambledCharacters += middleCharacters.charAt(index);
                middleCharacters = middleCharacters.slice(0, index) + middleCharacters.slice(index + 1);
            }
            output = firstCharacter + scrambledCharacters + lastCharacter + punctuationCharacter;
        }
    }
    return output;
}