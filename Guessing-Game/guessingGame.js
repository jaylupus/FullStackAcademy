/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess;

var winningNumber = generateWinningNumber();

var guesses = [];

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	// add code here
	return Math.floor(100 * Math.random());
}

// Fetch the Players Guess

function playersGuessSubmission(){
	// add code here
	playersGuess = parseInt($("#guess").val());
	$("#guess").attr("value", "");
	checkGuess();
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
	return (playersGuess < winningNumber);
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
	if (playersGuess === winningNumber){
		$("body").append("<p>You won!</p>");
	}
	else {
		$("p").text(guessMessage());
		guesses.push(playersGuess);
	}
}

function guessMessage(){
	if (guesses.indexOf(playersGuess) != -1){
		return "You already guessed that!";
	}
	else if (lowerOrHigher()){
		return "Too low!";
	}
	else{
		return "Too high!";
	}

}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */
$("button").click(playersGuessSubmission);