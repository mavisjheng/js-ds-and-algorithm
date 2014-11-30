// create an array of 1,000 integers sorted in reverse numerical order, runs each sorting algorithm with this array and timing
function sortArray(length) {
  this.dataStore = [];
  this.length = length;
  this.toString = toString;
  
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;
  this.shellSortGapDy = shellSortGapDy;
  this.mergeSort = mergeSort;
  this.mergeArrays = mergeArrays;
  this.quickSort = quickSort;

  var j = this.length;
  for (var i = 0; i < this.length; i++) {
    this.dataStore[i] = j;
    j--;
  }
  
  function toString() {
    var str = "";
    for (var i = 0; i < this.length; i++) {
      str += this.dataStore[i] + " ";
    }
    return str;
  }

  function bubbleSort() {
    var flag = 1;                                                 
    for (var outer = 0; outer < this.length - 1 && flag; outer++) {          
      flag = 0;
      for (var inner = 0; inner < this.length - 1 - outer; inner++) {           
        if (this.dataStore[inner] > this.dataStore[inner+1]) {            
          var temp = this.dataStore[inner];
          this.dataStore[inner] = this.dataStore[inner+1];
          this.dataStore[inner+1] = temp;
          flag = 1;                                     
        }
      } 
    }
  }
  
  function selectionSort() {
    var minIndex;
    for (var outer = 0; outer < this.length - 1; outer++) {          
      minIndex = outer;                                              
      for (var inner = outer + 1; inner < this.length; inner++) {     
        if (this.dataStore[inner] < this.dataStore[minIndex]) {
          minIndex = inner;
        }
      }
      if (minIndex !== outer) {                                
        var temp = this.dataStore[outer];
        this.dataStore[outer] = this.dataStore[minIndex];
        this.dataStore[minIndex] = temp;
      }
    }
  }
  
  function insertionSort() {
    var temp;
    for (var outer = 1; outer < this.length; outer++) {        
      temp = this.dataStore[outer];
      for (var inner = outer - 1; inner >= 0 && this.dataStore[inner] > temp; inner--) {
        this.dataStore[inner+1] = this.dataStore[inner];
      }
      this.dataStore[inner+1] = temp;
    }
  }
  
  function shellSortGapDy() {
    var temp;
    var gap = parseInt(this.length / 2);    
    for ( ; gap > 0; gap = parseInt(gap / 2)) {            
      for (var i = gap; i < this.length; i++) {             
        temp = this.dataStore[i];
        for (var j = i; j >= gap && temp < this.dataStore[j - gap]; j -= gap) {     
          this.dataStore[j] = this.dataStore[j - gap];
        }
        this.dataStore[j] = temp;
      }
    }
  }
  
  function mergeSort(arr) {
    if (arr.length > 1) {         
      var leftData = [];
      var rightData = [];
      var middle = parseInt(arr.length / 2);
      
      for (var i = 0; i < middle; i++) {
        leftData[i] = arr[i];
      }
      for (var j = middle; j < arr.length; j++) {
        rightData[j - middle] = arr[j];
      }
      
      leftData = mergeSort(leftData);               
      rightData = mergeSort(rightData);            
      return mergeArrays(leftData, rightData);      
    }
    return arr;                    
  }
  
  function mergeArrays(leftData, rightData) {
    var sortedArr = [];
    var leftDataIndex = 0;
    var rightDataIndex = 0;
    
    for (var i = 0; i < leftData.length + rightData.length; i++) {
      if (leftDataIndex === leftData.length) {
        sortedArr.push(rightData[rightDataIndex++]);
      }
      else if (rightDataIndex === rightData.length) {
        sortedArr.push(leftData[leftDataIndex++]);
      }
      else if (leftData[leftDataIndex] < rightData[rightDataIndex]) {
        sortedArr.push(leftData[leftDataIndex++]);
      }
      else {
        sortedArr.push(rightData[rightDataIndex++]);
      }
    }
    return sortedArr;
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
var length = 1000;
var nums1 = new sortArray(length);
start = new Date().getTime();
nums1.bubbleSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Bubble Sort on " + length + " integers in reverse numerical order is: " + elapsed + " milliseconds.");

var start, stop, elapsed;
var length = 1000;
var nums2 = new sortArray(length);
start = new Date().getTime();
nums2.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Selection Sort on " + length + " integers in reverse numerical order is: " + elapsed + " milliseconds.");

var start, stop, elapsed;
var length = 1000;
var nums3 = new sortArray(length);
start = new Date().getTime();
nums3.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Insertion Sort on " + length + " integers in reverse numerical order is: " + elapsed + " milliseconds.");
console.log();

var start, stop, elapsed;
var length = 1000;
var nums4 = new sortArray(length);
start = new Date().getTime();
nums4.shellSortGapDy();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Shell Sort on " + length + " integers in reverse numerical order is: " + elapsed + " milliseconds.");

var start, stop, elapsed;
var length = 1000;
var nums5 = new sortArray(length);
start = new Date().getTime();
nums5.mergeSort(nums5.dataStore);
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Merge Sort on " + length + " integers in reverse numerical order is: " + elapsed + " milliseconds.");

var start, stop, elapsed;
var length = 1000;
var nums6 = new sortArray(length);
start = new Date().getTime();
nums6.quickSort(nums6.dataStore);
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Quick Sort on " + length + " integers in reverse numerical order is: " + elapsed + " milliseconds.");

