
var runProgram = $(document).ready(function(){
	//generates random number 1-12
	var randomNumber = Math.floor(Math.random()*12);
	//stores possible solutions
	var wordBank = ["scope","html","python","api","keyword","vest","answer","list","forget","patrick","laser","string","dog","cat"];
	//picks a solution to solve for from word bank
	var solutionPicked = wordBank[randomNumber]; 
	console.log(solutionPicked);
	//sets number of correct guesses to 0
	var correct = 0;
	//sets number of incorrect guesses to 0
	var incorrect = 0;
	//stores possible letter choices
	var letterChoices="abcdefghijklmnopqrstuvwxyz";
	//stores letters the user has already picked
	var letterGraveyard=[];
	//stores the placeholders for the solution picked
	var placeholders = []
	//canvas setup
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	//draws floor
	context.beginPath();
	context.moveTo(0,280);
	context.lineTo(300,280);
	context.closePath();
	context.lineWidth = 10;
	context.stroke();
	//draws vertical post
	context.beginPath();
	context.moveTo(10,280);
	context.lineTo(10,0);
	context.closePath();
	context.lineWidth = 10;
	context.stroke();
	//draws horizontal beam
	context.beginPath();
	context.moveTo(10,5);
	context.lineTo(205,5);
	context.closePath();
	context.lineWidth = 10;
	context.stroke();
	//draws top diagonal beam
	context.beginPath();
	context.moveTo(50,0);
	context.lineTo(10,50);
	context.closePath();
	context.lineWidth = 10;
	context.stroke();
	//draws noose
	context.beginPath();
	context.moveTo(200,5);
	context.lineTo(200,50);
	context.closePath();
	context.lineWidth = 10;
	context.stroke();

	//puts placholders on DOM
	for(i=0;i<solutionPicked.length;i++){
		$("#solution").append("<div class = solution_letters id="+i+">"+"</div>");
		if(solutionPicked.indexOf(placeholders) < solutionPicked.length){
			placeholders.push("_");
			$("#"+i).append(placeholders[i]);

		}//end of placeholder statement
	}//end of loop
	//keystroke function
	document.onkeyup = function(event){
		//defines user input on keyboard
		var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
		//changes opacity of letter box to 0
		document.getElementById(userChoice).style.opacity=0;
		//pushes user choice to letter graveyard
		letterGraveyard.push(userChoice);
		console.log(letterGraveyard);



		if(solutionPicked.indexOf(userChoice)>-1){//checks if user choice matches computer choice
			correct++;
			$("#"+solutionPicked.indexOf(userChoice)).html(userChoice);
			console.log(correct);	
		}
		if(solutionPicked.indexOf(userChoice)<0){// checks if user choice does not match computer choice
			incorrect++;
			
			if(incorrect>=1){
		//draws head
		context.beginPath();
		context.arc(200, 85, 30, 0, 2*Math.PI);
		context.closePath();
		context.lineWidth = 2;
		context.stroke();
		}
		if(incorrect>=2){
		//draws body
		context.beginPath();
		context.moveTo(200,115);
		context.lineTo(200,200);
		context.closePath();
		context.lineWidth = 2;
		context.stroke();
		}
		if(incorrect>=3){
		//draws left arm
		context.beginPath();
		context.moveTo(200,140);
		context.lineTo(140,140);
		context.closePath();
		context.lineWidth = 2;
		context.stroke();
		}
		if(incorrect>=4){
		//draws right arm
		context.beginPath();
		context.moveTo(200,140);
		context.lineTo(260,140);
		context.closePath();
		context.lineWidth = 2;
		context.stroke();
		}
		if(incorrect>=5){
		//draws left leg
		context.beginPath();
		context.moveTo(200,200);
		context.lineTo(150,250);
		context.closePath();
		context.lineWidth = 2;
		context.stroke();
		}
		if(incorrect>=6){
		//draws right leg
		context.beginPath();
		context.moveTo(200,200);
		context.lineTo(250,250);
		context.closePath();
		context.lineWidth = 2;
		context.stroke();
		}
			console.log(incorrect);
		}
		if(correct >= solutionPicked.length){
			
			console.log("You Won!");
			location.reload();
		}
		if(incorrect >= 6){
			
			console.log("You lose!");
			location.reload();
		}
	
	}

}); //end of runProgram loading..       
