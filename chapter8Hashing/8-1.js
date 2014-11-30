// the key is mapped into a number in the range of 0 through the hash table size, using a hash function
// sum the ASCII value of the letters in the key, the hash value is the sum modulo the array size
// this hash function causes collision since not all the names are displayed from the hash table: Clayton and Raymond hash to the same value
function HashTable() {
  this.table = new Array(137);               // array size should always be a prime number to avoid collision
  this.simpleHash = simpleHash;
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
  
  function put(data) {                       // put() function receives the array index value from the simpleHash() function and stores the data element in that position
    var pos = this.simpleHash(data);         
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

