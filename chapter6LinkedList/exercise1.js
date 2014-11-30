// original Linked List + advance() & show()
// advance(n, item): moves n nodes forward from item in the list
// show(): displays the data associated with the current node
function Node(element) {
  this.element = element;           // stores the node’s data
  this.next = null;                 // stores a link to the next node
}

function LinkedList() {
  this.head = new Node("head");     // this node represents the head of the list
  this.find = find;
  this.show = show;
  this.showAdvance = showAdvance;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.advance = advance;
  this.display = display;
  
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
  
  // to insert a node after an existing node, we first have to find the "after" node in order to change its "next" property
  // the argument "item" is the node that we want to insert a new node after
  // this is a helper function for insert() function
  function find(item) {
    var currNode = this.head;             // currNode has two properties: element & next
    while (currNode.element != item) {
      currNode = currNode.next;
    }
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
  
  // find() function will return the node where to insert the new node after
  // insert newElement after item
  function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);        // insert newNode after current
    newNode.next = current.next;
    current.next = newNode;
  }
  
  function display() {
    var currNode = this.head;
    while (currNode.next !== null) {      
      console.log(currNode.next.element); // in order not to display head node
      currNode = currNode.next;
    }
    return currNode;
  }
  
  // we need to know which node we want to remove, so find the node that is just before the node we want to remove in order to change its (previous node) "next" property
  // stopping at each node to see if the next node stores the data that is to be removed
  // the argument "item" is the node that we want to remove
  // this is a helper function for remove() function
  function findPrevious(item) {
    var currNode = this.head;
    while ((currNode.next !== null) && (currNode.next.element != item)) {          // currNode.next === null which means currNode is the last node
      currNode = currNode.next;
    }
    return currNode;
  }
  
  // skipping over the node we want to remove and linking the "previous" node with the node just after the one we are removing
  function remove(item) {
    var prevNode = this.findPrevious(item);
    if (prevNode.next !== null) {                 // prevNode.next === null which means prevNode is the last node
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
year.advance(3, "September");
console.log();
year.advance(3, "August");
console.log();
year.show("June");
console.log();
year.showAdvance(8, "January");
console.log();
year.showAdvance(6, "June");

