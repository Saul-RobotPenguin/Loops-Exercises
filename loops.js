//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

let number = 9;
for (let i = 0; i <= 10; i++) {
  console.log(i * number);
}

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it
let i = 0;
while (i < 50) {
  i = i + 5;
  console.log(i);
}

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;

const array = [2, 7, 5, 9, 8, 7];
const array2 = [2, 3, 4, 4];

function arrayOfNumbers() {
  let findDuplicates = (arr) =>
    arr.filter((item, index) => arr.indexOf(item) != index);

  console.log(findDuplicates(array2));
}
arrayOfNumbers();

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..
function assignGrade(grade) {
  if (grade >= 40 && grade < 50) {
    console.log("For " + grade + " you got an F ");
  } else if (grade >= 50 && grade < 60) {
    console.log("For " + grade + " you got an D ");
  } else if (grade >= 60 && grade < 70) {
    console.log("For " + grade + " you got an C ");
  } else if (grade >= 70 && grade <= 85) {
    console.log("For " + grade + " you got an B ");
  } else if (grade >= 90 && grade <= 100) {
    console.log("For " + grade + " you got an A ");
  } else {
    console.log("Error");
  }
}

assignGrade(45);
assignGrade(55);
assignGrade(75);
assignGrade(85);
assignGrade(95);
