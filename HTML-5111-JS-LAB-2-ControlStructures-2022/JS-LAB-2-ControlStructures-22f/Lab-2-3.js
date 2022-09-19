//######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var joinList;
var userEmail;

//==== LOGIC =============
var joinList = confirm("Do you want to join our mailing list?");

if (joinList === true) {
  var userEmail = prompt("Please enter your e-mail", "me@example.com");
  if (
    userEmail === null ||
    userEmail === "" ||
    userEmail === "me@example.com"
  ) {
    alert("Thank you, but your e-mail was not valid");
  } else {
    alert("Thank you, the next newsletter will go to " + userEmail);
  }
} else {
  alert("Thank you, we will not bother you again.");
}
