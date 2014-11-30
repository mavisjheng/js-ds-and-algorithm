// create a function that finds the second-smallest element in a list, also the third-smallest, fourth-smallest, and so on
// test functions with a list of at least 1,000 elements, both numbers and text
var arr = [];

for (var i = 0; i < 50; i++) {
  arr[i] = Math.floor(Math.random() * 101);
}

function displayArr(arr) {
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    str += arr[i] + " ";
    if (i !== 0 && i % 10 === 0) {
      str += "\n";
    }
  }
  return str;
}

function findMins(arr) {
  // smallest element
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("The smallest value is: " + min);
  
  // second-smallest element
  var s = 0;
  while (arr[s] === min) {              // while loop is to avoid the error caused by if the first element is min, find another element as default secMin
    s++;
  }
  var secMin = arr[s];
  for (s++; s < arr.length; s++) {
    if (arr[s] < secMin && arr[s] !== min) {
      secMin = arr[s];
    }
  }
  console.log("The second-smallest value is: " + secMin);
  
  // third-smallest
  var k = 0;
  while (arr[k] === min || arr[k] === secMin) {    
    k++;
  }
  var thirdMin = arr[k];
  for (k++; k < arr.length; k++) {
    if (arr[k] < thirdMin && arr[k] !== min && arr[k] !== secMin) {
      thirdMin = arr[k];
    }
  }
  console.log("The third-smallest value is: " + thirdMin);
  
  // fourth-smallest
  var p = 0;
  while (arr[p] === min || arr[p] === secMin || arr[p] === thirdMin) {    
    p++;
  }
  var fourthMin = arr[p];
  for (p++; p < arr.length; p++) {
    if (arr[p] < fourthMin && arr[p] !== min && arr[p] !== secMin && arr[p] !== thirdMin) {
      fourthMin = arr[p];
    }
  }
  console.log("The fourth-smallest value is: " + fourthMin);
}

console.log(displayArr(arr));
findMins(arr);

