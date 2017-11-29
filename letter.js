console.log("letter");
var word = require('./word');
//Letter: Used for each letter in the current word. 
//Each letter object should either display an underlying character, 
//or a blank placeholder (such as an underscore), 
//depending on whether or not the user has guessed the letter. 
//This should contain letter specific logic and data.
// var game = new word(word.numSpace);
//Use this section to replace each letter of the word with a _ placeholder
var letters = function(letter){
    this.placeHolder =[];
    this.updatePlaceHolder = function(letter){
        if(letter){
            for(var i = 0; i < word.length; i++){
                if(word[i] ===letter){
                    placeHolder[i] = word[i];
                }
            }
        }else{
            placeHolder = [];
            for(var i = 0; i < word.length; i++) {
                placeHolder.push('_');
            }
        }
        console.log(placeHolder.join(''));
    } 
}

module.exports = {letters : letters}
