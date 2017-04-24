
var randomNumber = Math.floor(Math.random()*4);//generates a random number 0-1
var Solutions = ["loop","array","function","scope"];//array of possible solutions
var solutionPicked = Solutions[randomNumber];//picks solution at random from array of solutions 
document.getElementsByClassName("array").style.opacity=1;
var correct = 0;
var incorrect = 0;
var letterChoices="abcdefghijklmnopqrstuvwxyz";


var compare = function(userChoice){
	          		for(j = 0; j < solutionPicked.length; j++){
	          			var computerChoice = solutionPicked[j];
	          			if(computerChoice === userChoice){
	          				correct++;
	          				console.log("its a match")
	          				console.log(correct);
	          				if(correct===solutionPicked.length){
	          					console.log("you win!")
	          				}
	          			}
	          		}

	          }

document.onkeyup = function(event){

          var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
          for(i=0; i < letterChoices.length; i++){

	          if (userChoice === letterChoices[i]) {
	          	letter=document.getElementById(letterChoices[i]);
	          	letter.style.opacity=0;
	          	console.log("the" + " " + letterChoices[i] + " " + "key was pressed");
	          	compare(userChoice)

	          	
	          }

          }
       
      }           
