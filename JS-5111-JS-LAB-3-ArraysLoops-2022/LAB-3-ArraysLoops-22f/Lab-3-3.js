//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var userTotal = 0;
var userCart = [];

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (userTotal < 35) {
  let userInput = prompt("Enter prices: "); //asks user to input values
  parseInt(userInput); //changes input to numbers
  userTotal = userTotal + parseInt(userInput); //adds userinput with the total
  userCart.push(userInput); //pushes the userInput into the end of userCart array
  console.log(userCart);
}
//GET ITEM COST FROM USER

//CONVERT USER INPUT TO A NUMBER

//ADD ITEM COST TO RUNNING TOTAL VARIABLE

//PUSH ITEM COST TO CART ARRAY

//SEND POPUP MESSAGE TO USER
alert("Free Shipping Reached. Your total value of purchases is $" + userTotal);
//SEND OUTPUT TO CONSOLE
console.log("Free Shipping Items:" + " " + userCart.join("| ") + ".");
console.log(userTotal);
