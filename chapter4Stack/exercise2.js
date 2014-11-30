// converts infix expressions to postfix expressions
// and then use the stacks to evaluate the expression
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

// assign operator's precedence, */ is higher than +-
function operatorPrecedence(c) {
  var precedence = 0;
  switch(c) {
    case "+":
      precedence = 1;
      break;
    case "-":
      precedence = 1;
      break;
    case "*":
      precedence = 2;
      break;
    case "/":
      precedence = 2;
      break;
  }
  return precedence;
}

function infixToPostfix(mathExpression) {
  var postfixStr = "";                                 // for the result postfix string
  var operatorStack = new Stack();                     // for the operators
  for (var i = 0; i < mathExpression.length; i++) {    // scan the math expression from left to right
    var c = parseInt(mathExpression[i]);               // need to separate operand and operator, try to pasrInt and check if isNaN
    if (!isNaN(c)) {                                   // put operands to postfix string as they arrive
      postfixStr += mathExpression[i];
    }
    else {                                             // rules apply if operators arrive
      if (operatorStack.length() === 0 || operatorStack.peek() === "(") {      // if the operatorStack is empty or its top is a left parenthesis, push the incoming operator to the stack
        operatorStack.push(mathExpression[i]);
      }
      else if (mathExpression[i] === "(") {                                    // if the incoming symbol is a left parenthesis, push it on the stack
        operatorStack.push(mathExpression[i]);                                 // left parenthesis has higher in coming priority and lower in stack priority
      }
      else if (mathExpression[i] === ")") {                             // if the incoming symbol is a right parenthesis, pop the operatorStack until seeing a left parenthesis and discard the pair of parentheses
        while (operatorStack.peek() != "(") {
          postfixStr += operatorStack.pop();
        }
        operatorStack.pop();                                            // pop the left parenthesis without putting it into the postfixStr
      }
      else {                                                            // deal with + - * /
        var stackPrecedence = operatorPrecedence(operatorStack.peek());
        var incomingPrecedence = operatorPrecedence(mathExpression[i]);
        if (stackPrecedence < incomingPrecedence) {                     // if the incoming symbol has strictly higher precedence than the top of the stack, push it on the stack
          operatorStack.push(mathExpression[i]);
        }
        else {                           // if the incoming symbol has lower precedence than the symbol on the top of the stack, pop the stack then test the incoming operator against the new top of stack
          while (stackPrecedence >= incomingPrecedence) {
            postfixStr += operatorStack.pop();
            stackPrecedence = operatorPrecedence(operatorStack.peek());
          }
          operatorStack.push(mathExpression[i]);                        // as long as the incoming symbol has strictly higher precedence than the top of the stack, push it on the stack
        }
      } 
    }
  }
  while (operatorStack.length() !== 0) {                                // while finish the mathExpression, pop all operators from the stack to postfixStr
    postfixStr += operatorStack.pop();
  }
  console.log("postfix of " + mathExpression + " is: " + postfixStr);
  return postfixStr;
}

function countPostfix(postfixExpression) {             // if operator arrives, count the currTotal first, then push currTotal back to stack and continue the remaining expression
  var s = new Stack();
  var temp = 0;                                        // for - / , the order does matter, temp for reverse the order
  var currTotal = 0;
  var result = 0;
  for (var i = 0; i < postfixExpression.length; i++) {
    var c = parseInt(postfixExpression[i]);            // need to separate operand and operator, try to pasrInt and check if isNaN
    if (!isNaN(c)) {                                   // push operands to stack as they arrive
      s.push(c);                                       // push int instead of string because we need to count here
    }
    else {
      switch(postfixExpression[i]) {
        case "+":
          currTotal = s.pop() + s.pop();
          s.push(currTotal);
          break;
        case "-":
          temp = s.pop();
          currTotal = s.pop() - temp;
          s.push(currTotal);
          break;
        case "*":
          currTotal = s.pop() * s.pop();
          s.push(currTotal);
          break;
        case "/":
          temp = s.pop();
          currTotal = s.pop() / temp;
          s.push(currTotal);
          break;
      }
    }
  }
  result = s.pop();                                    // while finish the postfixExpression, the result is inside the stack
  console.log("result of " + postfixExpression + " is: " + result);
  return result;
}

countPostfix(infixToPostfix("3+4"));
countPostfix(infixToPostfix("(3+2)*(4-1)/(8+7)"));
countPostfix(infixToPostfix("3+4*5/2"));
countPostfix(infixToPostfix("(4+8)*(6-5)/((3-2)*(1+5))"));

