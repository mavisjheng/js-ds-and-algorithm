// create an array of over 10,000 randomly integers and sort using Quicksort and the JavaScript built-in sorting function, timing each
function sortArray(length) {
  this.dataStore = [];
  this.length = length;
  this.toString = toString;
  
  this.quickSort = quickSort;
  this.builtInSort = builtInSort;
  
  for (var i = 0; i < this.length; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.length + 1));
  }
  
  function toString() {
    var str = "";
    for (var i = 0; i < this.length; i++) {
      str += this.dataStore[i] + " ";
    }
    return str;
  }
  
  function builtInSort() {
    function compare(num1, num2) {
      return num1 - num2;
    }
    this.dataStore.sort(compare);
  }
  
  function quickSort(arr) {
    if (arr.length < 2) {        
      return arr;
    }
    var less = [];
    var greater = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {      
      if (arr[i] < pivot) {                      
        less.push(arr[i]);
      }
      else {
        greater.push(arr[i]);                   
      }
    }
    return quickSort(less).concat(pivot, quickSort(greater));
  }
}

var start, stop, elapsed;
var length = 10000;
var nums1 = new sortArray(length);
start = new Date().getTime();
nums1.builtInSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the JavaScript built-in Sort on " + length + " random integers is: " + elapsed + " milliseconds.");

var start, stop, elapsed;
var length = 10000;
var nums2 = new sortArray(length);
start = new Date().getTime();
nums2.quickSort(nums2.dataStore);
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Quick Sort on " + length + " random integers is: " + elapsed + " milliseconds.");

