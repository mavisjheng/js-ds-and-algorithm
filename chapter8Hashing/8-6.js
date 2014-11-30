// Linear Probing: the program simply looks to see if the next element of the hash table is empty. If so, the key is placed in that element. 
// If the element is not empty, the program continues to search for an empty hash-table element until one is found.
// add a second array to store values. The table array and the values array work in parallel; table array for key, values array for data
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
        if (this.table[i] === key) {                 // table array stores key
          dataStr += this.values[i] + ", ";          // values array stores data
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

var lastNameBook = new HashTable();
lastNameBook.put("jheng", "mavis");
lastNameBook.put("jao", "myles");
lastNameBook.put("chen", "chaolien");
lastNameBook.put("yang", "jackie");
lastNameBook.put("chen", "howard");
lastNameBook.put("chu", "allison");
lastNameBook.put("lai", "stanley");
lastNameBook.put("pan", "richard");
lastNameBook.put("pan", "alice");
lastNameBook.put("pan", "kai");
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

