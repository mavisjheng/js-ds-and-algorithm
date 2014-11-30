// map() function works like the  forEach() function, applying a function to each element of an array
// The difference between the two functions is that map() returns a new array with the results of the function application
function curve(grade) {
  return grade += 5;
}
var grades = [54, 59, 34, 40, 42];
var curvedGrade = grades.map(curve);
console.log(curvedGrade);

/////////////////////////////////////

function initials(word) {
  return word[0];
}
var words = ["er", "jhen", "jheng"];
var initialString = words.map(initials);
console.log(initialString.join(""));

