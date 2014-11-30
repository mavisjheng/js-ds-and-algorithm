// We can use arrays to store complex data in an object
function weeklyTemp() {
  this.weeklyTempData = [];
  this.add = add;
  this.average = average;
}

function add(temp) {
  this.weeklyTempData.push(temp);
} 

function average() {
  var total = 0;
  for(var i = 0; i < this.weeklyTempData.length; i++) {
    total += this.weeklyTempData[i];
  }
  return total / this.weeklyTempData.length;
}

var mayFirstWeek = new weeklyTemp();
mayFirstWeek.add(52);
mayFirstWeek.add(55);
mayFirstWeek.add(61);
mayFirstWeek.add(65);
mayFirstWeek.add(55);
mayFirstWeek.add(50);
mayFirstWeek.add(52);
console.log(mayFirstWeek);
console.log(mayFirstWeek.average());

