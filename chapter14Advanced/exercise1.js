// write a program that uses a brute-force technique to find the longest common substring
function lcs(word1, word2) {
  var max = 0;
  var currentMax = 0;
  var startPoint = 0;
  
  for (var i = 0; i < word1.length; i++) {
    startPoint = i;
    var j = 0;
    while (i < word1.length && j < word2.length) {
      if (word1[i] !== word2[j]) {
        j++;
      }
      else {
        i++;
        j++;
        currentMax++;
      }
    }
    if (max < currentMax) {            
      max = currentMax;
    }
  }
  console.log(max);
  
  var str = "";
  if (max === 0) {
    console.log("No Substring in Common");
    return false;
  }
  else {
    while (max > 0) {
      str += word1[startPoint];            // index - max is where to start retrieving
      startPoint++;
      max--;                          // max is how many characters to retrieve
    }
    return str;
  }
}

console.log(lcs("wonderfuldayilymilk", "blackday"));
//console.log(lcs("please, peter go swimming", "i’m peter goliswi"));
//console.log(lcs("abcdefghijk", "bcdefghijkl"));
//console.log(lcs("i’m peter goliswi", "please, peter go swimming"));

