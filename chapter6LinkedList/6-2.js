// Doubly Linked List, add a property to Node class that stores a link to the previous node
// gain efficiency when remove a node from the list, since no longer have to search for the previous node
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
  
  // to insert a node after an existing node, we first have to find the "after" node in order to change its "next" property
  // we need to know where to insert the new node, so find the "after" node first
  // the argument "item" is the node that we want to insert a new node after or the node we want to remove
  // this is a helper function for insert() & remove() function
  function find(item) {
    var currNode = this.head;             // currNode has two properties: element & next
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  
  // find() function will return the node where to insert the new node after
  // insert newElement after item
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
 
  // findPrevious() function is no longer needed since we have "previous" property now
  // just need to find the node in the list that is storing the data we want to remove 
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
  
  // moves us to the last node of a list without going past the end of the list
  // this is a helper function for displayReverse() function
  function findLast() {
    var currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }
  
  // displaying a linked list in reverse order
  function displayReverse() {
    var currNode = this.findLast();
    while (currNode.previous !== null) {   // in order not to display head node
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  }
}

var monthes = new LinkedList();
monthes.insert("January", "head");
monthes.insert("February", "January");
monthes.insert("March", "February");
monthes.insert("April", "March");
monthes.insert("May", "April");
monthes.insert("August", "May");
monthes.display();
console.log();
monthes.remove("August");
monthes.displayReverse();
console.log();
monthes.remove("May");
monthes.displayReverse();
console.log();
monthes.remove("January");
monthes.displayReverse();
console.log();
monthes.display();

