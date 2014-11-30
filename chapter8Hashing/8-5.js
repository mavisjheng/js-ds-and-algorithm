// Separate Chaining: each array element of a hash table stores another data structure, such as another array, which is then used to store keys
// multidimensional array 
// call a function that assigns an empty array to each array element of the hash table
function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.put = put;
  this.get = get;
  this.createChains = createChains;
  this.showDistri = showDistri;
  
  function createChains() {
    for (var i = 0; i < this.table.length; i++) {           // create another array for each array element no matter it will store data or not
        this.table[i] = new Array();
    }
  }
  
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
  
  // if the first cell already has data in it, put() searches for the first open cell to store another data
  function put(key, data) {
    var pos = this.betterHash(key);
    var index = 0;
    if (this.table[pos][index] === undefined) {             // nothing stored yet
      this.table[pos][index] = data;                        // so start store data at first cell: this.table[pos][index]
    }
    else {
      while (this.table[pos][index] !== undefined) {        // aleready store data so try to find the first open cell to store another data
        index++;
      }
      this.table[pos][index] = data;                         
    }
  }
  
  function get(key) {
    var pos = this.betterHash(key);
    var index = 0;
    var dataStr = "";
    if (this.table[pos][index] === undefined) {             // no such key
      return undefined;
    }
    else {
      while (this.table[pos][index] !== undefined) {
        dataStr += this.table[pos][index] + ", ";           // concatenate every data into a string
        index++;
      }
      return dataStr;
    }
  }
  
  // showDistri() need to recognize that the hash table is now a multidimensional array
  // if (this.table[i] !== undefined) will show every table[i], even there are no data in that table[i]
  // because every table[i] is not undefined, every table[i] has an empty array which create by cteateChains()
  function showDistri() {
    for (var i = 0; i < this.table.length; i++) {
      if (this.table[i][0] !== undefined) {            
        console.log(i + " → " + this.table[i]);
      }
    }
    // console.log(this.table[4]);                              // the result here will be [], not undefined
  }
}

var lastNameBook = new HashTable();
lastNameBook.createChains();
lastNameBook.put("jheng", "mavis");
lastNameBook.put("jao", "myles");
lastNameBook.put("chen", "chaolien");
lastNameBook.put("yang", "jackie");
lastNameBook.put("chen", "howard");
lastNameBook.put("chu", "allison");
lastNameBook.put("lai", "stanley");
lastNameBook.put("pan", "richard");
lastNameBook.put("pan", "amy");
lastNameBook.put("chen", "vivian");
lastNameBook.put("chu", "jane");
lastNameBook.put("kao", "bean");
lastNameBook.put("lin", "phoebe");
lastNameBook.put("lin", "hans");
lastNameBook.put("yang", "cathy");
lastNameBook.showDistri();
console.log();
console.log("pan: " + lastNameBook.get("pan"));
console.log("chen: " + lastNameBook.get("chen"));
console.log("lin: " + lastNameBook.get("lin"));
console.log("huang: " + lastNameBook.get("huang"));
console.log("chu: " + lastNameBook.get("chu"));
console.log("yang: " + lastNameBook.get("yang"));
console.log("jao: " + lastNameBook.get("jao"));
console.log("jheng: " + lastNameBook.get("jheng"));
console.log("wu: " + lastNameBook.get("wu"));

