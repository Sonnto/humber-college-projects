// FUNCTIONS SUPPLEMENTAL EXERCISES //
/*
// 1 //
function sayHello() {
  alert("Hello, World!");
}

sayHello();

// 2 //
function hiHiMessage(whateverMsg) {
  alert(whateverMsg);
}

hiHiMessage("Whatever this is");

// 3 //
function showInstructor(teacher, code) {
  alert(`${teacher} teaches ${code}.`);
}

showInstructor("Sean", "5111");
showInstructor("Joanna", "5111");
showInstructor("Simon", "5112");
showInstructor("Christine", "5112");

// 4 //
function tax(subTotal) {
  var total = subTotal * 1.13;
  return total.toFixed(2);
}

var bill = tax(100.0);
console.log(bill);
console.log(`The total cost is $${tax(100.0)}.`);

*/

// DINNER EXERCISE //

// GLOBAL VARIABLES
var guestList = []; // array of guests present
var mealList = []; // array of meals available

// FUNCTIONS

// Function to add selected meal to the mealList array
function addMeal(mealChoice) {
  var upperMeal = mealChoice.toUpperCase(); // takes input parameter and changes it to uppercase
  // console.log(upperMeal);
  mealList.push(upperMeal); // adds the upper-cased-meal choice to the mealList array
  // console.log(mealList);
}

//Function that alphabetizes the strings in the array
function alphaSortGuests(guestArray) {
  // console.log(guestArray);
  var alphaGuests = guestArray.sort();
  // console.log(guestArray);
  var guestsString = alphaGuests.join(", ");
  return guestsString;
}

// var test = alphaSortGuests(guestList);
// console.log(test);

// Function to output the guest list and the meal counts.
function outputEventDetails(guest) {
  var guestOutput = alphaSortGuests(guest);
  console.log(`Our guests: ${guestOutput}`);

  var countArray = countMeals(mealList);
  console.log(`MEAL COUNT`);
  console.log(`Chicken: ${countArray[0]}`);
  console.log(`Vegetarian: ${countArray[1]}`);
  console.log(`Undecided: ${countArray[2]}`);
}

// Function to count the number of meals and return the individual counts.
function countMeals(mealList) {
  var CHcount = 0;
  var VGcount = 0;
  var unknown = 0;
  mealCountArray = [];

  for (var i = 0; i < mealList.length; i++) {
    if (mealList[i] === "CH") {
      CHcount += 1;
    } else if (mealList[i] === "VG") {
      VGcount += 1;
    } else {
      unknown += 1;
    }
  } //end of loop;

  mealCountArray.unshift(CHcount);
  mealCountArray.unshift(VGcount);
  mealCountArray.unshift(unknown);

  return mealCountArray;
}

var test2 = countMeals(mealList);
console.log(test2);

// Function to get the guests and their meal choices.
function getGuests() {
  var isFinished = false;
  while (isFinished === false) {
    var guest = prompt("Last name of guest?");
    if (guest === null || guest === "") {
      isFinished = true;
    } else {
      guestList.push(guest);
      var meal = prompt(`What is ${guest}'s meal choice? CH, VG, or ?`);
      addMeal(meal);
    }
  }
}

// MAIN LOGIC //
getGuests();
outputEventDetails(guestList);
