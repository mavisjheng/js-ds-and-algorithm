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

// stack can be used to convert a number from one base to another base
function convertBase(num, base) {
  var stack1 = new Stack();
  do {
    stack1.push(num % base);
    num = Math.floor(num / base);
  } while (num > 0);
  var convertedStr = "";
  while (stack1.length() > 0) {
    convertedStr += stack1.pop();
  }
  return convertedStr;
}

var num = 32;
var base = 2;
var result = convertBase(num, base);
console.log(num + " converted to base " + base + " is: " + result);
num = 125;
base = 8;
var result = convertBase(num, base);
console.log(num + " converted to base " + base + " is: " + result);

