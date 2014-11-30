// Doubly Linked List + advance() & show() & back()
// advance(n, item): moves n nodes forward from item in the list
// show(): displays the data associated with the current node
// back(n, item): moves n nodes backward from item in the list
function Node(element) {
  this.element = element;           // stores the node’s data
  this.next = null;                 // stores a link to the next node
  this.previous = null;             // stores a link to the previous node
}

function LinkedList() {
  this.head = new Node("head");     // this node represents the head of the list
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findLast = findLast;
  this.displayReverse = displayReverse;
  this.show = show;
  this.showAdvance = showAdvance;
  this.advance = advance;
  this.back = back;
  
  // moves n nodes forward from item in the list
  function advance(n, item) {
    var currNode = this.find(item);
    for (var i = 1; i <= n; i++) {
      if (currNode.next !== null) {
        currNode = currNode.next;
      }
      else {
        console.log("reaches the end of list before advances " + n + " nodes forward from " + item);
        return false;
      }
    }
    console.log(currNode.element);
    return currNode;
  }
  
  function show(item) {
    var currNode = this.find(item);
    console.log("node element is: " + currNode.element);
    console.log("node next is: " + currNode.next.element);
  }
  
  // need a conditional statement to handle the last node since not able to show the next element of last node 
  function showAdvance(n, item) {
    var currNode = this.advance(n, item);
    if (currNode.next !== null) {                         
      console.log("node element is: " + currNode.element);
      console.log("node next is: " + currNode.next.element);
    }
    else {
      console.log("node element is: " + currNode.element + ", and this is the last node of list");
    }
  }
  
  function find(item) {
    var currNode = this.head;             // currNode has two properties: element & next
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  
  function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);        // insert newNode after current
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
  }
  
  function display() {
    var currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
 
  function remove(item) {
    var currNode = this.find(item);
    if (currNode.next !== null) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }
    else {
      currNode.previous.next = null;
      currNode.next = null;
      currNode.previous = null;
    }
  }
  
  function findLast() {
    var currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }
  
  function back(n, item) {
    var currNode = this.find(item);
    for (var i = 1; i <= n; i++) {
      if (currNode.previous.element !== "head") {
        currNode = currNode.previous;
      }
      else {
        console.log("reaches the front of list before moves " + n + " nodes backward from " + item);
        return false;
      }
    }
    console.log(currNode.element);
    return currNode;
  }
  
  function displayReverse() {
    var currNode = this.findLast();
    while (currNode.previous !== null) {   // in order not to display head node
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  }
}

var year = new LinkedList();
year.insert("January", "head");
year.insert("February", "January");
year.insert("March", "February");
year.insert("April", "March");
year.insert("May", "April");
year.insert("June", "May");
year.insert("July", "June");
year.insert("August", "July");
year.insert("September", "August");
year.insert("October", "September");
year.insert("November", "October");
year.insert("December", "November");
year.display();
console.log();
year.advance(3, "September");
console.log();
year.advance(3, "August");
console.log();
year.show("June");
console.log();
year.remove("May");
year.showAdvance(8, "January");
console.log();
year.showAdvance(6, "June");
console.log();
year.back(8, "December");
console.log();
year.back(8, "April");

