// use separate chaining to create a simple dictionary to store the definitions of words
// however, land and cite will have the same key after hash function
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

var simpleDict = new HashTable();
simpleDict.createChains();
simpleDict.put("money", "any circulating medium of exchange");
simpleDict.put("land", "any part of the earth's surface not covered by a body of water");
simpleDict.put("information", "knowledge communicated or received concerning a particular fact or circumstance");
simpleDict.put("speech", "a form of communication in spoken language, made by a speaker before an audience for a given purpose");
simpleDict.put("perfume", "a substance, extract, or preparation for diffusing or imparting an agreeable or attractive smell");
simpleDict.put("theft", "the wrongful taking and carrying away of the personal goods or property of another");
simpleDict.put("fire", "a state, process, or instance of combustion in which fuel or other material is ignited and combined with oxygen");
simpleDict.put("animal", "any such living thing other than a human being");
simpleDict.put("butter", "the fatty portion of milk, separating as a soft whitish or yellowish solid when milk or cream is agitated or churned");
simpleDict.put("rough", "having a coarse or uneven surface");
simpleDict.put("calendar", "a table or register with the days of each month and week in a year");
simpleDict.put("type", "a number of things or persons sharing a particular characteristic");
simpleDict.put("great", "unusually or comparatively large in size or dimensions");
simpleDict.put("damage", "injury or harm that reduces value or usefulness");
simpleDict.put("sell", "to transfer (goods) to or render (services) for another in exchange for money");
simpleDict.put("out", "away from, or not in, the normal or usual place, position, state");
simpleDict.put("family", "a basic social unit consisting of parents and their children");
simpleDict.put("friend", "a person attached to another by feelings of affection or personal regard");
simpleDict.put("roommate", "a person who is assigned to share or shares a room or apartment with another or others");
simpleDict.put("kick", "to strike with the foot or feet");
simpleDict.put("null", "being or amounting to nothing; nil; lacking; nonexistent");
simpleDict.put("treasure", "wealth or riches stored or accumulated, especially in the form of precious metals, money, jewels, or plate");
simpleDict.put("cite", "to quote (a passage, book, author, etc.), especially as an authority");
simpleDict.put("calculator", "a small electronic or mechanical device that performs calculations");
simpleDict.put("table", "an article of furniture consisting of a flat, slablike top supported on one or more legs or other supports");
//simpleDict.showDistri();

console.log();
console.log("treasure: " + simpleDict.get("treasure"));
console.log("family: " + simpleDict.get("family"));
console.log("information: " + simpleDict.get("information"));
console.log("rough: " + simpleDict.get("rough"));
console.log("case: " + simpleDict.get("case"));
console.log("cite: " + simpleDict.get("cite"));
console.log("fire: " + simpleDict.get("fire"));
console.log("null: " + simpleDict.get("null"));
console.log("great: " + simpleDict.get("great"));
console.log("rose: " + simpleDict.get("rose"));
console.log("speech: " + simpleDict.get("speech"));

