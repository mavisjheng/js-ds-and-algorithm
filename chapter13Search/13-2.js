// binary search: sorted order list
// choose a midpoint by adjusting the lower bound or the upper bound with each iteration of the loop
function binarySearch() {
  this.dataStore = [];
  this.createArr = createArr;
  this.displayArr = displayArr;
  this.binSearch = binSearch;
  this.countOccu = countOccu;
  this.insertionSort = insertionSort;
  
  function createArr(length) {
    for (var i = 0; i < length; i++) {
      this.dataStore[i] = Math.floor(Math.random() * (length + 1));
    }
  }
  
  function displayArr() {
    var str = "";
    for (var i = 0; i < this.dataStore.length; i++) {
      str += this.dataStore[i] + " ";
      if (i !== 0 && i % 10 === 0) {
        str += "\n";
      }
    }
    return str;
  }
  
  function binSearch(item) {
    var lowerBound = 0;
    var upperBound = this.dataStore.length - 1;
    while (lowerBound <= upperBound) {
      var mid = Math.floor((lowerBound + upperBound) / 2);
      //console.log("current midpoint: " + mid);
      if (this.dataStore[mid] > item) {
        upperBound = mid - 1;
      }
      else if (this.dataStore[mid] < item) {
        lowerBound = mid + 1;
      }
      else {
        return mid;           // found position
      }
    }
    return -1;
  }
  
  // because of sorted order, other occurrences of the same value will be either the immediate left or the immediate right of the found value’s position
  function countOccu(item) {
    var count = 0;
    var pos = this.binSearch(item);
    if (pos > -1) {
      count++;
      for (var i = pos - 1; i > 0; i--) {            // search the immediate left
        if (this.dataStore[i] === item) {
          count++;
        }
        else {
          break;
        }
      }
      for (var j = pos + 1; j < this.dataStore.length; j++) {   // search the immediate right
        if (this.dataStore[j] === item) {
          count++;
        }
        else {
          break;
        }
      }
    }
    return count;
  }
  
  function insertionSort() {
    var temp;
    for (var outer = 1; outer < this.dataStore.length; outer++) {        
      temp = this.dataStore[outer];
      for (var j = outer - 1; j >= 0 && this.dataStore[j] > temp; j--) {
        this.dataStore[j+1] = this.dataStore[j];
      }
      this.dataStore[j+1] = temp;
    }
  }
}

var nums1 = new binarySearch();
nums1.createArr(50);
nums1.insertionSort();
console.log(nums1.displayArr());
var item = 27;
var pos = nums1.binSearch(item);
var occurrence = nums1.countOccu(item);

if (pos > -1) {
  console.log(item + " is in the array at position " + pos + ", and its occurrence is " + occurrence);
}
else {
  console.log(item + " is not in the array");
}

