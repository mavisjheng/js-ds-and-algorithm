// test showAll() funciton in different ways
function Dictionary() {
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;

  function add(key, value) {
    this.dataStore[key] = value;
  }
  
  function find(key) {
    return this.dataStore[key];
  }
  
  function remove(key) {
    delete this.dataStore[key];
  }
  
  function showAll() {
   for (var key in Object.keys(this.dataStore)) {
      console.log(key + " -> " + this.dataStore[key]);
   }
}
}

var phoneBook = new Dictionary();
phoneBook.add("Nike", "123");
phoneBook.add("David", "873");
phoneBook.add("Cynthia", "346");
phoneBook.add("Carol", "761");
console.log("Cynthia's phone: " + phoneBook.find("Cynthia"));
phoneBook.remove("Cynthia");
phoneBook.showAll();
console.log(Object.keys(phoneBook.dataStore));

