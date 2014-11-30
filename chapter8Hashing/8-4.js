// modify the put() function so that it accepts both a key and data, hashes the key, and then uses that information to store the data in the table
// get() function: hash the key so that it can determine where the data is stored, and then retrieve the data from its position in the table
// patty is not stored because of collision
function HashTable() {
  this.table = new Array(137);
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
  
  function put(key, data) {
    var pos = this.betterHash(key);
    this.table[pos] = data;
  }
  
  function get(key) {
    return this.table[this.betterHash(key)];
  }
  
  function showDistri() {
    for (var i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + " → " + this.table[i]);
      }
    }
  }
}

var phoneBook = new HashTable();
phoneBook.put("jheng", "mavis");
phoneBook.put("jao", "myles");
phoneBook.put("lee", "patty");
phoneBook.put("yang", "jackie");
phoneBook.put("chu", "allison");
phoneBook.put("lai", "stanley");
phoneBook.put("lu", "richard");
phoneBook.put("pan", "amy");
phoneBook.put("chen", "vivian");
phoneBook.put("chang", "jane");
phoneBook.put("kao", "bean");
phoneBook.put("wang", "cathy");
phoneBook.showDistri();
console.log();
console.log("kao → " + phoneBook.get("kao"));
console.log("lu → " + phoneBook.get("lu"));
console.log("chang → " + phoneBook.get("chang"));

