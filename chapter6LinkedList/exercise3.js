// Circularly Linked List + advance() & show()
// advance(n, item): moves n nodes forward from item in the list
// show(): displays the data associated with the current node
function Node(element) {
  this.element = element;           // stores the node’s data
  this.next = null;                 // stores a link to the next node in the linked list
}

function LinkedList() {
  this.head = new Node("head");     // this node represents the head of the list
  this.head.next = this.head;       // the only change we have to make in order to make a singly linked list into a circularly linked list
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.advance = advance;
  this.show = show;
  this.showAdvance = showAdvance;
  
  // need to handle the case if currNode.next is head node, skip one more node to avoid printing head node
  function advance(n, item) {
    var currNode = this.find(item);
    for (var i = 1; i <= n; i++) {
      if (currNode.next.element !== "head") {
        currNode = currNode.next;
      }
      else {
        currNode = currNode.next.next;
      }
    }
    console.log(currNode.element);
    return currNode;
  }
  
  // need to handle the case if currNode.next is head node, skip one more node to avoid printing head node
  function show(item) {
    var currNode = this.find(item);
    if (currNode.next.element !== "head") {
      console.log("node element is: " + currNode.element);
      console.log("node next is: " + currNode.next.element);
    }
    else {
      console.log("node element is: " + currNode.element);
      console.log("node next is: " + currNode.next.next.element);
    }
  }
  
  // doesn't need to handle the case if currNode.next is head node, since advance() already handle this case
  function showAdvance(n, item) {
    var currNode = this.advance(n, item);        
    console.log("node element is: " + currNode.element);
    console.log("node next is: " + currNode.next.element);
  }
  
  function find(item) {
    var currNode = this.head;             // currNode has two properties: element & next
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  
  // find() function will return the node where to insert the new node after
  // insert newElement after item
  function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
  
  function display() {
    var currNode = this.head;
    while ((currNode.next !== null) && (currNode.next.element != "head")) {      // the head element is tested for and the loop will stop when it gets to the head or will cause infinite loop
      console.log(currNode.next.element);                                        // in order not to display head node
      currNode = currNode.next;
    }
  }
  
  // we need to know which node we want to remove, so find the node that is just before the node we want to remove in order to change its "next" property
  // the argument "item" is the node that we want to remove
  // this is a helper function for remove() function
  function findPrevious(item) {
    var currNode = this.head;
    while ((currNode.next !== null) && (currNode.next.element != item)) {          // currNode.next === null which means currNode is the final node
      currNode = currNode.next;
    }
    return currNode;
  }
  
  // skipping over the node we want to remove and linking the "previous" node with the node just after the one we are removing
  function remove(item) {
    var prevNode = this.findPrevious(item);
    if (prevNode.next !== null) {                 // prevNode.next === null which means the removed item doesn't exist
      prevNode.next = prevNode.next.next;
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
year.advance(12, "January");
console.log();
year.advance(6, "September");
console.log();
year.show("May");
console.log();
year.show("December");
console.log();
year.showAdvance(3, "December");
console.log();
year.remove("October");
year.showAdvance(2, "August");

