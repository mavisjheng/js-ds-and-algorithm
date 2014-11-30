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

// use a stack to determine whether or not a given string is a palindrome
function isPalindrome(word) {
  var stack1 = new Stack();
  for(var i = 0; i < word.length; i++) {
    stack1.push(word[i]);
  }
  var reverseWord = "";
  while (stack1.length() > 0) {
    reverseWord += stack1.pop();
  }
  if (word === reverseWord) {
    console.log(word + " is a palindrome");
  }
  else {
    console.log(word + " is not a palindrome");
  }
}

var word = "hello";
isPalindrome(word);
word = "racecar"
isPalindrome(word);

