// a set is a collection of unique elements: the members of a set are unordered and that no member can occur in a set more than once
function Set() {
  this.dataStore = [];
  this.size = size;
  this.add = add;
  this.remove = remove;
  this.display = display;
  this.contains = contains;
  this.union = union;
  this.intersect = intersect;
  this.difference = difference;
  this.subset = subset;
  
  function size() {
    return this.dataStore.length;
  }
  
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
  
  // first check to see if the requested data is in the array
  function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
      this.dataStore.splice(pos, 1);
      return true;
    }
    else {
      return false;
    }
  }
  
  // contains() function which looks to see if a specified member is part of a set
  // helper function for union()
  function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
      return true;
    }
    else {
      return false;
    }
  }
  
  // a new set is obtained by combining the members of one set with the members of another set
  function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {          // builds a new set by adding all the members of the first set
      tempSet.add(this.dataStore[i]);
    }
    for (var j = 0; j < set.dataStore.length; j++) {
      if (!tempSet.contains(set.dataStore[j])) {               // checks each member of the second set to see whether the member is already a member of the first set
        tempSet.add(set.dataStore[j]);
      }
    }
    return tempSet;
  }
  
  // each time a member of the first set is found to be a member of the second set, it is added to a new set
  function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
      if (set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }
    return tempSet;
  }
  
  function subset(set) {
    if (this.size() > set.size()) {           // if the subset length is greater than the original set, then it cannot be a subset
      return false;
    }
    var i = 0;
    while (i < this.size()) {
      if (!set.contains(this.dataStore[i])) {  // checks to see that each member of the subset is a member of the larger set
        return false;
      }
      else {
        i++;
      }
    }
    return true;
  }
  
  // returns a set that contains those members of the first set that are not in the second set
  function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.size(); i++) {
      if (!set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }
    return tempSet;
  }
  
  function display() {
    return this.dataStore;
  }
}

var set1 = new Set();
set1.add("Mike");
set1.add("Clayton");
set1.add("Jennifer");
set1.add("Raymond");
var set2 = new Set();
set2.add("Raymond");
set2.add("Cynthia");
set2.add("Jonathan");
set2.add("Mike");
var unionSet = new Set();
unionSet = set1.union(set2);
console.log("Union of set1 and set2 is: " + unionSet.display());
var intersectSet = new Set();
intersectSet = set1.intersect(set2);
console.log("Intersect of set1 and set2 is: " + intersectSet.display());
var diffSet = new Set();
diffSet = set1.difference(set2);
console.log("Difference of set1 and set2 is: " + diffSet.display());

