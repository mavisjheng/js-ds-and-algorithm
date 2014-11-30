// assign partners at a square dance
function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count;
  
  function enqueue(element) {
    this.dataStore.push(element);
  }
  
  function dequeue() {
    return this.dataStore.shift();
  }
  
  function front() {
    return this.dataStore[0];
  }
  
  function back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  
  function toString() {
    var queueString = "";
    for (var i = 0; i < this.dataStore.length; i ++) {
      queueString += this.dataStore[i] + " ";
    }
    return queueString;
  }
  
  function empty() {
    if (this.dataStore.length === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
  function count() {
    return this.dataStore.length;
  }
}

// two-element array
var dancerNames = ["F Allison McMillan", "M Frank Opitz", "M Mason McMillan", "M Clayton Ruff", "F Cheryl Ferenback", 
                   "M Raymond Williams", "F Jennifer Ingram", "M Bryan Frazer", "M David Durr", "M Danny Martin",
                    "F Aurora Adney", "F Mavis Jheng", "M Myles Jao", "M James Chen", "F Patty Lee", "F Phoebe Lin", "M Andrew Liou", "F Sarah Bank"];

// each dancer is stored in a Dancer object
function Dancer(sex, name) {
  this.sex = sex;
  this.name = name;
}

// getDancers function to load the dancerNames into the queue by their sex
function getDancers(maleDancers, femaleDancers) {
  for(var i = 0; i < dancerNames.length; i++) {
    var dancer = dancerNames[i].split(" ");
    var sex = dancer[0];
    var name = dancer[1];
    if (sex === "F") {
      femaleDancers.enqueue(new Dancer(sex, name));
    }
    else {
      maleDancers.enqueue(new Dancer(sex, name));
    }
  }
}

// dance function pairs up the male and female dancers and announces the pairings
function dance(maleDancers, femaleDancers) {
  console.log("The dance partners are:");
  while(!femaleDancers.empty() && !maleDancers.empty()) {
    femaleDancer = femaleDancers.dequeue();
    maleDancer = maleDancers.dequeue();
    console.log("Female dancer is: " + femaleDancer.name + ", and Male dancer is: " + maleDancer.name + ".");
  }
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

// show who is waiting to dance
if (!femaleDancers.empty()) {
  console.log(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
  console.log(maleDancers.front().name + " is waiting to dance.");
}

// display the number of male and female dancers waiting to dance
if(femaleDancers.count() > 0) {
  console.log("There are " + femaleDancers.count() + " female dancers waiting to dance.");
}
if(maleDancers.count() > 0) {
  console.log("There are " + maleDancers.count() + " male dancers waiting to dance.");
}

