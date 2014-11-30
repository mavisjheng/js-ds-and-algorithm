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

var stackPrecedence = operatorPrecedence("+");
var incomingPrecedence = operatorPrecedence("*");
console.log(stackPrecedence);
console.log(incomingPrecedence);

var c = parseInt("7");
if (!isNaN(c)) {
  console.log("true");
}