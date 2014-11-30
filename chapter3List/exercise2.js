// inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list
// new functions are added: findMin, compare, and smallestInsert
function List() {
  this.listSize = 0;          // property
  this.pos = 0;               // property
  this.dataStore = [];        // property
  this.clear = clear;         // below are functions and their definitions
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
  this.findMin = findMin;
  this.compare = compare;
  this.smallestInsert = smallestInsert;
  
  // append() function appends a new element onto the list at the next available position (end of a list)
  function append(element) {
    this.dataStore[this.listSize++] = element;
  }

  // find() function finds the element in the list
  // remove() & insert() function will use find() function as a helper funciton
  function find(element) {
    for(var i = 0; i < this.dataStore.length; i++) {
      if(this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;    // not found
  }

  // remove() function uses the position returned by find() to splice the dataStore array at that position
  function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;    // not found     
  }

  // length() function returns the number of elements in a list
  function length() {
    return this.listSize;
  }

  // toString() function allows us to view the elements of a list 
  function toString() {
    return this.dataStore;
  }

  // insert() function inserts an element into a list after an existing element or at the beginning of a list
  function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      this.listSize++;
      return true; 
    }
    return false;
  }

  // clear() function clears out the elements of a list and allows new elements to be entered
  function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  // contains() function checks a list to see if a particular value is part of the list
  function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

  // traverse a list, getElement() function displays the current element in a list
  function front() {
    this.pos = 0;
  }
  function end() {
    this.pos = this.listSize - 1;
  }
  function prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  } 
  function next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }
  function currPos() {
    return this.pos;
  }
  function moveTo(newPos) {
    this.pos = newPos;
  }
  function getElement() {
    return this.dataStore[this.pos];
  }
  
  // find the Min value in the list
  function findMin() {
    var min = this.dataStore[0];
    for(var i = 1; i < this.dataStore.length; i++) {
      if(min > this.dataStore[i]) {
        min = this.dataStore[i]
      }
    }
    return min;
  }
  
  // compare checks if an element is larger than the max value in list
  // compare function will use findMin() function as a helper funciton
  function compare(element) {
    var min = this.findMin();
    if(element < min) {
      return true;
    }
    else {
      return false;
    }
  }
  
  // smallestInsert() function will use compare() function as a helper funciton
  function smallestInsert(element) {
    var smallest = this.compare(element);
    if(smallest) {
      this.dataStore[this.listSize++] = element;
      console.log(element + " can be inserted");
    }
    else {
      console.log(element + " can not be inserted");
    }
  }
}

var prices = new List();
prices.append(50);
prices.append(70);
prices.append(18);
prices.append(34);
prices.append(49);
prices.append(68);
prices.append(21);
prices.append(8);
console.log(prices.toString());
prices.smallestInsert(7);
console.log(prices.toString());

var clients = new List();
clients.append("Apple");
clients.append("banana");
clients.append("Grape");
clients.append("mango");
clients.append("Orange");
clients.append("pear");
console.log(clients.toString());
clients.smallestInsert("Acai");
console.log(clients.toString());

