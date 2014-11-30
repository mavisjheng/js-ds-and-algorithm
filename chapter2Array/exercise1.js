// create a grades object that stores a set of student grades in an object
// provide a function for adding a grade and a function for displaying the student’s grade average
function studentGrades() {
  this.dataGrades = [];
  this.add = add;
  this.gradeAverage = gradeAverage;
  
  function add(grade) {
    this.dataGrades.push(grade);
  }
  
  function gradeAverage() {
    var total = 0;
    for(var i = 0; i < this.dataGrades.length; i++) {
      total += this.dataGrades[i];
    }
    console.log("grade average is: " + (total / this.dataGrades.length).toFixed(2));
  }
}

var tomGrade = new studentGrades();
tomGrade.add(66);
tomGrade.add(77);
tomGrade.add(88);
tomGrade.add(99);
tomGrade.add(55);
tomGrade.add(100);
tomGrade.gradeAverage();

