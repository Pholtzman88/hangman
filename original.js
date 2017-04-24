


var randomNumber = Math.floor(Math.random()*2);//generates a random number 1-6
var Solutions = [["l","o","o","p"],["a","r","r","a","y"]];//array of possible solutions
var solutionPicked = Solutions[randomNumber];//picks solution at random from array of solutions 
var correct = 0;
var incorrect = 0;
var runGame = (correct >= solutionPicked.length || incorrect < 3);

function displayGame(){
	
}


	document.onkeyup = function(event){

		var userGuess = solutionPicked.indexOf(event.key)

	if (runGame) {
		

		if (userGuess === solutionPicked[0]){

			correct++;
		}
		if (userGuess === solutionPicked[1]){
			
			correct++;
		}
		if (userGuess === solutionPicked[2]){
			
			correct++;
		}
		if (userGuess === solutionPicked[3]){
			
			correct++;
		}
		if (userGuess === solutionPicked[4]){
			
			correct++;
		}
		if (userGuess !== solutionPicked[0]&&solutionPicked[1]&&solutionPicked[2]&&solutionPicked[3]&&solutionPicked[4]) {
			incorrect++;
		}
	}
}
	
console.log(solutionPicked);
console.log(solutionPicked.length);
console.log(incorrect);
console.log(correct);



