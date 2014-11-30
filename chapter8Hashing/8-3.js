// hash integer keys
// betterHash() is the superior hashing function for strings and for integers
function getRandomGrade(min, max) {                // allows us to specify a maximum and minimum random number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getStudentData(arr) {
  for (var i = 0; i < arr.length; i++) {
    var studentInfo = "";
    for (var j = 1; j <= 9; j++) {                 // generate student ID number
      studentInfo += Math.floor(Math.random() * 10);
    }
    studentInfo += getRandomGrade(50, 100);        // generate student grade and concatenated to the student ID
    arr[i] = studentInfo;
  }
}

function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.put = put;
  this.showDistri = showDistri;
  
  function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }
  
  function betterHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);           // or: total = 37 * total + data.charCodeAt(i);
      total *= 197;
    }
    return total % this.table.length;
  }
  
  function put(data) {
    var pos = this.simpleHash(data);
    this.table[pos] = data;
  }
  
  function showDistri() {
    for (var i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + " → " + this.table[i]);
      }
    }
  }
}

// show student information
var students = new Array(10);
getStudentData(students);
console.log("Student Data:");
for (var i = 0; i < students.length; i++) {
  console.log("Student " + (i+1) + ": " + students[i].substring(0, 9) + " " + students[i].substring(9));
}

// hash table of student data
console.log();
console.log("Data Distribution:");
var studentsHashTable = new HashTable();
for (var i = 0; i < students.length; i++) {
  studentsHashTable.put(students[i]);
}
studentsHashTable.showDistri();

