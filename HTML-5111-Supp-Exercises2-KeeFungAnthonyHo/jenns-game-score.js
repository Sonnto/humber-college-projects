//Create score variables
var game1 = 190;
var game2 = 155;
var game3 = 186;
var game4 = 145;
var game5 = 170;

//Create logic variables
var gamesTotal = 0;
var numOfGames = 5;
var gamesAverage = 0;
var targetAverage = 185;
var targetDifference = 0;

//Add game scores
gamesTotal = game1 + game2 + game3 + game4 + game5;

//Get Average
gamesAverage = gamesTotal / numOfGames;

//Get margin of difference
targetDifference = targetAverage - gamesAverage;

//Output Messages
alert("Your average for " + numOfGames + "games is " + gamesAverage);
alert(
  "Your average is " +
    targetDifference.toFixed(1) +
    "less than the target average. "
);
