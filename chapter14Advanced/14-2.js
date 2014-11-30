// Longest Common Substring, which is different from Longest Common Subsequence
// draw a two-dimensional array will be much clear
// because lcsArray[k][s] = lcsArray[k-1][s-1] + 1, so the first elements of the array are always set to 0
// max and index are used to determine where to start retrieving the longest common substring and how many characters to retrieve
function lcs(word1, word2) {
   var max = 0;                               // the number of characters of Longest Common Substring
   var index = 0;
  
   var lcsArray = new Array(word1.length + 1);
   for (var i = 0; i <= word1.length; i++) {
      lcsArray[i] = new Array(word2.length + 1);
      for (var j = 0; j <= word2.length; j++) {
         lcsArray[i][j] = 0;
      }
   }
   for (var k = 0; k <= word1.length; k++) {
      for (var s = 0; s <= word2.length; s++) {
         if (k === 0 || s === 0) {
            lcsArray[k][s] = 0;
         }
         else {
            if (word1[k-1] === word2[s-1]) {
               lcsArray[k][s] = lcsArray[k-1][s-1] + 1;
            }
            else {
               lcsArray[k][s] = 0;
            }
         }
         if (max < lcsArray[k][s]) {            
            max = lcsArray[k][s];
            index = k;
         }
      }
   }
  
   var str = "";
   if (max === 0) {
     console.log("No Substring in Common");
      return false;
   }
   else {
     while (max > 0) {
       str += word1[index - max];            // index - max is where to start retrieving
       max--;                                // max is how many characters to retrieve
     }
     return str;
   }
}

console.log(lcs("please, peter go swimming", "i’m peter goliswi"));
console.log(lcs("abbcc", "dbbcc"));
console.log(lcs("i’m peter goliswi", "please, peter go swimming"));

