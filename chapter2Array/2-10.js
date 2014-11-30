// For columnar processing, the outer loop moves through the rows, and the inner loop processes the columns
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var total = 0;
var average = 0.0;

for(var rows = 0; rows < grades.length; rows++) {
  for(var colm = 0; colm < grades[rows].length; colm++) {
    total += grades[rows][colm];
  }
  average = total / grades[rows].length;
  console.log("Student " + (rows+1) + " avrage: " + average.toFixed(2));
  total = 0;
  average = 0.0;
}