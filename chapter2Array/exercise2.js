// store a set of words in an array and display the contents both forward and backward
function displayWord(words) {
  var wordsForward = [];
  var wordsBackward = [];
  
  for(var i = 0; i < words.length; i++) {
    wordsForward.push(words[i]);
  }
  console.log(wordsForward.toString());
  
  for(var j = words.length - 1; j >= 0; j--) {
    wordsBackward.push(words[j]);
  }
  console.log(wordsBackward.join());
}

var words = ["animal", "angry", "apple", "banana", "baseball", "boy", "cancer", "cell", "correct"];
displayWord(words);

