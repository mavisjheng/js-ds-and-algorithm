// using hashing that reads a text file and compiles a list of the words in the file with the number of times each word appears in the file
function HashTable() {
  this.table = new Array(137);               // for word
  this.occurrence = [];                      // for occurrence of word
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.put = put;
  this.get = get;
  this.showDistri = showDistri;
  
  function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }
  
   function betterHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);           // or: total = 37 * total + data.charCodeAt(i);
      total *= 37;
    }
    return total % this.table.length;
  }
  
  function put(text) {
    var words = text.split(" ");
    for (var i = 0; i < words.length; i++) {         // compare the word to every key to see whether the word already been stored or not
      var pos = this.betterHash(words[i]);
      if (this.get(words[i]) !== undefined) {        // already stores this word in the array, occurrence + 1
        this.occurrence[pos]++;
      }
      else {
        this.table[pos] = words[i];                  // word's first show so put it into table array
        this.occurrence[pos] = 1;                    // word's first show so occurrence is 1
      }
    }
  }
  
  function get(key) {
    return this.table[this.betterHash(key)];
  }
  
  function showDistri() {
    for (var i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + " : " + this.table[i] + " → " + this.occurrence[i]);
      }
    }
  }
}

var text1 = new HashTable();
text1.put("time time time time fly fly fly the brown fox jumped over the black fox jack is taller than mary so mary is not taller than jack");
text1.showDistri();

