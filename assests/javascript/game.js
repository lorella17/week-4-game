// here we ask user for his/her name
var userName = prompt("What is your name?");


//$(".container").text(RandomNumber);

var crystals = $("#images");
var Wins = 0;
var Losses = 0;
var Final = "";
var counter = 0;




$(document).ready(function() {

    // Create a string which will hold the lottery number
    var RandomNumber = Math.floor(Math.random() * 120) + 19;

    console.log(RandomNumber);

    // ... and then dump the random number into our random-number div.
    $("#numberToGuess").text(RandomNumber);


});

