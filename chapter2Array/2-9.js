// filter() function works similarly to every(), but instead of returning  true if all the elements of an array satisfy a Boolean function
// the function returns a new array consisting of those elements that satisfy the Boolean function
function isEven(nums) {
  return nums % 2 === 0;
}

function isOdd(nums) {
  return nums % 2 !== 0;
}

var nums = [];
for(var i = 0; i < 20; i++) {
  nums[i] = i+1;
}

var evens = nums.filter(isEven);
console.log("Even numbers from array: " + evens);
var odds = nums.filter(isOdd);
console.log("Odd numbers from array: " + odds);

///////////////////////////////////////////

function passExam(grade) {
  return grade > 60;
}
var grades = [];
for(var i = 0; i < 20; i++) {
  grades[i] = Math.floor(Math.random() * 101);
}
console.log("all grades are: " + grades);

var passingGrades = grades.filter(passExam);
console.log("passing grades are: " + passingGrades);

///////////////////////////////////////////

function wrongSpelling(str) {
  if(str.indexOf("cie") > -1) {
    return true;
  }
  else {
    return false;
  }
}

var words = ["recieve","deceive","percieve","deceit","concieve"];
var misSpelled = words.filter(wrongSpelling);
console.log(misSpelled);

