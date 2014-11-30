// constructor function of queue and a test program
function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  
  function enqueue(element) {
    this.dataStore.push(element);
  }
  
  function dequeue() {
    return this.dataStore.shift();
  }
  
  function front() {
    return this.dataStore[0];
  }
  
  function back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  
  // toString() function displays all the elements in a queue
  function toString() {
    //var queueString = this.dataStore.join("; ");        // 可一行直接取代
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

var q1 = new Queue();
q1.enqueue("Meredith");
q1.enqueue("Cynthia");
q1.enqueue("Jennifer");
q1.enqueue("Karen");
q1.enqueue("Dara");
console.log(q1.toString());
q1.dequeue();
console.log(q1.toString());
console.log("front of queue: " + q1.front());
console.log("back of queue: " + q1.back() + "\n");

var q2 = new Queue();
q2.enqueue("h");
q2.enqueue("e");
q2.enqueue("l");
q2.enqueue("l");
q2.enqueue("o");
console.log(q2.toString());

// check to see the order after dequeue, same as input order, no reverse
function afterDequeue(q) {
  var str = "";
  while (!q.empty()) {
    str += q.dequeue() + " ";
  }
  console.log(str);
}
afterDequeue(q2);

