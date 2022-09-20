//CONTROLS PART 2 ======== switch NESTED WITHIN AN else STATEMENT ========
var userInput = prompt(
  "Do you prefer red, green, or blue?",
  "Please say blue."
);

if (
  userInput === "" ||
  userInput === null ||
  userInput === "Please say blue."
) {
  alert("You need to enter a colour!");
} else {
  switch (userInput.toLowerCase()) {
    case "red":
      alert("Red is rad");
      break;

    case "green":
      alert("Green is great!");
      break;

    case "blue":
      alert("Blue is beautiful!");
      break;

    default:
      alert("Not one of the big 3, I see.");
      break;
  }
}
