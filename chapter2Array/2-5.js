// forEach() function takes a function as an argument and applies the called function to each element of an array
var nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function square(number) {
  console.log(number, number * number);
}
nums1.forEach(square);

// every() function applies a Boolean function to an array and returns true if the function can return true for every element in the array
var num2 = [2, 4, 6, 8, 9];
function isEven(num) {
  return num % 2 === 0;
}
var even = num2.every(isEven);
if(even) {
  console.log("all numbers are even");
}
else {
  console.log("not all numbers are even");
}

// some() function takes a Boolean function and return true if at least one of the elements in the array meets the criterion of the Boolean function
var num3 = [1, 4, 3, 7, 9];
function someIsEven(num) {
  return num % 2 === 0;
}
var someEven = num3.some(someIsEven);
if(someEven) {
  console.log("some numbers are even");
}
else {
  console.log("no numbers are even");
}
