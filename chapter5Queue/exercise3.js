// modify the ED example so that the higher-priority elements have higher numbers rather than lower numbers
function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  
  function enqueue(element) {
    this.dataStore.push(element);
  }
  
  // find the element with the highest priority code (the highest priority code is 6, the lowest priority code is 1)
  function dequeue() {
    var highestPriority = this.dataStore[0].code;
    var patientNum = 0;
    for(var i = 1; i < this.dataStore.length; i++) {
      if(this.dataStore[i].code > highestPriority) {
        highestPriority = this.dataStore[i].code;
        patientNum = i;
      }
    }
    return this.dataStore.splice(patientNum, 1);
  }
  
  function front() {
    return this.dataStore[0];
  }
  
  function back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  
  // toString() function displays all the elements in a queue
  function toString() {
    var queueString = "";
    for (var i = 0; i < this.dataStore.length; i++) {
      queueString += this.dataStore[i].name + ", code: " + this.dataStore[i].code + "\n";
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
}

// code will be an integer that represents the patient’s priority
function Patient(name, code) {
  this.name = name;
  this.code = code;
}

var emergency = new Queue();
var patient = new Patient("Smith", 5);
emergency.enqueue(patient);
var patient = new Patient("Jones", 4);
emergency.enqueue(patient);
var patient = new Patient("Fehrenbach", 6);
emergency.enqueue(patient);
var patient = new Patient("Brown", 1);
emergency.enqueue(patient);
var patient = new Patient("Ingram", 1);
emergency.enqueue(patient);
var patient = new Patient("Lowey", 2);
emergency.enqueue(patient);
var patient = new Patient("Carol", 3);
emergency.enqueue(patient);
console.log(emergency.toString());
var seen = emergency.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patient waiting to be seen: ");
console.log(emergency.toString());

var seen = emergency.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patient waiting to be seen: ");
console.log(emergency.toString());

var seen = emergency.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patient waiting to be seen: ");
console.log(emergency.toString());

var seen = emergency.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patient waiting to be seen: ");
console.log(emergency.toString());

var seen = emergency.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patient waiting to be seen: ");
console.log(emergency.toString());

var seen = emergency.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patient waiting to be seen: ");
console.log(emergency.toString());

