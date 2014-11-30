// Timing Comparisons of the Basic Sorting Algorithms: bubbleSort, selectionSort, insertionSort
// put swap() inside sort function to avoid bubbleSort and selectionSort calling swap() as another function
function sortArray(length) {
  this.dataStore = [];
  this.length = length;
  this.setData = setData;
  this.toString = toString;
  this.swap = swap;
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;
  
  for (var i = 0; i < this.length; i++) {
    this.dataStore[i] = i;
  }
  
  function setData() {
    for (var i = 0; i < this.length; i++) {     
      this.dataStore[i] = Math.floor(Math.random() * (this.length + 1));
    }
  }
  
  function toString() {
    var str = "";
    for (var i = 0; i < this.length; i++) {
      str += this.dataStore[i] + " ";
    }
    return str;
  }
  
  function swap (arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  
  function bubbleSort() {
    var flag = 1;                                                 
    for (var outer = 0; outer < this.length - 1 && flag; outer++) {          
      flag = 0;
      for (var inner = 0; inner < this.length - 1 - outer; inner++) {           
        if (this.dataStore[inner] > this.dataStore[inner+1]) {            
          //this.swap (this.dataStore, inner, inner+1);
          var temp = this.dataStore[inner];
          this.dataStore[inner] = this.dataStore[inner+1];
          this.dataStore[inner+1] = temp;
          flag = 1;                                     
        }
      }
      //console.log((outer + 1) + " round: " + this.toString() + ", flag is: " + flag);     
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
        //this.swap(this.dataStore, outer, minIndex);
        var temp = this.dataStore[outer];
        this.dataStore[outer] = this.dataStore[minIndex];
        this.dataStore[minIndex] = temp;
        //console.log((outer + 1) + " round: " + this.toString());
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
      //console.log(outer + " round: " + this.toString());
    }
  }
}

var start, stop, elapsed;
var length = 20000;
var nums = new sortArray(length);
nums.setData();

start = new Date().getTime();
nums.bubbleSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Bubble Sort on " + length + " elements is: " + elapsed + " milliseconds.");

start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Selection Sort on " + length + " elements is: " + elapsed + " milliseconds.");

start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the Insertion Sort on " + length + " elements is: " + elapsed + " milliseconds.");

