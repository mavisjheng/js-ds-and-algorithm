// radix sort
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

// distributes numbers by the place (1s or 10s) digit
// queues represent the bins
// store the queues in an array
// n represents how many numbers
// digit represents either the 1s or 10s place
function distribute(nums, queues, n, digit) {
  for(var i = 0; i < n; i++) {
    if(digit === 1) {
      queues[nums[i] % 10].enqueue(nums[i]);
    }
    else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    }
  }
} 

// collect numbers from the queues
function collect(queues, nums) {
  var i = 0;
  for(var j = 0; j < 10; j++) {
    while(!queues[j].empty()) {
      nums[i++] = queues[j].dequeue();
    }
  }
}

function displayArr(arr) {
  var str = "";
  for(var i = 0; i < arr.length; i++) {
    str += arr[i] + " ";
  }
  console.log(str);
}

// queues represent the bins
// store the queues in an array
var queues = [];
for(var i = 0; i < 10; i++) {
  queues[i] = new Queue();
}

var nums = [];
for(var i = 0; i < 10; i++) {
  nums[i] = Math.floor (Math.random() * 100);
}

console.log("Before radix sort: ");
displayArr(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
console.log("After radix sort: ");
displayArr(nums);
console.log("Before radix sort: ");
displayArr(nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("After radix sort: ");
displayArr(nums);

