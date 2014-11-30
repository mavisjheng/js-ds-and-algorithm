// modify the ED example so the user can control the activity in the ED 
// create a menu system that allows the user to choose from the following activities:
// 1. Patient enters ED
// 2. Patient is seen by doctor
// 3. Display list of patients waiting to be seen
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
  
  // find the element with the highest priority code (the highest priority code is 1, the lowest priority code is 6)
  function dequeue() {
    var highestPriority = this.dataStore[0].code;
    var patientNum = 0;
    for(var i = 1; i < this.dataStore.length; i++) {
      if(this.dataStore[i].code < highestPriority) {
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
var patient = new Patient("Kevin", 6);
emergency.enqueue(patient);
var patient = new Patient("Brown", 1);
emergency.enqueue(patient);
var patient = new Patient("Carol", 3);
emergency.enqueue(patient);
var patient = new Patient("Nora", 1);
emergency.enqueue(patient);
var patient = new Patient("Mary", 2);
emergency.enqueue(patient);

function EDSystem(activityNum, name) {
  if (activityNum === 1 && arguments.length === 2) {        // new patient enters ED
    var code = Math.floor(Math.random() * 6 + 1);
    var patient = new Patient(name, code);
    emergency.enqueue(patient);
    console.log("Patient entered successfully.");
    console.log("Patient list: ");
    console.log(emergency.toString());
  } 
  else if (activityNum === 1 && arguments.length < 2) {
    console.log("Please enter patient name."  + "\n");
  } 
  else if (activityNum === 2) {                              // patient is seen by doctor
    var seen = emergency.dequeue();
    console.log("Patient being treated now: " + seen[0].name + "\n");
  } 
  else if (activityNum === 3) {                              // display list of patients waiting to be seen
    console.log("Patient waiting to be seen: ");
    console.log(emergency.toString());
  } 
  else {
    console.log("Please enter correct acitivity number."  + "\n");
 }
}

EDSystem(1, "Rose");
EDSystem(1, "Adobe");
EDSystem(1, "Supreme");
EDSystem(2);
EDSystem(3);
EDSystem("dog");
EDSystem(4);
EDSystem(1);
EDSystem(2);
EDSystem(2);
EDSystem(2);
EDSystem(3);
