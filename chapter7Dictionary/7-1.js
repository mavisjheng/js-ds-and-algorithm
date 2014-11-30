// a dictionary is a data structure that stores data as key-value pairs
// the key is the index to get the value
function Dictionary() {
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.showInOrder = showInOrder;
  this.count = count;
  this.clear = clear;
  
  function add(key, value) {
    this.dataStore[key] = value;
  }
  
  function find(key) {
    return this.dataStore[key];
  }
  
  // delete() is a built-in JavaScript function and it is part of the Object class, it deletes both the key and the associated value
  function remove(key) {
    delete this.dataStore[key];
  }
  
  // var item in obj
  // the for..in statement iterates over the enumerable properties of an object, in arbitrary order
  function showAll() {
    for (var key in this.dataStore) {
      console.log(key + " → " + this.dataStore[key]);
    }
  }
  // can’t perform sort() with string keys, the same as length property
  // obtain the keys from the dataStore array first then call sort()
  // keys() function when called with an object will return all the keys stored in that object
  function showInOrder() {
    var allKeys = Object.keys(this.dataStore).sort();
    for (var i = 0; i < allKeys.length; i++) {
      console.log(allKeys[i] + " → " + this.dataStore[allKeys[i]]);
    }
  }
  
  // length property doesn’t work with string keys
  function count() {
    var n = 0;
    for (var key in this.dataStore) {
      n++;
    }
    return n;
  }
  
  function clear() {
    for (var key in this.dataStore) {
      delete this.dataStore[key];
    }
  }
}

var phoneBook = new Dictionary();
phoneBook.add("Nike", "123");
phoneBook.add("David", "873");
phoneBook.add("Cynthia", "346");
phoneBook.add("Carol", "761");
phoneBook.add("Alice", "592");
phoneBook.add("Loren", "590");
console.log("Number of entries: " + phoneBook.count());
phoneBook.showAll();
console.log("Cynthia's phone: " + phoneBook.find("Cynthia"));
phoneBook.remove("Cynthia");
phoneBook.showInOrder();
phoneBook.clear();
console.log("Number of entries: " + phoneBook.count());

