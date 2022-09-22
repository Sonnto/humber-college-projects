//EXERCISE 1
var userInput = confirm("Yes or No?");
console.log(userInput);

//EXERICSE 2
var userInput = prompt("Enter some text...");
console.log(userInput);
if (userInput === 4) {
  alert("It worked!");
}

//EXERCISE 3
var userConfirm = confirm("Are you sure you want to delete this file?");
if (userInput === true) {
  alert("Filed deleted!");
}

//EXERCISE 4
//Variables
var outMessage;
var niceMessage = "Looks like a beautiful day.";
var maybeMessage = "Better take an umbrella - just in case.";
var rainMessage = "IT'S GON' RAIN!";
var popIn;

//Logic
//Get pop from user
popIn = prompt("What is the propbability of percipitation?");
popInInt = parseInt(popIn);

//Assign output message based on value
if (popInInt < 30) {
  outMessage = niceMessage;
} else if (popInInt >= 30 && popInInt < 60) {
  outMessage = maybeMessage;
} else {
  outMessage = rainMessage;
}

//Send Output Message to User
alert(outMessage);

//EXERCISE 5
//Variables
var userCode;
var outMessage;
var teach1 = "Adam Thomas";
var teach2 = "Bernie Monette";
var teach3 = "Sean Doyle";
var teach4 = "Joanna Kommala";
var teach5 = "Simon Borer";

//Logic
//Get course code from user
userCode = prompt(
  "Please enter the four digit course code from the HTTP programme."
);

//Compare code to known codes and assign teacher name if valid
switch (userCode) {
  case "5111":
    outMessage = teach1 + " " + "teaches HTTP" + userCode + ".";
    break;

  case "5110":
    outMessage = teach2 + " " + "teaches HTTP" + userCode + ".";
    break;

  case "5112":
    outMessage = teach3 + " " + "teaches HTTP" + userCode + ".";
    break;

  case "5114":
    outMessage = teach4 + " " + "teaches HTTP" + userCode + ".";
    break;

  case "5113":
    outMessage = teach5 + " " + "teaches HTTP" + userCode + ".";
    break;

  default:
    outMessage = "You did not enter a valid course code.";
    break;
} //End switch

//Send message to user
alert(outMessage);
