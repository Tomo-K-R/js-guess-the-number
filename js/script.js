var response = document.querySelector(".response");
var showGuess = document.querySelector(".show-guess");
var name = prompt("What is your name?");
var num = Number(prompt("Guess a number between 1-25. :)"));

var guessNumber = function (name, num) {
  var randomNumber = Math.floor(Math.random() * 26); // This will produce a number between 1 and 100 - this line is error free :)

  if (num > 25) {
    return (response.innerText = "We need a number between 1 and 25.");
  } else if (num < 1) {
    return (response.innerText = "We need a number between 1 and 25.");
  }

  // We've got a number between 1 and 25, let's do this.
  showGuess.innerText = num;

  if (num === randomNumber) {
    return (response.innerText = `Hey, ${name}, you totally guessed the number! Must be your lucky day.`);
  } else if (num < randomNumber) {
    return (response.innerText = `Hey, ${name}, your guess was too low. The number was ${randomNumber}.`);
  } else if (num > randomNumber) {
    return (response.innerText = `Hey, ${name}, your guess was too high. The number was ${randomNumber}.`);
  } else {
    return (response.innerText = `That's not a number, {name}!`);
  }
};

guessNumber(name, num);
