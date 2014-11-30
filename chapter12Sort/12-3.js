// insertion sort: works not by making data exchanges, but by moving larger elements to the right to make room for the smaller element on the left side of the array
// 依序由未排序中的第一筆(outer loop 正處理的值)，插入到已排序中的適當位置
// 插入時由右而左比較(inner loop)，直到遇到第一個比正處理的值小的值，再插入
// 比較時，若遇到的值比正處理的值大或相等，則將值往右移
// 任何未排序前之第一筆資料可視為已排序好之資料 outer loop starts from index 1, doesn't need swap()
function sortArray(length) {
  this.dataStore = [];
  this.length = length;
  this.setData = setData;
  this.toString = toString;
  this.insertionSort = insertionSort;
  
  for (var i = 0; i < this.length; i++) {
    this.dataStore[i] = i;
  }
  
  function setData() {
    for (var i = 0; i < this.length; i++) {
      this.dataStore[i] = Math.floor(Math.random() * 100);
    }
  }
  
  function toString() {
    var str = "";
    for (var i = 0; i < this.length; i++) {
      str += this.dataStore[i] + " ";
    }
    return str;
  }
  
  function insertionSort() {
    var temp;
    for (var outer = 1; outer < this.length; outer++) {        
      temp = this.dataStore[outer];
      for (var j = outer - 1; j >= 0 && this.dataStore[j] > temp; j--) {
        this.dataStore[j+1] = this.dataStore[j];
        //console.log("j is: " + j);
      }
      this.dataStore[j+1] = temp;               // now this.dataStore[j] < temp
      console.log(outer + " round: " + this.toString());
    }
  }
}

var nums = new sortArray(15);
nums.setData();
console.log("Original Array: " + nums.toString());
console.log("Insertion Sort:");
nums.insertionSort();

