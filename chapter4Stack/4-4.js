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

// simulate recursive processes using a stack
function factorial(num) {
  var stack1 = new Stack();
  while(num > 0) {
    stack1.push(num--);
  }
  var product = 1;
  while(stack1.length() > 0) {
    product *= stack1.pop();
  }
  return product;
}

console.log(factorial(5));

