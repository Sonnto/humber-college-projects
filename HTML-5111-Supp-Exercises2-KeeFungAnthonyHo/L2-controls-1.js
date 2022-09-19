//LESSON 2 - Control Structures
//alert ('Lesson 2');

var firstName = "Anthony";
if (firstName == "Anthony") {
  alert("Hello, Anthony!");
}

var myAge = 39;
if (myAge <= 65) {
  alert("What are you doing at work?");
}

var loggedIn = 0;
if (loggedIn == false) {
  alert("That can't be true!");
}

//logical OR - multiple values but only one needs to be true;
if (firstName === "Anthony" || firstName === "Bernie") {
  alert("Hello, Anthony or Bernie.");
}

//logical AND - multiple values but all of them needs to be true;
var lastName = "Ho";
if (firstName === "Anthony" && lastName === "Ho") {
  alert("Hi, Anthony Ho!");
}

var userInput = confirm("Hi, are we having fun yet?");
console.log(userInput);

if (userInput === true) {
  alert("You said Yes! Yay!");
} else {
  alert("You did not say yes. Sadge.");
}

if (firstName === "Bernie") {
  alert("Hey, Bernie! I know you!");
} else if (firstName === "Anthony") {
  alert("Hey, Anthony! I know you!");
} else {
  alert("Sorry, I don't know you.");
}
