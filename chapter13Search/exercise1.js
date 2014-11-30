// sequential search algorithm always finds the first occurrence of an element in list
// rewrite the algorithm so that the last occurrence of an element is returned
function sequentialSearch() {
  this.dataStore = [];
  this.createArr = createArr;
  this.displayArr = displayArr;
  this.seqSearch = seqSearch;
  
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
  
  // search from end of list to the front
  function seqSearch(item) {
    for (var i = this.dataStore.length - 1; i >= 0; i--) {
      if (this.dataStore[i] === item) {
        return i;
      }
    }
    return -1;
  }
}

var nums1 = new sequentialSearch();
nums1.createArr(100);
console.log(nums1.displayArr());
var item = 99;
var pos = nums1.seqSearch(item);

if (pos > -1) {
  console.log(item + " is in the array at position " + pos);
}
else {
  console.log(item + " is not in the array");
}

