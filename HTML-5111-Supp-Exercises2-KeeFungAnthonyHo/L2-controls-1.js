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
