var letter = require('./letter');
console.log('word');
//Word: Use to create an object representing the current word the user is attempting to guess. 
//This should contain word specific logic and data.
//create word and replace letters with placeholder "_"

//Use this section to pick out a random word from list of words to guess
var blanksAndSuccesses = [];
var word = function() {
    this.wordList = ["trump", "fake news", "orangutan"];
    this.pickedWord = this.wordList[Math.floor(Math.random()* this.wordList.length)];
    this.lettersInWord = this.pickedWord.split('');
    this.numSpace = this.lettersInWord.length;
    this.blanksAndSuccesses = function() {
        for(var i = 0; i < this.lettersInWord.length; i++){
            this.blanksAndSuccesses.push("_");
        }
    };
    
}

var game = new word();
console.log(game.pickedWord);
console.log(game.lettersInWord);
console.log(game.lettersInWord.length);
console.log(game.blanksAndSuccesses);
module.exports = {word : word}


// var wordList = ["trump", "fake news", "orangutan"];
// var pickedWord = wordList[Math.floor(Math.random()* wordList.length)];
// console.log(pickedWord);
