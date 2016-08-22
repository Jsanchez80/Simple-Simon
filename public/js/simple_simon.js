'use strict'

// sequence will produce a random number between 1 and 4 random number 
// generator 

// nextSequence will allows us to add the next sequence of events to our already generated
//random number and append future events until sequence is broken.



var sequence = Math.floor(Math.random() * 4) + 1
	var nextSequence = [];
	// nextSequence.push(sequence);
console.log(sequence)

	
	

	// console.log(nextSequence)

//  //  //  //  //  //  //  //  //  // // // //  // //  //  //  // // // // // // // // // // 
//  var blink allows us to add a blinker feature to the game
//  this feature allows users to view the button they are going to select

var blink = function (button, blink) {	
		$(button).animate({
			opacity: 1
		}, blink).animate({
			opacity: .25
		}, blink);
	};
	console.log("blinky")
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 	
// var level gives us the number generated by the variable sequence and plugs it into 
// the html buttons using the numeric value of that button and giving us a color
// that is designated by the console.log. 

// The switch statement allows us to take the value of the random number represented by sequence
// // and add/produce a value color as defined by the case #. The case number correlates with the
// // designated button value in html.

var level = 0;
var buttonSelect = function(nextSequence) {
	setTimeout(function() {

	switch (sequence) {
		case 1:
			blink("#button1", 500);
	 		console.log(sequence);
			console.log("I'm red.");
			break;

		case 2:
			blink("#button2", 500);
	 		console.log(sequence);
			console.log("I'm green.");
			break;
		

		case 3:		
			blink("#button3", 500);
	 		console.log(sequence);
			console.log("I'm blue.");
			break;

		case 4:
			blink("#button4", 500);
	 		console.log(sequence);
			console.log("I'm yellow");
			break;		

	};
// // // // // // // / // // // // // // // // // // // // // // // // // // / // // // // //
// keeps track of what level you're  in and sequences
	level++;
		if (level < nextSequence.length) {
			buttonSelect(nextSequence);
		} else {
			buttonClicked();
		};
	}, 500);
};
	console.log("loop generating")
// // // // // // // / // // // // // // // // // // // // // // // // // // / // // // // //
// players selection of button via the click feature

var buttonClicked = function() {
		$(".color").on("click", function(){
			var buttonValue = parseInt($(this).attr("value"));
			var buttonChange = "value" + $(this).attr("id");
			blink(buttonChange, 100);
			$(".color").off("click");
			buttonCheck(buttonValue);
			console.log("button clicked worked")

		});
	};
// // // // // // // / // // // // // // // // // // // // // // // // // // / // // // // //
// LEVEL UP SEQUENCE: adds new sequences to the level you're on and 

var variousSequence = function (event) {
	sequence = Math.floor(Math.random() * 4) + 1; 
	console.log("this is sequence" + variousSequence);
	nextSequence.push(sequence);
	console.log(nextSequence);
	buttonSelect(nextSequence);
};

$("#power").on("click", function(){
	variousSequence();
	$('#power').off('click');

});
	

// // // // // // // / // // // // // // // // // // // // // // // // // // / // // // // //
// keeps track of your count and determines what your next move should be
 
var count = 0;
	var buttonCheck = function(buttonClicked){
		if (buttonClicked === nextSequence[count++]) { //adding the ++ to [count] gave m an additional 2 moves
			count++;
			console.log("correct")
			if (count < nextSequence.length) {
				// buttonClicked();
			} else {
				level = 0;
				count = 0;
				variousSequence();
			};
		} else {
			alert("try again")
			setTimeout(function(){
				location.reload();
			}, 500);
		};
	};
		console.log("bingo!")
