


// variable declations

var userTotal= 0;
var wins = 0;
var losses = 0;
var final = "";

var valueImg1 = 0;
var valueImg2 = 0;
var valueImg3 = 0;
var valueImg4 = 0;




$(document).ready(function() {

    // Create a Random number as target number for users to begin game
    var randomNumber = Math.floor(Math.random() * 101) + 19;

    console.log(randomNumber);

    // ... and then dump the random number into our random-number div.
    $("#numberToGuess").text(randomNumber);

    // here we create our random numbers for each crystal of 1-12..
    valueImg1 = Math.floor(Math.random() * 12) + 1;
    valueImg2 = Math.floor(Math.random() * 12) + 1;
    valueImg3 = Math.floor(Math.random() * 12) + 1;
    valueImg4 = Math.floor(Math.random() * 12) + 1;

    console.log(valueImg1);

    //appending losses and wins onto the DOM..

    $("#Wins").append(wins);
    $("#Losses").append(losses);

    //resetting our game...

 function reset() {
     randomNumber = Math.floor(Math.random() * 101) + 19;
     console.log(randomNumber);

     $("#numberToGuess").text(randomNumber);

     valueImg1 = Math.floor(Math.random() * 12) + 1;
     valueImg2 = Math.floor(Math.random() * 12) + 1;
     valueImg3 = Math.floor(Math.random() * 12) + 1;
     valueImg4 = Math.floor(Math.random() * 12) + 1;
     userTotal = 0;

     // adding our final score to final div...
     $("#Final-Score").text(final);
 }


    //setting up the on-click command for crystals
    $('#images1').on ('click', function() {
        userTotal = userTotal + valueImg1;
        console.log("Final-Score= " + userTotal);
        $('#Final-Score').text(userTotal);
        if(userTotal === randomNumber){
            wins++;
            $("#Wins").text(wins);
            alert("Congrats! Target Score Met");
            reset();
        }
        else if(userTotal > randomNumber){
            losses++;
            $("#Losses").text(losses);
            alert("Try Again");
            reset();
        }

    });

    $('#images2').on ('click', function() {
        userTotal = userTotal + valueImg2;
        console.log("Final-Score= " + userTotal);
        $('#Final-Score').text(userTotal);
        if(userTotal === randomNumber){
            wins++;
            $("#Wins").text(wins);
            alert("Congrats! Target Score Met");
            reset();
        }
        else if(userTotal > randomNumber){
            losses++;
            $("#Losses").text(losses);
            alert("Try Again");
            reset();
        }

    });

    $('#images3').on ('click', function() {
        userTotal = userTotal + valueImg3;
        console.log("Final-Score= " + userTotal);
        $('#Final-Score').text(userTotal);
        if(userTotal === randomNumber){
            wins++;
            $("#Wins").text(wins);
            alert("Congrats! Target Score Met");
            reset();
        }
        else if(userTotal > randomNumber){
            losses++;
            $("#Losses").text(losses);
            alert("Try Again");
            reset();
        }

    });

    $('#images4').on ('click', function() {
        userTotal = userTotal + valueImg4;
        console.log("Final-Score= " + userTotal);
        $('#Final-Score').text(userTotal);
        if(userTotal === randomNumber){
            wins++;
            $("#Wins").text(wins);
            alert("Congrats! Target Score Met");
            reset();
        }
        else if(userTotal > randomNumber){
            losses++;
            $("#Losses").text(losses);
            alert("Try Again");
            reset();
        }

    });


 });

