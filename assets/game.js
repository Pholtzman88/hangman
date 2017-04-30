
var runProgram = $(document).ready(function(){
	//generates random number 1-12

	var wordBank = ["hawk","bluejay","grackle","parrot","swallow","buzzard","finch","crow","robin","eagle"];
	//picks a solution to solve for from word bank
	var solutionPicked = wordBank[Math.floor(Math.random()*wordBank.length)]; 
	console.log(solutionPicked);
	//creates id for css
	var divId = "blanks";
	var blanks = [];
	//sets number of correct guesses to 0
	var correct = 0;
	//sets number of incorrect guesses to 0
	var incorrect = 0;
	//stores possible letter choices
	var letterChoices="abcdefghijklmnopqrstuvwxyz";
	//stores guesses made
	var letterGraveyard = [];
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

	blanks = solutionPicked.split("").map(function(){return " "+"_"+" "});
	$("#solution").append("<div id="+divId+">"+blanks+"</div>");
	//keystroke function
	document.onkeyup = function(event){
		//defines user input on keyboard
		 var guess = String.fromCharCode(event.keyCode).toLowerCase();
		
		 if(letterGraveyard.indexOf(guess)<0){
		 	 if(guess){
			 	letterGraveyard.push(guess)
			 	console.log(letterGraveyard)
			 }
			//changes opacity of letter box to 0
			document.getElementById(guess).style.opacity=0;
			//scoop
			var index = solutionPicked.indexOf(guess);

			while(index > -1){
				blanks[index] = guess;
				var index = solutionPicked.indexOf(guess, index +1)
				correct++;
				$("#blanks").html(blanks)
				if(correct===solutionPicked.length){
					location.reload()
				}

			}
			if(solutionPicked.indexOf(guess)<0){// checks if user choice does not match computer choice
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
			if(incorrect >= 6){
				
				alert("You lose! The correct anser was"+ " "+ solutionPicked);
				location.reload();
			}
				console.log(incorrect);
			}
		}
	}

}); //end of runProgram loading..       
