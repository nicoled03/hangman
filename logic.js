var animalsList = ["elephant", "giraffe", "rhino"];

var chosenWord = '';

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksaAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = '';


var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;










function startGame() {
	
	numGuesses = 9;

	chosenWord = animalsList[Math.floor(Math.random() * animalsList.length)];

	lettersInChosenWord = chosenWord.split("");

	numBlanks = lettersInChosenWord.length;

	console.log(chosenWord);

}