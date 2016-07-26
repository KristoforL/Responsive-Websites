$(document).ready(function(){

// On click this method will occur
$(".movies").click(function(){

// This is a variable to hold the test link to make sure the data is being retrieved
	var movieAPI = ("http://omdbapi.com/?s=Rugrats&r=json;");


	// getJSON is a function that will get the data of a API call to data and store that data in the array variable I have set
		$.getJSON( movieAPI, function( data ) {
		  var items = [];

		  // for each item this will get the title and year and push them into the array
		  $.each( data, function( title, year ) {
		    items.push( "<li id='" + title + "'>" + year + "</li>" );
		  });
		 
		 // In the div that has the class displayMovies it will join and display the data of the objects
		  $( "<div/>", {
		    "class": "displayMovies",
		    html: items.join( "" )
		  }).appendTo( ".displayMovies" );
		});

    });

});

// Supposed to display the menu when clicked
$(".nav-icon").click($(".mobile").css("display","block"));



$(window).on("click", function(){
	$(".mobile").css("display","none");
});



// Sets a global variable to set the score in the html equal to the counter
var score = 0

// Funciton that if the correct radio button is clicked your score will go up
if($(".correct").click(function(){
	score++;
}))

// This submit button displays the score and alerts the user what their score is with some advice on what to do.
$(".submit").click(function(){

	// Sets the score equal to score two
	var score2 = score

	//Compares the score and depending on the score alerts the appropriate response
	if(score2 <= 5){
		alert("You might need to brush up on your studying with " + score2 + " as your score :(");
	}
	else if(score2 > 5 && score2 <= 7){
	alert("You score is " + score2 + ". You passed but you could do better.");
	}	
	else if(score2 > 7 && score2 <= 9) {
	alert("You score is " + score2 + ". You passed but you could do better.");
	}
	else {
	alert("You score is " + score2 + "! ^.^ You have a perfect score!");
	}

	// Displays the hidden div and changes the text to the score
	$(".Score").text("Score: " + score2);
	$(".Score").css("display", "inline");	
})












































