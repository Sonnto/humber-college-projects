//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG

//################## CREATE YOUR checkTemp FUNCTION
//This function will...
//It expects to receive...
//It will return...

// This function will return whether it is safe to walk your dog
// It expects to receive one variable
// It will return false if it is greater than 30, otherwise return true;
function checkTemp(currentTemp) {
  if (currentTemp > 30) {
    checkTemp = false;
  } else {
    checkTemp = true;
  }
}

// This function will return whether it is safe to walk your dog
// It expects to receive one variable
// It will return false if it is greater than 30 or less than -10.
//... otherwise, it will return true.
function checkTemp2(currentTemp2) {
  if (currentTemp2 > 30 || currentTemp2 < -10) {
    checkTemp2 = false;
  } else {
    checkTemp2 = true;
  }
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var userInput = prompt("Enter current temperature");
checkTemp(userInput);
if (checkTemp === false) {
  alert("Yikes! This is no weather for dog walking!");
} else {
  alert("OK, go walk");
}

//Second Try
var userInput2 = prompt("Enter current temperature x2");
checkTemp2(userInput2);
if (checkTemp2 === false) {
  alert("Yikes! This is no weather for dog walking!");
} else {
  alert("OK, go walk");
}
