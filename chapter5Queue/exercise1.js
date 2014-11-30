// deque is a queue-like structure that allows elements to be added and removed 
// from both the front and the back of the list
// a two-ended queue
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

var q = new Deque();
q.enqueueFront("Meredith");
q.enqueueFront("Cynthia");
q.enqueueFront("Jennifer");
q.enqueueFront("Karen");
q.enqueueFront("Dara");
console.log("enqueueFront: " + q.toString());
console.log("front of queue: " + q.front());
console.log("back of queue: " + q.back());

q.dequeueFront();
q.dequeueFront();
console.log("dequeueFront: " + q.toString());

q.enqueueBack("Sofie");
q.enqueueBack("Corey");
q.enqueueBack("Abbie");
q.enqueueBack("Zara");
console.log("enqueueBack: " + q.toString());
console.log("front of queue: " + q.front());
console.log("back of queue: " + q.back());

q.dequeueBack();
q.dequeueBack();
q.dequeueBack();
console.log("dequeueBack: " + q.toString());

