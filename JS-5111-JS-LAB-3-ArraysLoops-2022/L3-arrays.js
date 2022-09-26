/* LESSON 3 - ARRAYS */
var myName = "Anthony";
var myArray = []; // CREATING AN ARRAY

var myBooks = ["Joy of Cooking", "Joy of Coding", "Joy of Cats"]; //STRINGS
var myNums = [10, 2, 40, 300]; // NUMBERS
var myStuff = ["Hot", 54, myName, true]; //MIXED DATA TYPES
console.log(myStuff); // VIEW THE ARRAY

//HOW TO ACCESS AN ARRAY
//REFER TO ARRAY NAME, AND ITEM INDEX
console.log(myStuff[2]);
//BECAUSE THE INDEX OF ARRAYS START AT 0
var myStuff = ["Hot", 54, myName, true];
// ========= [   0,    1,   2,       3];

var myPick = myStuff[2]; //USE VARIABLE TO ASSIGN VALUE

//ASSIGN ITEMS TO AN ARRAY BY ITS INDEX
myArray[0] = "Pine";
myArray[1] = "Cedar";
myArray[2] = "Walnut";
//ABOVE MAKES myArray BECOME ["Pine", "Cedar", "Walnut"];

console.log(myArray.length); //RETURNS 3

var moreBooks = ["Treasure Island", "King Lear", "Bazaar", "Deadwood"];

//ARRAYS HAVE THEIR OWN SPECIAL FUNCTIONS
//CONCAT - JOIN TWO ARRAYS TOGETHER
var allBooks = myBooks.concat(moreBooks);
console.log(allBooks);

//join - TURN ARRAY INTO STRING
//NOTE SEPARATOR
console.log(allBooks.join(", "));
console.log(allBooks.join(" ### "));
