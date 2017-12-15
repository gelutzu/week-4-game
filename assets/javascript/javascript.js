$(document).ready( function() {

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var targetNumber = getRandomNumber(18, 120);
console.log(targetNumber);
$("#number-to-guess").text(targetNumber);
var randomNumber1 = getRandomNumber(1,12);
var randomNumber2 = getRandomNumber(1,12);
var randomNumber3 = getRandomNumber(1,12);
var randomNumber4 = getRandomNumber(1,12);

console.log(randomNumber1);
console.log(randomNumber2);
console.log(randomNumber3);
console.log(randomNumber4);

var sum= 0; 
var wins= 0;
var losses = 0;
// wins and losses counter
$("#numberWins").text(wins);
$("#numberLosses").text(losses);

//reset function
function reset() {
    targetNumber = getRandomNumber(18, 120);
    $("#number-to-guess").text(targetNumber);
    console.log(targetNumber);
    randomNumber1 = getRandomNumber(1,12);
    randomNumber2 = getRandomNumber(1,12);
    randomNumber3 = getRandomNumber(1,12);
    randomNumber4 = getRandomNumber(1,12);
    console.log(randomNumber1);
    console.log(randomNumber2);
    console.log(randomNumber3);
    console.log(randomNumber4);

    sum = 0;
    $("#finalSum").text(sum);
} 
//create function win to keep track of wins
function win() {
    alert("You won!");
    wins++; 
    $("#numberWins").text(wins);
    reset();
}
//create function lose to keep track of losses
function lose() {
    alert ("You lose!");
    losses++;
    $("#numberLosses").text(losses);
    reset();
}
//click function for crystal1
$("#crystal1").on("click", function() {
    sum += randomNumber1;
    
    $("#finalSum").text(sum); 
    console.log(sum);
    if (sum == targetNumber) { 
        win();
     }
    else if ( sum > targetNumber) {
         lose();
     }   
});  
$("#crystal2").on ("click", function() {
    sum += randomNumber2;
  
    $("#finalSum").text(sum); 
    console.log(sum);
    if (sum == targetNumber) {
        win();
    }
    else if ( sum > targetNumber){
        lose();
    }   
});  
$("#crystal3").on("click", function() {
    sum += randomNumber3;
 
    $("#finalSum").text(sum);
    console.log(sum);
    if (sum == targetNumber) {
        win();
    }
    else if ( sum > targetNumber) {
        lose();
    }   
});  
$("#crystal4").on("click", function() {
    sum = sum + randomNumber4;
  
    $("#finalSum").text(sum);
    console.log(sum);
    if (sum == targetNumber) {
        win();
    }
    else if ( sum > targetNumber) {
        lose();
    }   
});  
}); 

