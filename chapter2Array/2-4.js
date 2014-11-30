// concat() function puts two or more arrays together to create a new array
// splice() function creates a new array from a subset of an existing array
var students = ["mike", "janie", "kevin", "alvin", "elsa", "paul", "janie", "wade", "lowey", "nick"];
var teachers = ["jenny", "tom", "michael", "jonathan", "fazan", "frank", "bob"];
var parents = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];

var room1 = students.concat(teachers);
var room2 = teachers.concat(parents);
var room3 = students.splice(3, 5);
console.log(room1.toString());
console.log(room2.toString());
console.log(room3);
console.log(students);

// push() function adds an element to the end of an array
// unshift() function adds array elements to the beginning of an array 
students.push("andrea", "christine", "mary");
teachers.unshift("HTML", "CSS");
console.log(students.toString());
console.log(teachers.toString());

// pop() function removes an element from the end of an array
// shift() function removes an element from the beginning of an array
var nums = [9, 8, 7, 6, 5, 1];
nums.pop();
console.log(nums);
nums.unshift(4);
console.log(nums);
var four = nums.shift();
console.log(nums);
nums.push(four);
console.log(nums);