// We can verify that an object is an array by calling the Array.isArray() function
var number = 3;
var numbers = [3, 6, 9, 12, 15];
if(Array.isArray(numbers)) {
  console.log("numbers[] is array");
}

if(!Array.isArray(number)) {
  console.log("number is not array");
}

// split() function breaks up a string at a common delimiter, such as a space for each word
// and creates an array consisting of the individual parts of the string
var sentence = "JavaScript does not have any print or output functions";
var words = sentence.split(" ");
for(var i = 0; i < words.length; i++) {
  console.log("word " + (i+1) + ": " + words[i]);
}

// shallow copy: when you make a change to the original array, that change is reflected in the other array as well
// make a deep copy (instead of shallow copy), so that each of the original array’s elements is actually copied to the new array’s elements
function copyArr(arr1, arr2) {
  for(var i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
}

var num = [];
var sameNum = [];
for(var i = 0; i < 100; i++) {
  num[i] = i+1;
}

copyArr(num, sameNum);
console.log("num[99] is " + num[99]);
console.log("sameNum[99] is " + sameNum[99]);
num[99] = 999;
console.log("num[99] is " + num[99]);
console.log("sameNum[99] is " + sameNum[99]);

