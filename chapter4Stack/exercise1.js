// write a function that takes an arithmetic expression as an argument 
// and returns the postion in the expression where a parenthesis is missing
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

// tmp only stores the parenthesis
function checkParenthesis(mathExpression) {
  var temp = new Stack();          // store left parenthesis, the length of temp equals to leftParenthesisNum
  var leftParenthesisNum = 0;      // extra left parenthesis
  var rightParenthesisNum = 0;     // extra right parenthesis
  
  for(var i = 0; i < mathExpression.length; i++) {
    if(mathExpression[i] === "(") {
      temp.push(mathExpression[i]);
      leftParenthesisNum ++;
    }
    if(mathExpression[i] === ")") {
      if(temp.length() > 0) {       // have left parenthesis to pair up
        temp.pop();
        leftParenthesisNum --;
      }
      else {                        // no left parenthesis to pair up
        rightParenthesisNum ++;   
      }
    }
  }
  
  if(rightParenthesisNum > 0) {
    console.log("numbers of missing left parenthesis: " + rightParenthesisNum);
  }
  else if(leftParenthesisNum > 0) {
    console.log("numbers of missing right parenthesis: " + leftParenthesisNum);
  }
  else {
    console.log("no parenthesis missed");
  }
}

var mathExpression = "2.3 + 23 / 12 + ((3.14159 * .24))";
checkParenthesis(mathExpression);

