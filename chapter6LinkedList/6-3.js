// Circularly Linked List has its head node’s next property point back to itself
// the last node of the list is always pointing back to the head of the list, creating a circular list
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
  
  // to insert a node after an existing node, we first have to find the "after" node in order to change its "next" property
  // the argument "item" is the node that we want to insert a new node after
  // this is a helper function for insert() function
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
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
  
  function display() {
    var currNode = this.head;
    while (currNode.next.element !== "head") {      // the head element is tested for and the loop will stop when it gets to the head or will cause infinite loop
      console.log(currNode.next.element);                                        // in order not to display head node
      currNode = currNode.next;
    }
  }
  
  // we need to know which node we want to remove, so find the node that is just before the node we want to remove in order to change its "next" property
  // the argument "item" is the node that we want to remove
  // this is a helper function for remove() function
  function findPrevious(item) {
    var currNode = this.head;
    while ((currNode.next.element !== "head") && (currNode.next.element !== item)) {          // currNode.next === null which means currNode is the final node
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

var cities = new LinkedList();
cities.insert("Taipei", "head");
cities.insert("Taoyuan", "Taipei");
cities.insert("Hsinchu", "Taoyuan");
cities.insert("Miaoli", "Hsinchu");
cities.insert("Taichung", "Miaoli");
cities.display();
console.log();
cities.remove("Taichung");
cities.display();
console.log();
cities.remove("Taipei");
cities.display();
console.log();

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
monthes.display();
console.log();
monthes.remove("March");
monthes.display();
console.log();
monthes.remove("April");
monthes.display();
console.log();

