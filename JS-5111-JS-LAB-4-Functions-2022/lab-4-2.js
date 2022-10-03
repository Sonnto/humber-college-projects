//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION

//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function averageThese(num1, num2, num3, num4, num5) {
  averageNum = (num1 + num2 + num3 + num4 + num5) / 5;
  avgNum = averageNum.toFixed(1);
}

function averageGrade(grade1, grade2, grade3, grade4, grade5) {
  averageGPA = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;
  avgGPA = averageGPA.toFixed(1);
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

averageThese(5, 10, 15, 20, 25);
alert(avgNum);

var grade1 = 100;
var grade2 = 100;
var grade3 = 10;
var grade4 = 10;
var grade5 = 10;

averageGrade(grade1, grade2, grade3, grade4, grade5);
if (avgGPA >= 70) {
  alert("Success!");
} else {
  alert("Review required!");
}
