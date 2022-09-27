//VARIABLES
var book1 = "Star Wars: Heir to the Empire";
var book2 = "Star Wars: Lost Stars";
var book3 = "Star Wars: Thrawn";
var book4 = "Star Wars: Queen's Shadow";
var book5 = "Star Wars: Episode III: Revenge of the Sith";
var book6 = "Star Wars: I, Jedi";
var book7 = "Star Wars: From the Adventures of Luke Skywalker";
var book8 = "Star Wars: Dark Force Rising";
var book9 = "Star Wars: Rogue Squadron";
var book10 = "Star Wars: Bloodline";
var bookList = [];
bookList[0] = book1;
bookList[1] = book2;
bookList[2] = book3;
bookList[3] = book4;
bookList[4] = book5;
bookList[5] = book6;
bookList[6] = book7;
bookList[7] = book8;
bookList[8] = book9;
bookList[9] = book10;

//LOGIC
// userInput = prompt("Which top 10 book would you like?", "Pick a number: 1-10");
// var userChoice = parseInt(userInput) - 1;
// var bookIndex = bookList.indexOf(bookList[userChoice]);
// console.log(bookIndex);
var userInput = prompt(
  "Which top 10 book would you like?",
  "Pick a number: 1-10"
);
console.log("check first userInput prompt");
let userChoice = parseInt(userInput) - 1;
let bookIndex = bookList.indexOf(bookList[userChoice]);
console.log(bookIndex);
if (isNaN(userInput)) {
  alert("Please enter a number between 1 and 10.");
  console.log("check first if");
}
while (bookIndex === -1) {
  userInput = prompt(
    "Which top 10 book would you like?",
    "Pick a number: 1-10"
  );
  console.log("check inside while loop userInput prompt");
  userChoice = parseInt(userInput) - 1;
  bookIndex = bookList.indexOf(bookList[userChoice]);
  console.log(bookIndex);
  if (isNaN(userInput)) {
    alert("Please enter a number between 1 and 10.");
    console.log("check inside while loop if");
  }
}
alert(
  "Number" +
    " " +
    userInput +
    " " +
    "on the list is" +
    " " +
    bookList[userChoice] +
    "."
);
console.log("check final alert with books");
for (var i = 0; i < bookList.length; i++) {
  var j = i + 1;
  console.log("Book #" + j + ":" + " " + bookList[i]);
  console.log("complete");
}
