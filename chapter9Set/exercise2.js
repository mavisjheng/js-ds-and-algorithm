// modify the Set class so that it uses a linked list to store its elements rather than an array
// linked list + unique element + unordered collection
function Node(element) {
  this.element = element;           // stores the node’s data
  this.next = null;                 // stores a link to the next node
}

function setLList() {
  this.head = new Node("head");     // this node represents the head of the list
  this.find = find;
  this.findLast = findLast;
  this.insert = insert;
  this.display = display;
  
  // this is a helper function for insert() function, try to find whether the inserted node is duplicated
  function find(item) {
    var currNode = this.head.next;            // no need to compare the head node to item, so start at the first node
    while (currNode !== null) {               // currNode === null means it's at end of linked list, no more node
      if (currNode.element === item) {
        return true;                          // find duplicate, cannot be inserted
      }
      currNode = currNode.next;
    }
    return false;                             // no duplicate, can be inserted
  }
  
  function insert(newElement) {
    var isDuplicate = this.find(newElement);
    if (!isDuplicate) {                       // no duplicate, can be inserted
      var newNode = new Node(newElement);
      var currNode = this.findLast();         // set is an unordered collection so always store new element at the end of list
      newNode.next = currNode.next;
      currNode.next = newNode;
    }
    else {                                    // duplicate, cannot be inserted
      console.log("duplicated item, " + newElement + " cannot be inserted again");
    }
  }
  
  // this is a helper function for insert() function
  function findLast() {
    var currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }
  
  function display() {
    var currNode = this.head;
    while (currNode.next !== null) {      
      console.log(currNode.next.element);       // in order not to display head node
      currNode = currNode.next;
    }
  }
}

var cities = new setLList();
cities.insert("Taipei");
cities.insert("Taoyuan");
cities.insert("Hsinchu");
cities.insert("Miaoli");
cities.insert("Taichung");
cities.display();
cities.insert("Hsinchu");
cities.insert("Taichung");
cities.insert("Yunlin");
cities.insert("Chiayi");
cities.insert("Tainan");
cities.display();

