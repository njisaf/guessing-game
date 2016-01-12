function myFunction() {

var correctAnswer = 0

// Question One //

var questionOne = prompt("What is my favorite color? Can you guess it?").toUpperCase();
if (questionOne === "BLUE") {
  correctAnswer++;
  alert("That's right! You have correctly guessed " + correctAnswer + " out of 5.");
} else {
  alert("Uh oh, that's wrong. You have correctly guessed " + correctAnswer + " out of 5.");
}

// Question Two //

var questionTwo = prompt("I cannot concentrate. I am thinking of a large, dangerous African mammal for no reason at all. What is it?").toUpperCase();
if (questionTwo === "HIPPO" || questionTwo === "HIPPOPOTAMUS") {
  correctAnswer++;
  alert("That's right! You have correctly guessed " + correctAnswer + " out of 5.");
} else {
  alert("Uh oh, that's wrong. You have correctly guessed " + correctAnswer + " out of 5.");
}

// Question Three //

var questionThree = prompt("Two of my favorite foods are chocolate and cream. I am thinking of a delicious pastry that uses both chocolate and cream. What is it?").toUpperCase();
if (questionThree === "ECLAIR") {
  correctAnswer++;
  alert("That's right! You have correctly guessed " + correctAnswer + " out of 5.");
} else {
  alert("Uh oh, that's wrong. You have correctly guessed " + correctAnswer + " out of 5.");
}

// Question Four //

var questionFour = parseInt(prompt("I am thinking of a number between 1 and 10. What is it? Enter a numberical value between 1 and 10."));
if (questionFour === 5) {
  correctAnswer++;
  alert("That's right, I was thinking of 5! You have correctly guessed " + correctAnswer + " out of 5.");
} else if (questionFour <= 4) {
  alert("Too bad, you guessed too low! You have correctly guessed " + correctAnswer + " out of 5.");
} else if (questionFour >= 6) {
  alert("Too bad, you guessed too high! You have correctly guessed " + correctAnswer + " out of 5.");
} else {
  alert("You can't follow instructions, so no points for you! You have correctly guessed " + correctAnswer + " out of 5.");
 }

// Question Five

  var questionFive = parseInt(prompt("How many countries have I visited? The answer is between 0 and 100."));
  while (questionFive !== 0) {
      if (questionFive >= 1 && questionFive < 5) {
      questionFive = parseInt(prompt("You're very close now! Go a bit lower. Try again!")); // Thanks to Tayler for giving this prompt hint.
    } else if (questionFive >= 5 && questionFive < 10) {
      questionFive = parseInt(prompt("Not quite! Go lower. Try again!"));
    } else if (questionFive >= 10 && questionFive < 25) {
      questionFive = parseInt(prompt("That's a bit high. The answer is lower. Try again!"));
    } else if (questionFive >= 25 && questionFive < 50) {
      questionFive = parseInt(prompt("That's pretty high. Guess a lower number. Try again!"));
    } else if (questionFive >= 50 && questionFive < 75) {
      questionFive = parseInt(prompt("That's really high. Guess a number that is a lot lower. Try again!"));
    } else if (questionFive >= 75 && questionFive <= 100) {
      questionFive = parseInt(prompt("That's way too high! Go much lower. Try again!"));
    } else {
      questionFive = parseInt(prompt("That's not a valid answer. Are you playing seriously? Enter a number between 0 and 100. Try again!"));
    }
  } alert("That's correct! The answer is zero nations. I do not give any credence to the bougeoise concept of the nation state.\n\nThe blood of all humans runs RED, like the RED of the flag of the Socialist International, which gives hope to all the working class.\n\nDown with the employers! To the barricades! Vive la Revolution! #Nader2016");
  correctAnswer++; // Thanks to David for showing my how while loops work


// Change the messages on the page //

var endMessage = "You've finished the Guessing Game!";
var playMessage = "Click the button to play the Guessing Game again.";
var numberCorrect = correctAnswer;

var elMessage = document.getElementById('endMessage');
elMessage.textContent = endMessage;

var elPlay = document.getElementById('playMessage');
elPlay.textContent = playMessage

var elCorrect = document.getElementById('numberCorrect')
elCorrect.textContent = numberCorrect

}
