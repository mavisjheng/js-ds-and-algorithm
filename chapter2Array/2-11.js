// For row-wise computation, simply flip the for loops so that the outer loop controls the columns and the inner loop controls the rows
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var total = 0;
var average = 0.0;

for(var colm = 0; colm < grades.length; colm++) {
  for(var rows = 0; rows < grades[colm].length; rows++) {
    total += grades[rows][colm];
  }
  average = total / grades[colm].length;
  console.log("Test " + (colm+1) + " average: " + average.toFixed(2));
  total = 0;
  average = 0.0;
}