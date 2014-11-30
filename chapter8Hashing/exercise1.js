// use linear probing to create a simple dictionary to store the definitions of words
function HashTable() {
  this.table = new Array(137);
  this.values = new Array();
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
  
  // the table array and the values array work in parallel; table array for key, values array for data
  function put(key, data) {
    var pos = this.betterHash(key);
    if (this.table[pos] === undefined) {
      this.table[pos] = key;
      this.values[pos] = data;
    }
    else {
      while (this.table[pos] !== undefined) {
        pos ++;
      }
      this.table[pos] = key;
      this.values[pos] = data;
    }
  }
  
  // because if the original pos is already stores another key-data, the incoming data will not be stored at its supposed pos
  // so need to loop through the hash table until it either finds the key or reaches a cell that is undefined, meaning the key was never placed into the hash table
  function get(key) {
    var pos = this.betterHash(key); 
    var dataStr = "";
    if (pos > -1) {
      for (var i = pos; this.table[i] !== undefined; i++) {
        if (this.table[i] === key) {         // table array stores key
          dataStr = this.values[i];          // values array stores data
        }
      }
      if (dataStr.length > 0) {              // means key matches
        return dataStr;
      }
      else {                                 // means key does't match
        return undefined;
      }
    }
  }
  
  function showDistri() {
    for (var i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + " : " + this.table[i] + " → " + this.values[i]);
      }
    }
  }
}

var simpleDict = new HashTable();
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
simpleDict.showDistri();

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

