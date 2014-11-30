// any element that is not currently at the top of the stack cannot be accessed
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

var stack1 = new Stack();
stack1.push("Raymond");
stack1.push("David");
stack1.push("Brian");
console.log("stack1 length: " + stack1.length());
console.log("the top element is: " + stack1.peek());
var popElement = stack1.pop();
console.log("the popped element is: " + popElement);
console.log("the top element is: " + stack1.peek());
stack1.push("Alice");
console.log("the top element is: " + stack1.peek());
stack1.clear();
console.log("stack1 length: " + stack1.length());
console.log("the top element is: " + stack1.peek());
stack1.push("Starbucks");
console.log("the top element is: " + stack1.peek());

