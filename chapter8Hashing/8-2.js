// a better hash function of 8-1.js, try to avoid collision
// this adds a step by multiplying the resulting total by a prime constant: 37
function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.put = put;
  this.showDistri = showDistri;
  
  function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);           // sum the ASCII value of the letters in the key
    }
    console.log("sum of character’s ASCII value: " + data + " → " + total);
    return total % this.table.length;        // modular hashing
  }
  
  function betterHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);           // or: total = 37 * total + data.charCodeAt(i);
      total *= 37;
    }
    return total % this.table.length;
  }
  
  function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
  }
  
  function showDistri() {
    for (var i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + " → " + this.table[i]);
      }
    }
  }
}

var names = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var namesHashTable = new HashTable();
for (var i = 0; i < names.length; i++) {
  namesHashTable.put(names[i]);
}
namesHashTable.showDistri();

