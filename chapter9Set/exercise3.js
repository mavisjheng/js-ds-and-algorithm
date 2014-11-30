// add the function "higher(element)" to the Set class, it returns the least element in the set strictly greater than the given element
// add the function "lower(element)" to the Set class, it returns the greatest element in the set strictly less than the given element
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
  this.higher = higher;
  this.lower = lower;
  
  function size() {
    return this.dataStore.length;
  }
  
  // indexOf() function to check to make sure the requested data isn’t already in the array
  function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      this.dataStore.sort();
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
    console.log(this.dataStore);
    return this.dataStore;
  }
  
  function higher(element) {
    var pos = this.dataStore.indexOf(element);
    if (pos > -1) {
      if (pos < this.size() - 1) {
        console.log("least element greater than " + element + " is: " + this.dataStore[pos + 1]);
        return this.dataStore[pos + 1];
      }
      else {
        console.log("no element is higher than " + element);
        return false;
      }
    }
    else {
      console.log("no such element inside the set");
      return false;
    }
  }
  
  function lower(element) {
    var pos = this.dataStore.indexOf(element);
    if (pos > -1) {
      if (pos > 0) {
        console.log("greatest element less than " + element + " is: " + this.dataStore[pos - 1]);
        return this.dataStore[pos - 1];
      }
      else {
        console.log("no element is less than " + element);
        return false;
      }
    }
    else {
      console.log("no such element inside the set");
      return false;
    }
    
  }
}

var names = new Set();
names.add("Chris");
names.add("John");
names.add("Mary");
names.add("Sam");
names.add("Tom");
names.add("Anne");
names.add("Mike");
names.add("Jack");
names.add("Mars");
names.add("Zac");
names.add("Max");
names.add("Will");
names.add("Alex");
names.add("Joe");
names.add("Danny");
names.display();
names.higher("ee");
names.lower("qq");
names.higher("Zac");
names.lower("Alex");
names.higher("Anne");
names.lower("Anne");

