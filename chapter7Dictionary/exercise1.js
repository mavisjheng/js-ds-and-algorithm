// write a program that takes a set of names and phone numbers from a text file and stores them in a Dictionary object
// add function showOne(), key is name, phone number is value
function Dictionary() {
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showOne = showOne;
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
  
  // display one phone number
  function showOne(key) {
    if (this.find(key) !== undefined) {
      console.log(key + " → " + this.find(key));
    }
    else {
      console.log("We don't have " + key + "'s phone number");
    }
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

var Dictionary = new Dictionary();
Dictionary.add("Nike", "601");
Dictionary.add("David", "602");
Dictionary.add("Cynthia", "603");
Dictionary.add("Carol", "604");
Dictionary.add("Alice", "605");
Dictionary.add("Loren", "606");
Dictionary.add("Max", "607");
Dictionary.add("Willie", "608");
Dictionary.add("Howard", "609");
Dictionary.add("Olivia", "610");
Dictionary.showOne("Olivia");
Dictionary.showOne("Olivi");
console.log();
Dictionary.showAll();
console.log();
Dictionary.remove("Cynthia");
Dictionary.remove("Alice");
Dictionary.remove("Loren");
Dictionary.showAll();
console.log();
Dictionary.clear();
Dictionary.showAll();

