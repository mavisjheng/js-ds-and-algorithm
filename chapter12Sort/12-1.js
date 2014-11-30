// bubble sort: repeatedly step through the list to be sorted, compare each pair of adjacent items and swap them if they are in the wrong order
// one of the slowest sorting algorithms
// 比較之回合數 = 資料數(n)-1: outer < arr.length - 1
// 每一輪執行後會將最大的數移到陣列最後面，而較小的數則逐漸的往陣列前移動 (可觀察每輪執行結果)
// 所以執行完第一輪時最後一個元素將會是最大值, 則第二輪時就無需再比較上一輪的最後一個元素: inner < length - outer, optimize time
// flag: use flag to see if swap occurrs this round, if flag keeps 0 which means the sort is already complete, 
// can skip the remaining sorting to save time(no need to keep sorting until the outer loop finished), optimize time
function sortArray(length) {
  this.dataStore = [];
  this.length = length;
  this.setData = setData;
  this.toString = toString;
  this.swap = swap;
  this.bubbleSort = bubbleSort;
  
  for (var i = 0; i < this.length; i++) {
    this.dataStore[i] = i;
  }
  
  function setData() {
    for (var i = 0; i < this.length; i++) {
      this.dataStore[i] = Math.floor(Math.random() * 100);        // 0 ~ 99    
      // this.dataStore[i] = Math.floor(Math.random() * (this.length + 1));
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
    var flag = 1;                                                             // flag is used to see if further sort needed
    for (var outer = 0; outer < this.length - 1 && flag; outer++) {           // outer loop, moves through the array item by item
      flag = 0;
      for (var inner = 0; inner < this.length - 1 - outer; inner++) {         // inner loop, used to compare adjacent items
        if (this.dataStore[inner] > this.dataStore[inner + 1]) {              // if in the wrong order then swap
          this.swap (this.dataStore, inner, inner+1); 
          flag = 1;                                                           // swap occurrs this round
        }
      }
      console.log((outer + 1) + " round: " + this.toString() + ", flag is: " + flag);         // display the current state of the array as the function proceeds
    }
  }
}

var nums = new sortArray(15);
nums.setData();
console.log("Original Array: " + nums.toString());
console.log("Bubble Sort:");
nums.bubbleSort();

