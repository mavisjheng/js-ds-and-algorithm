// Linked List
function Node(element) {
  this.element = element;           // stores the node’s data
  this.next = null;                 // stores a link to the next node
}

function LinkedList() {
  this.head = new Node("head");     // this node represents the head of the list
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.display = display;
  
  // to insert a node after an existing node, we first have to find the "after" node in order to change its "next" property
  // the argument "item" is the node that we want to insert a new node after
  // this is a helper function for insert() function
  function find(item) {
    var currNode = this.head;                // currNode has two properties: element & next
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  
  // find() function will return the node where to insert the new node after
  // insert newElement after item
  function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);           // insert newNode after current
    newNode.next = current.next;
    current.next = newNode;
  }
  
  function display() {
    var currNode = this.head;
    while (currNode.next !== null) {      
      console.log(currNode.next.element);    // in order not to display head node
      currNode = currNode.next;
    }
  }
  
  // we need to know which node we want to remove, so find the node that is just before the node we want to remove in order to change its (previous node) "next" property
  // stopping at each node to see if the next node stores the data that will be removed
  // the argument "item" is the node that we want to remove
  // this is a helper function for remove() function
  function findPrevious(item) {
    var currNode = this.head;
    while ((currNode.next !== null) && (currNode.next.element !== item)) {          // currNode.next === null which means currNode is the last node
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

