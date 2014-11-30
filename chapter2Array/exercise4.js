// create an object that stores individual letters in an array and has a function for displaying the letters as a single word
function lettersToWord(letter) {
  this.letters = [];
  this.add = add;
  this.displayInWord = displayInWord;
  
  function add(letter) {
    this.letters.push(letter);
  }
  
  function displayInWord() {
    console.log(this.letters.join(""));
  }
}

var words1 = new lettersToWord();
words1.add("p");
words1.add("e");
words1.add("n");
words1.add("c");
words1.add("i");
words1.add("l");
words1.displayInWord();

var words2 = new lettersToWord();
words2.add("c");
words2.add("h");
words2.add("a");
words2.add("p");
words2.add("t");
words2.add("e");
words2.add("r");
words2.displayInWord();

