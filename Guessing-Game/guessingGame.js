/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess;

var winningNumber = generateWinningNumber();

var guesses = [];

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(100 * Math.random());
}

// Fetch the Players Guess

function playersGuessSubmission(){
	playersGuess = parseInt($("input").val());
	$("input").attr("value", "");
	checkGuess();
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	return (playersGuess < winningNumber);
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if (playersGuess === winningNumber){
		$("p").text("You won!");
		gameOver();
	}
	else {
		$("p").text(guessMessage());
		guesses.push(playersGuess);
	}
}

function guessMessage(){
	if (guesses.length == 5){
		gameOver();
		return "You ran out of guesses!";
	}
	else if (guesses.indexOf(playersGuess) != -1){
		return "You already guessed that! Try a new number.";
	}
	else if (lowerOrHigher()){
		return "Too low! Guess again.";
	}
	else{
		return "Too high! Guess again.";
	}

}

function gameOver(){
	$("#submit").hide();
	$("#hint").hide();
	$("div").append("<button id='playagain'>Play again?</button>");
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	var remainingGuesses = (5 - guesses.length);
	var numHints = 2 * remainingGuesses;
	var hints = [];
	hints.push(winningNumber);
	while (numHints > 1){
		hints.push(generateWinningNumber());
		numHints--;
	}
	shuffle(hints);
	$("p").text("The winning number is one of the following: " + hints + ".");
}

//Copied this from internet!
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}




// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */
$("#submit").click(playersGuessSubmission);
$("#hint").click(provideHint);
$("input").keypress(function(event){
	if (event.keyCode == 13){
		playersGuessSubmission();
	}
});