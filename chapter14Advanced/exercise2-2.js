// write a program that allows the user to change the constraints of a knapsack problem 
// in order to explore how changing the constraints will change the results of the solution
// It is probably a good idea to change only one of these constraints at a time
// Fractional Knapsack Problem, directly change the content of value, size, capacity, ratio
function max(a, b) {
  return (a > b) ? a : b;
}

function greedyKnapsack(value, size, capacity, quantity) {
  var load = 0;
  var i = 0;
  var maxValue = 0;
  while (load < capacity && i < quantity) {
    if (size[i] <= (capacity - load)) {
      maxValue += value[i];
      load += size[i];
    }
    else {
      var r = (capacity - load) / size[i];
      maxValue += r * value[i];
      load += r * size[i];
    }
    i++;
  }
  return maxValue;
}

var value = [50, 140, 60, 60];
var size = [5, 20, 10, 12];
var ratio = [10, 7, 6, 5];
var capacity = 26;
var quantity = 4;
console.log("maximum value: " + greedyKnapsack(value, size, capacity, quantity));

