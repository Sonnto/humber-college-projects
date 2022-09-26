//LAB 3 - ARRAYS & LOOPS - PART 2

//PM TEAM MEMBER ARRAY
var myTeam = [
  "Justin Trudeau",
  "Barack Obama",
  "Anthony Ho",
  "Sophia Scott",
  "John Cena",
];
//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(myTeam);

//REMOVE LAST MEMBER
console.log(myTeam.pop());
console.log(myTeam);
//ADD SEAN TO FRONT OF ARRAY
console.log(myTeam.unshift("Sean Doyle"));
console.log(myTeam);
//REARRANGE THE ARRAY ALPHABETICALLY
console.log(myTeam.sort());
//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
alert("We have" + " " + myTeam.length + " " + "people in our group");
//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for (var i = 0; i < myTeam.length; i++) {
  var j = i + 1;
  console.log(myTeam[i] + " " + "is #" + j);
}
