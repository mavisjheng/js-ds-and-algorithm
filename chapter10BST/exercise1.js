// add a function to the BST class that counts the number of nodes in a BST
// add a function to the BST class that counts the number of edges in a BST 
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
  function show() {
    return this.data;
  }
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.find= find;
  this.remove = remove;
  this.removeNode = removeNode;
  this.getSmallest = getSmallest;
  this.count = count;
  this.countNodes = countNodes;
  this.countEdges = countEdges;
  
  // the purpose of var current is traverse, to check if its left child or right child is null, moves from level to level in the BST
  // ALWAYS insert new node as leaf node, so need to have a parent so that can decide to store at parent.left or parent.right
  // var currNode: used to see its child node is empty or not; var parent: used to store data as its left or right
  function insert(data) {
    var n = new Node(data, null, null);        // create a Node object, passing in the data the node will store
    if (this.root === null) {                  // if a root node doesn’t exist, then the BST is new and this node is the root node
      this.root = n;
    }
    else {
      var currNode = this.root;                 // for traverse
      var parent;                               // for store
      while (true) {
        parent = currNode;
        if (data < currNode.data) {
          currNode = currNode.left;
          if (currNode === null) {
            parent.left = n;
            break;
          }
        }
        else {
          currNode = currNode.right;
          if (currNode === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }
  
  // requires a comparison be made between the data stored in the current node and the value being searched for
  // the comparison will determine if the search travels to the left child node or to the right child node
  function find(data) {
    var currNode = this.root;
    while (currNode.data !== data) {
      if (data < currNode.data) {
        currNode = currNode.left;
      }
      else {
        currNode = currNode.right;
      }
      if (currNode === null) {
        return null;
      }
    }
    return currNode;
  }
  
  // helper function for removeNode()
  function getSmallest(node) {
    var currNode = node;
    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode;
  }
  
  function remove(data) {
    root = removeNode(this.root, data);
  }
  
  // helper function for remove()
  function removeNode(currNode, data) {
    if (currNode === null) {
      return null;
    }
    if (data === currNode.data) {               // compare to see if currNode holds the data we want to remove or not
      // node has no child
      if (currNode.left === null && currNode.right === null) {            
        return null;
      }
      // node has no left child
      if (currNode.left === null) {             
        return currNode.right;
      }
      // node has no right child
      if (currNode.right === null) {            
        return currNode.left;
      }
      // node has two children
      var tempNode = getSmallest(currNode.right);
      currNode.data = tempNode.data;
      currNode.right = removeNode (currNode.right, tempNode.data);
      return currNode;
    }
    // if removed data is smaller than currNode, keep traverse on left path
    else if (data < currNode.data) {
      currNode.left = removeNode (currNode.left, data);
      return currNode;
    }
    // if removed data is greater than currNode, keep traverse on right path
    else {
      currNode.right = removeNode (currNode.right, data);
      return currNode;
    }
  }
  
  function count() {
    var numOfNodes = countNodes(this.root, 0);
    return numOfNodes;
  }
  
  // helper function for count()
  function countNodes(currNode, numOfNodes) {
    if (currNode === null) {
      return numOfNodes;
    }
    // node has no child
    if (currNode.left === null && currNode.right === null) {
      numOfNodes++;
      return numOfNodes;
    }
    // node has no left child
    if (currNode.left === null) {
      numOfNodes++;
      currNode = currNode.right;
      numOfNodes = countNodes(currNode, numOfNodes);
      return numOfNodes;
    }
    // node has no right child
    if (currNode.right === null) {      
      numOfNodes++;
      currNode = currNode.left;
      numOfNodes = countNodes(currNode, numOfNodes);
      return numOfNodes;
    }
    // node has two children
    numOfNodes++;
    numOfNodes = countNodes(currNode.left, numOfNodes);
    numOfNodes = countNodes(currNode.right, numOfNodes);
    return numOfNodes;
  }
  
  // numOfEdges equals to numOfNodes -1, so make use of count() in order to get return of numOfNodes
  function countEdges() {
    var numOfEdges = this.count() - 1;
    return numOfEdges;
  }
}

var nums = new BST();
nums.insert(23);
nums.insert(13);
nums.insert(54);
nums.insert(7);
nums.insert(15);
nums.insert(2);
nums.insert(10);
nums.insert(14);
nums.insert(21);
nums.insert(46);
nums.insert(77);
nums.insert(32);
nums.insert(53);
nums.insert(68);
nums.insert(99);
console.log("Number of Nodes: " + nums.count());
console.log("Number of Edges: " + nums.countEdges());
nums.remove(2);
nums.remove(68);
console.log("Number of Nodes: " + nums.count());
console.log("Number of Edges: " + nums.countEdges());

