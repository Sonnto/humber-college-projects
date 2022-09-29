//Q1
var shoppingCart = [];

var groceryCart = ["Orange", "Longan", "Guava", "Watermelon", "Peach"];

var groceryPrice = [2.99, 5.99, 3.79, 4.99, 2.54];

console.log(groceryCart[0] + " is $" + groceryPrice[0]);
console.log(groceryCart[4] + " is $" + groceryPrice[4]);

var userInput = prompt("Prompt values", "Default text");
console.log(userInput);
//VALIDATE INPUT FOR null, default text, & emptry string;

if (userInput === null || userInput === "Default text" || userInput === "");
{
  alert("Invalid!");
}

//Q2
var playlist = [];

playlist.push(
  "Dancing With Your Ghost",
  "Older",
  "In the End",
  "ALIVE",
  "Tower of Flower"
);
console.log(playlist);
console.log(playlist.length);
var firstSong = playlist.shift();
// console.log(firstSong);
// console.log(playlist);

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

for (var i = 10; i >= 0; i--) {
  // console.log(i);
}

for (var i = 0; i <= 100; i = i + 20) {
  console.log(i);
}

var colourPallette = [];
for (var i = 0; i < 4; i++) {
  userInput = prompt("Add a colour: ");
  colourPallette.push(userInput);
}
console.log(colourPallette);

var saidOK = false;

while (saidOK === false) {
  var userCheck = confirm("Are you sure?");

  if (userCheck === true) {
    alert("Oh good.");
    saidOK = true;
  }
}
