// sequential search: unsorted order list, also called: linear search, a brute-force search technique
// begin at the first element and move to each element in the list until find the data or reach the end of list
// the seqSearch() function is not as fast as the built-in Array.indexOf() function
// self-organized data: data that is organized by the program itself while the program is running
// locate items that are frequently searched for at the beginning of list: follow 80-20 rule
function sequentialSearch() {
  this.dataStore = [];
  this.createArr = createArr;
  this.displayArr = displayArr;
  this.swap = swap;
  this.findMin = findMin;
  this.findMax = findMax;
  this.seqSearch = seqSearch;
  this.seqSearchSO = seqSearchSO;
  this.seqSearchBSO = seqSearchBSO;
  
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
  
  function swap (arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  
  function findMin() {
    var min = this.dataStore[0];
    for (var i = 1; i < this.dataStore.length; i++) {
      if (this.dataStore[i] < min) {
        min = this.dataStore[i];
      }
    }
    return min;
  }

  function findMax() {
    var max = this.dataStore[0];
    for (var i = 1; i < this.dataStore.length; i++) {
      if (this.dataStore[i] > max) {
        max = this.dataStore[i];
      }
    }
    return max;
  }
  
  // basic sequential search
  function seqSearch(item) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === item) {
        return i;
      }
    }
    return -1;
  }
  
  // seqSearch() function with self-organization
  // the most frequently searched items will be moved from wherever they were stored to the beginning of the list
  // move the found item forward one index
  function seqSearchSO(item) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === item) {
        if (i > 0) {                        // only if the found item is not at the beginning of the list will be swapped with its previous element
          swap(this.dataStore, i , i-1);             
        }
        return true;
      }
    }
    return false;
  }

  // seqSearch() function with better self-organization, follow 80-20 rule
  // wouldn’t exchangean item if it is already close to the beginning: the first 20% of list
  // swap found item only if they are located at least some specified distance away
  function seqSearchBSO(item) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === item && i > (this.dataStore.length * 0.2)) {
        swap (this.dataStore, i, 0);                     // swap with first element
        return true;
      }
      else if (this.dataStore[i] === item) {             // the found item is already close enough to the front of the list, will not swap it
        return true;
      }
    }
    return false;
  }
}

// basic sequential search
var nums1 = new sequentialSearch();
nums1.createArr(100);
console.log(nums1.displayArr());
var item = 69;
var pos = nums1.seqSearch(item);

if (pos > -1) {
  console.log(item + " is in the array at position " + pos);
}
else {
  console.log(item + " is not in the array");
}

var min = nums1.findMin();
var max = nums1.findMax();
console.log("The minimum value is: " + min);
console.log("The maximum value is: " + max);
console.log();

// sequential search with self-organization
var nums2 = new sequentialSearch();
nums2.createArr(20);
console.log(nums2.displayArr());
var item = 19;
var found = nums2.seqSearchSO(item);

if (found) {
  console.log(item + " is in the array");
}
else {
  console.log(item + " is not in the array");
}
console.log(nums2.displayArr());           // observe the found item is been moved forward one index
console.log();

// sequential search with better self-organization
var nums3 = new sequentialSearch();
nums3.createArr(20);
console.log(nums3.displayArr());
var item = 15;
var found = nums3.seqSearchBSO(item);

if (found) {
  console.log(item + " is in the array");
}
else {
  console.log(item + " is not in the array");
}
console.log(nums3.displayArr());           // observe the found item is been moved to first position if its original place is far
console.log();

