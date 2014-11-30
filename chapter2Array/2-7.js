// reduce() function applies a function to an accumulator and the successive elements of an array until the end of the array is reached
function addAll(currentTotal, currentValue) {
  return currentTotal + currentValue;
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = nums.reduce(addAll);
console.log(total);

// reduce() with strings to perform concatenation
function concat(accumulatedString, currentString) {
  return accumulatedString + currentString;
}

var str = ["the ", "brown ", "fox ", "jumps ", "over ", "the ", "pig "];
var concatStr = str.reduce(concat);
console.log(concatStr);

// reduceRight() function works from the righthand side of the array to the left
var concatFromRight = str.reduceRight(concat);
console.log(concatFromRight);