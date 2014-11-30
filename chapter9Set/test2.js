// test to see what the result will be of "for (var member in this.dataStore)" from subset() function
function Set() {
  this.dataStore = [];
  this.add = add;
  this.subset = subset;
  
  // indexOf() function to check to make sure the requested data isn’t already in the array
  function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true;
    }
    else {
      return false;
    }
  }
  
  function subset() {
    for (var member in this.dataStore) {    
      console.log(member);
    }
  }
}

var set1 = new Set();
set1.add("Mike");
set1.add("Clayton");
set1.add("Jennifer");
set1.add("Raymond");
set1.subset();

