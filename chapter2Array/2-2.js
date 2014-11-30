// indexOf() looks to see if the argument passed to the function is found in the array, or -1 if the argument isn’t found
// lastIndexOf() will return the position of the last occurrence of the argument in the array
// join() and toString() return a string containing the elements of the array delimited by commas
var students = ["mike", "janie", "kevin", "alvin", "elsa", "paul", "janie", "wade", "lowey", "nick"];
var teachers = ["jenny", "tom", "michael", "jonathan", "fazan", "frank", "bob"];
function foundName(name) {
  var found = students.indexOf(name);
  var lastFound = students.lastIndexOf(name);
  if(found >= 0) {
    console.log(name + " is found at students[" + found + "]");
    console.log(name + " is last found at students[" + lastFound + "]");
  }
  else {
    console.log(name + " is not found in array");
  }
}

foundName("janie");
foundName("elsa");
foundName("mavis");

var studentsNameList = students.join();
console.log(studentsNameList);
var teachersNameList = teachers.toString();
console.log(teachersNameList);