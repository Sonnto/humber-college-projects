// 1. Attach the JavaScript file to the JS_Assign-1-groupLogin.html file.
// 2. A popup box should ask the user which team number they belong
// to.
// 3. If a user does not provide the correct team number (numeral, not
// text), a popup message will let them know that they are denied
// access.
// 4. Users that provide the correct team number (as set by you, pick a
// number 1-6) will be asked what their first name is.
// 5. The code should check if the provided name belongs to a set list
// of the members of your team (use the names of four other
// classmates).
// 6. Valid members will be greeted by a popup message that
// welcomes them by their full name.
// 7. Users that submit a value that is not a valid team member name
// will see a popup with an “Access denied!” message.

//VARIABLES DECLARED
var userTeamNum;
var userTeamName;
/* team member names */
var teamMem1 = "anthony";
var teamMem2 = "sophia";
var teamMem3 = "wenbo";
var teamMem4 = "ramin";
var teamMem5 = "andrew";
/*complete names of current team members */
var firstName1 = "Anthony";
var firstName2 = "Sophia";
var firstName3 = "Wenbo";
var firstName4 = "Ramin";
var firstName5 = "Andrew";
var lastName1 = "Ho";
var lastName2 = "Scott";
var lastName3 = "Min";
var lastName4 = "Fallahi";
var lastName5 = "Barker";

//LOGIC
userTeamNum = prompt("Please indicate which team number you belong to:");
/*PROMPT USER FOR TEAM NUMBER*/
console.log(userTeamNum); /* CONSOLE LOG CHECK */
/* IF USER'S INPUT IS "1" */
if (userTeamNum === "1") {
  userTeamName = prompt(
    "Welcome to Team 1: the best team. Please now provide your first name:"
  );
  /* PROMPTS USER FOR THEIR NAME */
  console.log(userTeamName); /* CONSOLE LOG CHECK */
  switch (
    /* CHECKS USER'S NAME AGAINST TEAM MEMBERS BELOW */ userTeamName.toLowerCase() /* TURNS ALL TEXT INPUT INTO LOWERCASE */
  ) {
    case teamMem1:
      console.log("check"); /* CONSOLE LOG CHECK */
      alert("Welcome, " + firstName1 + " " + lastName1 + "!");
      break;
    case teamMem2:
      alert("Welcome, " + firstName2 + " " + lastName2 + "!");
      break;
    case teamMem3:
      alert("Welcome, " + firstName3 + " " + lastName3 + "!");
      break;
    case teamMem4:
      alert("Welcome, " + firstName4 + " " + lastName4 + "!");
      break;
    case teamMem5:
      alert("Welcome, " + firstName5 + " " + lastName5 + "!");
      break;
    default:
      alert("Access Denied! You must not be a member of this team!");
      /* IF USER ENTERS SOMETHING OTHER THAN A NAME IN THE LIST, THEN DENY */
      break;
  }
} else {
  alert("Access Denied!"); /* OTHERWISE, DENY ACCESS */
}
