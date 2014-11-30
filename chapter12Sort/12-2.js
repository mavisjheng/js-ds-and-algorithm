// selection sort: starting at the beginning of the array and comparing the first element with the remaining elements
// the smallest element is placed in the first position of the array, and the algorithm moves to the second position
// until the algorithm arrives at the next to last position in the array
// 先在未排序的資料中挑選一個最小的數放在第一個位置，再開始挑選次小的放置於第二個位置，一直下去
// 左半部表示已排序部分，右半部表示未排序部分
// 資料量小時，使用效果佳(優於bubble sort)
function sortArray(length) {
  this.dataStore = [];
  this.length = length;
  this.setData = setData;
  this.toString = toString;
  this.swap = swap;
  this.selectionSort = selectionSort;
  
  for (var i = 0; i < this.length; i++) {
    this.dataStore[i] = i;
  }
  
  function setData() {
    for (var i = 0; i < this.length; i++) {
      this.dataStore[i] = Math.floor(Math.random() * 100);            
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
  
  // inner loop looks for values that are smaller than the element currently being pointed to by the outer loop
  // inner should start from the next element of outer, compare outer with the remaining elements, since the index before outer is already in place
  function selectionSort() {
    var minIndex;
    for (var outer = 0; outer < this.length - 1; outer++) {           // until the algorithm arrives at the next to last position
      minIndex = outer;                                               // first, set the outer loop holds minimum
      for (var inner = outer + 1; inner < this.length; inner++) {     // should compare every inner item with the outer before swap, here is different from bubble sort
        if (this.dataStore[inner] < this.dataStore[minIndex]) {
          minIndex = inner;
        }
      }
      if (minIndex !== outer) {                                 // which means in current list, the outer doesn't hold the minimum value, so swap
        this.swap(this.dataStore, outer, minIndex);
        console.log((outer + 1) + " round: " + this.toString());
      }
    }
  }
}

var nums = new sortArray(15);
nums.setData();
console.log("Original Array: " + nums.toString());
console.log("Selection Sort:");
nums.selectionSort();

