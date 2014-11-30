// compare the time: sequential search vs. the total time of insertion sort and binary search
var arr = [];
for (var i = 0; i < 1000; i++) {
  arr[i] = Math.floor(Math.random() * 1001);
}

function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === data) {
      return i;
    }
  }
  return -1;
}

function binSearch(arr, data) {
  var lowerBound = 0;
  var upperBound =arr.length - 1;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((lowerBound + upperBound) / 2);
    if (arr[mid] > data) {
      upperBound = mid - 1;
    }
    else if (arr[mid] < data) {
      lowerBound = mid + 1;
    }
    else {
      return mid;           // found position
    }
  }
  return -1;
}

function insertionSort(arr) {
  var temp;
  for (var outer = 1; outer < arr.length; outer++) {        
    temp = arr[outer];
    for (var j = outer - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
}

var start, stop, elapsed;
var item = 677;
start = new Date().getTime();
var pos = seqSearch(arr, item);
stop = new Date().getTime();
elapsed = stop - start;
if (pos >= 0) {
   console.log("Found " + item + " at position " + pos);
   console.log("Sequential search took " + elapsed + " milliseconds");
}
else {
   console.log(item + " is not in the list");
}
console.log();

var start, stop, elapsed;
var item = 677;
start = new Date().getTime();
insertionSort(arr);
var pos = binSearch(arr, item);
stop = new Date().getTime();
elapsed = stop - start;
if (pos >= 0) {
    console.log("Found " + item + " at position " + pos);
    console.log("Insertion sort & Binary search took " + elapsed + " milliseconds");
}
else {
    console.log(item + " is not in the list");
}
//console.log(arr);

