// Circularly Linked List
// place n people in a circle and specify that every mth person will be killed(removed)
// determine the number of the last s people left in the circle
function Node(element) {
  this.element = element;           // stores the node’s data
  this.next = null;                 // stores a link to the next node in the linked list
}

function LinkedList() {
  this.head = new Node("head");     // this node represents the head of the list
  this.head.next = this.head;       // the only change we have to make in order to make a singly linked list into a circularly linked list
  this.find = find;
  this.insert = insert;
  this.numOfInsert = numOfInsert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.finalAlive = finalAlive;
  
  // p: number of people
  // s: number of people left in the end
  // m: every mth person will be killed(removed)
  function finalAlive(p, s, m) {
    console.log("The removed nodes are:");
    var currNode = this.head;
    for(var n = 1; n <= p-s; n++) {
      for (var i = 1; i <= m; i++) {
        if (currNode.next.element !== "head") {
          currNode = currNode.next;
        }
        else {
          currNode = currNode.next.next;
        }
      }
      console.log(currNode.element);
      this.remove(currNode.element);
    }
  }
  
  // helper function for insert()
  function find(item) {
    var currNode = this.head;                 // currNode has two properties: element & next
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  
  // helper function for numOfInsert()
  function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
  
  // n: number of people to insert
  function numOfInsert(n) {
    this.insert(1, "head");
    for (var i = 2; i <= n; i++) {
      this.insert(i, i-1);
    }
  }
  
  function display() {
    var currNode = this.head;
    while (currNode.next.element !== "head") {      // the head element is tested for and the loop will stop when it gets to the head or will cause infinite loop
      console.log(currNode.next.element);           // in order not to display head node
      currNode = currNode.next;
    }
  }
  
  // helper function for remove()
  function findPrevious(item) {
    var currNode = this.head;
    while ((currNode.next.element !== "head") && (currNode.next.element !== item)) {          // currNode.next === null which means currNode is the final node
      currNode = currNode.next;
    }
    return currNode;
  }
  
  function remove(item) {
    var prevNode = this.findPrevious(item);
    if (prevNode.next !== null) {                   // prevNode.next === null which means the removed item doesn't exist
      prevNode.next = prevNode.next.next;
    }
  }
}

var soldiers = new LinkedList();
var total = 55;
soldiers.numOfInsert(total);
soldiers.finalAlive(total, 3, 5);
console.log("The number of the people left in the circle will be:");
soldiers.display();

