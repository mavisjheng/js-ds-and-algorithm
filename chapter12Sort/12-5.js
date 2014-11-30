// shell sort: based on the insertion sort, it compares distant elements first, rather than adjacent elements
// insertion is a kind of shell sort whose gap is 1, when the gap decreases to 1, it is a standard insertion sort
// the gap sequence can be defined dynamically, or predefine the gap sequenc, did both here and compare elapsed time
// eliminate large amounts of disorder quickly, later stages have less work, this is where the algorithm gains efficiency over insertion sort
// outer loop: control gap sequence between compared elements, until it becomes 1
// middle loop: steps along elements, inner loop: compares each pair of elements that is separated by gap and swap
function sortArray(length) {
  this.dataStore = [];
  this.length = length;
  this.setData = setData;
  this.toString = toString;
  this.shellSortGapDy = shellSortGapDy;
  this.shellSortGapPre = shellSortGapPre;
  
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
  
  // predefined gap sequence, gap is chosen from gaps[]
  // this.gaps = [5, 3, 1];
  this.gaps = [500, 250, 125, 62, 31, 15, 7, 3, 1];                    // for count time elapsed when arr.length === 1000
  this.gapsCiura = [701, 301, 132, 57, 23, 10, 4, 1];
  function shellSortGapPre() {
    var temp;
    for (var g = 0; g < this.gaps.length; g++) {
      for (var i = this.gaps[g]; i < this.length; i++) {
        temp = this.dataStore[i];
        for (var j = i; j >= this.gaps[g] && temp < this.dataStore[j - this.gaps[g]]; j -= this.gaps[g]) {
          this.dataStore[j] = this.dataStore[j - this.gaps[g]];
        }
        this.dataStore[j] = temp;
      }
      //console.log("gap " + this.gaps[g] + ": " + this.toString());
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
      console.log("gap " + gap + ": " + this.toString());
    }
  }
}

var nums1 = new sortArray(15);
nums1.setData();
console.log("Original Array: " + nums1.toString());
console.log("During Shellsort (Dynamic Gap):");
nums1.shellSortGapDy();
console.log("After Shellsort: " + nums1.toString());
console.log();

var nums2 = new sortArray(1000);
var start, stop, elapsed;

nums2.setData();
start = new Date().getTime();
nums2.shellSortGapPre();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Shellsort with hard-coded gap sequence on " + nums2.length + " elements: " + elapsed + " ms.");

nums2.setData();
start = new Date().getTime();
nums2.shellSortGapDy();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Shellsort with dynamic gap sequence on " + nums2.length + " elements: " + elapsed + " ms.");

