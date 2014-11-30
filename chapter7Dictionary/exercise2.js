// 1. write a program that stores the number of occurrences of words in a text
// 2. displays the words from 1. in sorted order
function Dictionary() {
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.showInOrder = showInOrder;
  this.count = count;
  this.clear = clear;
  
  function add(text) {
    var words = text.split(" ");
    for (var i = 0; i < words.length; i++) {         // compare the word to every key to see whether the word already been stored or not
      if (this.find(words[i]) !== undefined) {       // already stores this word in the array, occurrence + 1
        this.dataStore[words[i]]++;
      }
      else {
        this.dataStore[words[i]] = 1;                // word's first show so occurrence is 1
      }
    }
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

var text1 = new Dictionary();
text1.add("the brown fox jumped over the blue fox");
text1.showAll();
console.log();
text1.showInOrder();
console.log();
var text2 = new Dictionary();
text2.add("jack is taller than mary so mary is not taller than jack");
text2.showAll();
console.log();
text2.showInOrder();
console.log();
var text3 = new Dictionary();
text3.add("time time time time fly fly fly");
text3.showAll();
console.log();
text3.showInOrder();
