// A List class implementation can be taken straight from the List ADT defined
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
  // first line can be omitted, will not affect the result, since the second line will redefine the dataStore array to an empty array
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
}

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbie");
console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());
names.clear();
console.log(names.toString());

var clients = new List();
clients.append("Clayton");
clients.append("Raymond");
clients.append("Cynthia");
clients.append("Jennifer");
clients.append("Bryan");
clients.append("Danny");
clients.front();
console.log(clients.getElement());
clients.next();
console.log(clients.getElement());
clients.next();
clients.next();
clients.next();
clients.prev();
console.log(clients.getElement());

