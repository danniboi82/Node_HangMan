// Intend to make word and split and send to letter.js and repalce each letter with _ placeholder then send to hangman.js where it will be included. 
var inquirer = require('inquirer');
var word = require('./word');
var letter = require('./letter');

var game = new word();
console.log(word.game.pickedWord);


var hangMan = function(){
    this.wins = 0;
    this.losses = 0;
    this.gameOver = false;
    this.word = '';
    this.guesses = 8;
    this.initialize = function (){
        console.log('init');
        pickAword();
        updatePlaceHolder();
        this.guesses = 8;
        this.guessedLetters = [];
        this.gameOver = false;
        //function to pick a word (word.xxx.xxx)
        //function to check and update if letter is correct
    }
    this.checkEndGame = function(){
        if(placeHolder.join("") === word) {
            this.wins++;
            gameOver = true;
            return;
        }
        if (guesses <= 0){
            losses++;
            gameOver = ture;
            return;
        }
    }

    
}
//get word with placeholders from letters. 
inquirer.prompt([{
    type: "input",
    message: "What is your name?",
    name: "username"
  },
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true
  },]).then(function(event){
      console.log(event);
      if(event.confirm){
          //start the game
          //DISPLAY PICKED WORD with Placeholders 
          console.log("Hello " + event.username + " are you ready for a game of hangman??!");
          console.log("Rules : word will be picked, guess a letter then press enter to check, if correct letter will show");
          console.log("if NOT player loses life")
          //gameStart (); 
      }
      inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "letterGuess"
        }
    
      ]).then(function(userInput){
          console.log(userInput);
          //compare user guess with letters in pickedWord
          //if userInput === letter in pickedWord
          if(userInput.letterGuessed ){

          }
      })
  } );



