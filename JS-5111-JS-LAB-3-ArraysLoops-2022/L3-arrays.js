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

//SORT
var booksAlpha = allBooks.sort();
console.log(booksAlpha);
console.log(myNums); //DOESN'T WORK AS EXPECTED WITH NUMBERS
console.log(myNums.sort()); //SORTS NUMBERS BY 1ST CHARACTER, SO 10 COMES BEFORE 2, BECAUSE 1 COMES BEFORE 2

//REVERSE ORDER OF ARRAY
var booksReversed = booksAlpha.reverse();

//INDEX OF - FIND SOMETHING IN ARRAY
var arrIndex = booksAlpha.indexOf("Bazaar");
console.log(arrIndex);
//THIS RETURNS INDEX OF PARAMETER IN ARRAY
//IF IT CANT FIND IT, IT RETURNS -1
//KNOWING IT IS -1 ALLOWS YOU TO PROGRAM LOGIC WHEN SEARCHING AN ARRAY...
if (arrIndex === -1) {
  alert("Book not found.");
}

//SLICE - TAKE PIECE OF ARRAY
//array.slice (START INDEX, END BEFORE)
var first5 = booksAlpha.slice(0, 5);
//START AT 1ST ITEM, STOP BEFORE 5TH ITEM
var after5 = booksAlpha.slice(5); //IF ONLY 1 PARAMETER, START HERE
//START AT INDEX 5

var joy3 = booksAlpha.slice(2, 5);
console.log(joy3);

//ADD, REMOVE ITEMS
myArray.pop(); //REMOVES LAST ELEMENT FROM ARRAY
//NOTE: pop() RETURNS ITEM THAT IT REMOVED FROM ARRAY
console.log(myArray);
console.log(myArray.pop());

myArray.push("Maple"); //ADDS PARAMETER TO END OF ARRAY
//NOTE: push() RETURNS THE NEW ARRAY LENGTH
console.log(myArray.push("Maple"));
console.log(myArray);

myArray.shift(); //REMOVES FIRST ITEM FROM ARRAY
console.log(myArray.shift());
console.log(myArray);

myArray.unshift("Birch"); // ADDS PARAMETER TO FRONT OF ARRAY
console.log(myArray.unshift("Birch"));
console.log(myArray);

//SPLICE - ADDS & REMOVES FROM MIDDLE OF ARRAY
//array.splice(start, deleteCount, new item(s))
myArray.splice(1, 1); //REMOVE 1 ITEM STARTING AT END OF 1
console.log(myArray);
myArray.splice(1, 1, "Cherry", "Willow"); //REMOVE 1 & ADD 2
console.log(myArray);
