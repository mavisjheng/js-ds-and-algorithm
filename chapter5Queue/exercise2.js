// use the Deque class to determine if a given word is a palindrome
function Deque() {
  this.dataStore = [];
  this.enqueueFront = enqueueFront;
  this.enqueueBack  = enqueueBack;
  this.dequeueFront = dequeueFront;
  this.dequeueBack  = dequeueBack;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  
  function enqueueFront(element) {
    this.dataStore.unshift(element);
  }
  
  function enqueueBack(element) {
    this.dataStore.push(element);
  }
  
  function dequeueFront() {
    return this.dataStore.shift();
  }
  
  function dequeueBack() {
    return this.dataStore.pop();
  }
  
  function front() {
    return this.dataStore[0];
  }
  
  function back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  
  // toString() function displays all the elements in a queue
  function toString() {
    var queueString = "";
    for (var i = 0; i < this.dataStore.length; i++) {
      queueString += this.dataStore[i] + " ";
    }
    return queueString;
  }
  
  function empty() {
    if (this.dataStore.length === 0) {
      return true;
    }
    else {
      return false;
    }
  }
}

// see 5-1.js and below comment part
// Queue: enqueueBack + dequeueFront, the order of word after dequeue is the same as input order
// no reverse, so cannot use this combination to check isPalindrome or not
// we have to use enqueueFront + dequeueBack
function isPalindrome(word) {
  var q = new Deque();
  var originalWord = "";
  var reverseWord = "";
  
  for(var i = 0; i < word.length; i++) {
    q.enqueueFront(word[i]);
  }
  originalWord = q.toString();
  
  while (!q.empty()) {
    reverseWord += q.dequeueBack() + " ";
  }
  
  if (originalWord === reverseWord) {
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
word = "operators";
isPalindrome(word);
word = "kayak";
isPalindrome(word);
word = "madam";
isPalindrome(word);
word = "civic";
isPalindrome(word);
word = "converted";
isPalindrome(word);


// check to see: enqueueFront + dequeueBack, the order of word after dequeue
// did reverse, so can use this combination to check isPalindrome or not
/* var q2 = new Deque();
q2.enqueueFront("h");
q2.enqueueFront("e");
q2.enqueueFront("l");
q2.enqueueFront("l");
q2.enqueueFront("o");
console.log(q2.toString());

function afterDequeueBack(q) {
  var str = "";
  while (!q.empty()) {
    str += q.dequeueBack() + " ";
  }
  console.log(str);
}

afterDequeueBack(q2);
*/
