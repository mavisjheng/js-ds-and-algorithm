// quick sort:  one of the fastest sorting algorithms for large data sets, Divide and Conquer
// recursively breaks list into smaller sublists and larger sublists by selecting one element of the list as a pivot: 固定位置-第一個數值
// pivot 可以是：固定位置 / 亂數選擇 / 中位數
// create other arrays to store less and greater, not in-place
function sortArray(length) {
  this.dataStore = [];
  this.length = length;
  this.setData = setData;
  this.toString = toString;
  this.quickSort = quickSort;
  
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
  
  function quickSort(arr) {
    if (arr.length < 2) {         // 如果資料只有1筆,直接回傳
      return arr;
    }
    var less = [];
    var greater = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {       // compare every element with pivot
      if (arr[i] < pivot) {                      // less than the pivot to less[]
        less.push(arr[i]);
      }
      else {
        greater.push(arr[i]);                    // greater than the pivot to greater[]
      }
    }
    return quickSort(less).concat(pivot, quickSort(greater));
  }
}

var nums = new sortArray(6);
nums.setData();
console.log("Original Array: " + nums.toString());
console.log("Quick Sort:");
console.log(nums.quickSort(nums.dataStore));

