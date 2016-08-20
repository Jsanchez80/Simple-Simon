'use strict'
														// This sequence will produce a random number between 1 and 4 random number generator was grabbed at 
														//http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
var sequence = Math.floor(Math.random() * 4) + 1
var sequenceArray = [];  								// pushes(adds) additional number to an array for the var sequence
	$("#power").click(function(){							// starts the game and randomizes the first number in the array
 		sequence = Math.floor(Math.random() * 4) + 1;
 		sequenceArray.push(sequence);
 		$("#power" ).click(function() {  

// switch (secondSequence)
// The switch statement allows us to take the value of the random number represented by firstSequence
// and add produce a value color as defined by the case #. The case number correlates with the
// designated button value in html.
switch (sequence) {
	case 1:
		$("#btn1").fadeTo("slow", 1, function(){
			$("#btn1").fadeTo(function(){
 				$(".red").css("opacity", ".5");
 		console.log(sequenceArray);
		console.log("I'm red.");
		break;
		});
	});

	case 2:
		$("#btn2").fadeTo("slow", 1, function(){
			$("#btn2").fadeTo(function(){
 				$("#.green").css("opacity", ".5");
 		console.log(sequenceArray);
		console.log("I'm green.");
		break;
		});
	});

	case 3:
		$("#btn3").fadeTo("slow", 1, function(){
			$("#btn3").fadeTo(function(){
 				$(".blue").css("opacity", ".5");
 		console.log(sequenceArray);
		console.log("I'm blue.");
		break;
		});
	});

	case 4:
		$("#btn4").fadeTo("slow", 1, function(){
			$("#btn4").fadeTo(function(){
 				$(".yellow").css("opacity", ".5");
 		console.log(sequenceArray);
		console.log("I'm yellow");
		break;
		});
	});
};
		

	

		




// My original thought was create an order that would be repeated and stepped up, but that idea proved to be false. 
// what I thought was working merely generating four numbers and the code would execute, but falling through my 
// switch statement only to log a four number sequence.  
// SCRAP THIS! IT WAS GOOD THOUGHT PROCESS TO GET THE JUICES FLOWING BUT WON'T WORK!!!

// function startNext(){
// 	var secondSequence = document.getElementById("button");
// 		if (firstSequence == firstSequence) {
// 			return startNext
// 		} else {
// 			alert("Game Over! Try Again!")
// 	}
// }

// ////// Trying to figure out the add the event listener///////
// var round2 = document.getElementById(" ");
// 	// startNext.addEventListener("click", startNext, false);

// // var startNextSequence = 
// console.log(firstSequence)

// 	var secondSequence = Math.floor(Math.random() * 4) + 1 
// 		// secondSequence = ['',''];   This isn't working, it's just generating a second number
// 		// as the operation continues down the execution. 
// 		// secondSequence = secondSequence.push(firstSequence);

	  

// switch (secondSequence) {
// 	case 1:
// 		console.log("I'm red.");
// 		break;
// 	case 2:
// 		console.log("I'm green.");
// 		break;
// 	case 3:
// 		console.log("I'm blue.");
// 		break;
// 	case 4:
// 		console.log("I'm yellow");
// 		break;

// } console.log(secondSequence);

//    var thirdSequence = Math.floor(Math.random() * 4) + 1 
//    var thirdSequence = Math.floor(Math.random() * 4) + 1 
// 		thirdSequence = ['',''];
// 		thirdSequence = thirdSequence.push(firstSequence, secondSequence);

// switch (thirdSequence) {
// 	case 1:
// 		console.log("I'm red.");
// 		break;
// 	case 2:
// 		console.log("I'm green.");
// 		break;
// 	case 3:
// 		console.log("I'm blue.");
// 		break;
// 	case 4:
// 		console.log("I'm yellow");
// 		break;

// }  console.log(thirdSequence)
// // I thought [console.log(firstSequence && secondSequence && thirdSequence && fourthSequence) ] this would print 1, 2 and 3 sequences into the console log. it doesn't,
// // I'll have to figure out another way to get the desired result console.log(firstSequence && secondSequence && thirdSequence)

// var fourthSequence = Math.floor(Math.random() * 4) + 1 
// // console.log(fourthSequence)

// switch (fourthSequence) {
// 	case 1:
// 		console.log("I'm red.");
// 		break;
// 	case 2:
// 		console.log("I'm green.");
// 		break;
// 	case 3:
// 		console.log("I'm blue.");
// 		break;
// 	case 4:
// 		console.log("I'm yellow");
// 		break;

// } console.log(fourthSequence)
// // console.log(firstSequence && secondSequence && thirdSequence && fourthSequence) 





