// write a program that uses stack to remove the yellow ones 
// without changing the order of the other candies in the dispenser
// pez dispenser is filled with red, yellow, and white colors
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.pop = pop;
  this.push = push;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
  
  function push(element) {
    this.dataStore[this.top++] = element;
  }
  
  function pop() {
    return this.dataStore[--this.top];
  }
  
  // peek() function returns the top element of the stack by accessing the element at the top-1 position of the array
  function peek() {
    return this.dataStore[this.top - 1];
  }
  
  function length() {
    return this.top;
  }
  
  function clear() {
    this.top = 0;
  }
}

var originalPez = new Stack();
originalPez.push("Y");
originalPez.push("R");
originalPez.push("W");
originalPez.push("Y");
originalPez.push("Y");
originalPez.push("W");
originalPez.push("W");
originalPez.push("R");
originalPez.push("W");
originalPez.push("Y");
originalPez.push("R");
originalPez.push("R");
originalPez.push("W");
originalPez.push("Y");
originalPez.push("R");
originalPez.push("Y");
originalPez.push("R");
originalPez.push("R");
// console.log("originalPez's top: " + originalPez.peek() + ", originalPez's length: " + originalPez.length());
console.log("originalPez: " +　originalPez.dataStore.join());

function removeYellow(originalPez) {
  var yellow = new Stack();       // store all yellow candies
  var tmp = new Stack();          // store all red and white candies
  var newPez = new Stack();       // push all red and white candies back so the order is same as originalPez
  
  while (originalPez.length() > 0) {
    if (originalPez.peek() === "Y") {
      yellow.push(originalPez.pop());
    }
   else {
      tmp.push(originalPez.pop());   // now the order of candies in the tmp is reverse of originalPez
    }
  }
  
  while (tmp.length() > 0) {
      newPez.push(tmp.pop());
  }
  console.log("newPez: " + newPez.dataStore.join());
}

removeYellow(originalPez);

