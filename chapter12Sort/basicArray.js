// a class for array data and functions that encapsulates some of the normal array operations
// be careful of the possible values by Math.random()
function basicArray(length) {
  this.dataStore = [];
  this.pos = 0;
  this.length = length;
  this.insert = insert;
  this.setData = setData;
  this.clear = clear;
  this.toString = toString;
  this.swap = swap;
  
  for (var i = 0; i < this.length; i++) {        // original dataStore array, elements are not random
    this.dataStore[i] = i;
  }
  
  // generate random numbers to store in the array
  // use 100 instead of length+1 is for increasing the randomness
  function setData() {
    for (var i = 0; i < this.length; i++) {
      this.dataStore[i] = Math.floor(Math.random() * 100);     // 0 ~ 99
      // this.dataStore[i] = Math.floor(Math.random() * (this.length + 1));
    }
  }
  
  // makes every element of array 0
  function clear() {
    for (var i = 0; i < this.length; i++) {
      this.dataStore[i] = 0;
    }
  }
  
  function insert(element) {
    this.dataStore[this.pos++] = element;
  }
  
  function toString() {
    var str = "";
    for (var i = 0; i < this.length; i++) {
      str += this.dataStore[i] + " ";
      if (i !== 0 && i % 10 === 0) {                // every 10 elements change to next line
        str += "\n";                     
      }
    }
    return str;
  }
  
  function swap (arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
}

var nums = new basicArray(100);
nums.setData();    
console.log(nums.toString());

