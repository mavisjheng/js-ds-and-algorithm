// write a program that allows the user to change the constraints of a knapsack problem 
// in order to explore how changing the constraints will change the results of the solution
// It is probably a good idea to change only one of these constraints at a time
// 0/1 Knapsack Problem, directly change the content of value, size, capacity
function max(a, b) {
  return (a > b) ? a : b;
}

function dynaKnapsack(capacity, quantity) {
  var K = [];
  var str = "";                                    
  for (var i = 0; i <= capacity; i++) {
    K[i] = [];
  }
  
  for (var quan = 0; quan <= quantity; quan++) {
    for (var capa = 0; capa <= capacity; capa++) {
      if (quan === 0 || capa === 0) {            
        K[quan][capa] = 0;
      }
      else if (size[quan - 1] <= capa) {            
        K[quan][capa] = max(value[quan - 1] + K[quan - 1][capa - size[quan - 1]], K[quan - 1][capa]);        
      }
      else {                                        
        K[quan][capa] = K[quan - 1][capa];
      }
      str += K[quan][capa] + " ";
    }
    str += "\n";                                 
  }
  console.log("Max value is: " + str);
  return K[quantity][capacity];
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 26;
var quantity = 5;
console.log(dynaKnapsack(capacity, quantity));

